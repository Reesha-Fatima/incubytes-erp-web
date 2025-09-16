import { BASE_URL } from '@settings';
import { ApiResponse } from 'apisauce';

import { getStorage, removeStorage } from '@storage';
import { StorageKeyTypes } from '@ts';
import { API } from '.';
import APIs, { ApisTypes } from './APIs';
import { ss, storeSharedState } from '@helper';

export const setBaseUrl = (endPoint: keyof ApisTypes) => {
  return API.setBaseURL(BASE_URL);
};

type ApiMethodsTypes = 'get' | 'post' | 'put' | 'delete' | 'patch';

type RequestParams<T, R> = {
  method: ApiMethodsTypes;
  endPoint: keyof ApisTypes;
  body?: R | any;
  callback?: (_res: ApiResponse<T>) => void;
  params?: string;
  skipError?: boolean;
  isLoginToken?: boolean;
};

type ResponseType<T> = ApiResponse<T & ErrorResponseType>;

export type UploadProgressTypes = {
  isTrusted: boolean;
  lengthComputable: number;
  loaded: number;
  total: number;
};

export const isFileRequest = (endPoint: keyof ApisTypes) => {
  return endPoint === 'postProflePhotos';
};

export async function request<T, R = null>({
  method,
  endPoint,
  body,
  callback,
  params = '',
  skipError,
  isLoginToken,
}: RequestParams<T, R>) {
  try {
    setBaseUrl(endPoint);
    const tokenStorage: any = await getStorage<StorageKeyTypes>('token');

    const token = tokenStorage ?? body?.token;
    // API.setHeader('ngrok-skip-browser-warning', 'true');

    if (token) API.setHeader('Authorization', `Bearer ${token}`);
    if (isFileRequest(endPoint)) {
      API.setHeader('Content-Type', 'multipart/form-data');
    } else {
      API.setHeader('Content-Type', 'application/json');
    }

    const res: ResponseType<T> = await API[method](
      `${APIs[endPoint]}${params}`,
      body,
    );

    if (res.status === 200 || res.status === 201) {
      callback && callback(res);
      if (res.ok || skipError) return res.data;
    } else if (res.status === 401) {
      removeStorage('token');
      removeStorage('user');
      window.location.href = '/login';
    } else {
      const resData: any = res.data;
      const msg =
        resData?.error?.message ??
        resData?.message ??
        resData?.data?.message ??
        resData?.message;

      storeSharedState(ss.toast, {
        visible: true,
        title: 'Error',
        message: msg?.toString(),
        type: 'error',
      });
      callback && callback(res);
      throw msg;
    }
  } catch (e: any) {
    // modalShow(e);
    throw e;
  }
}

type ErrorResponseType = {
  detail: string;
  code: string;
  message: string;
};
