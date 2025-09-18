import { request } from '@services';
import { ResponseType, TypeLoginForm } from '@ts';

export async function getSubscriptionPlans() {
  return request<ResponseType<any>>({
    method: 'get',
    endPoint: 'getSubscriptionPlans',
  });
}
