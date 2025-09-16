import { request } from '@services';
import { ResponseType, TypeLoginForm } from '@ts';

export async function postLogin(body: TypeLoginForm) {
  return request<ResponseType<any>>({
    method: 'post',
    endPoint: 'authLogin',
    body,
  });
}
