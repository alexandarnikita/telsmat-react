import axios, { AxiosRequestConfig, Method } from 'axios';
import { IHttpError, IHttpResponse } from '../resources/interfaces';
import { API_SERVER, ACCESS_TOKEN } from "../config";
import { history } from '../redux/store';

const http = axios.create({ baseURL: `${API_SERVER}/api/` });

const request = (method: Method, url: string, options: AxiosRequestConfig) => {
  return http
    .request({
      ...options,
      method,
      url,
      headers: {
        ...options.headers,
        Authorization: `Token ${ACCESS_TOKEN}`
      },
    })
    .then(httpResponseHandler)
    .catch(httpErrorHandler);
}

const httpResponseHandler = (response: any): IHttpResponse => {
  return response;
}

const httpErrorHandler = (err: any): IHttpResponse => {
  const response = err?.response;
  if (response?.status === 401) {
    history.push('/');
  }

  const data = response?.data;
  if (!data) {
    history.push('/');
  }

  throw {
    ...data,
    message: data?.message || 'Network Error!',
  } as IHttpError;
}

const Http = {
  get(url: string, params: any = {}, headers: any = {}) {
    return request('GET', url, { params, headers });
  },
  post(url: string, body: any = {}, headers: any = {}) {
    return request('POST', url, { data: body, headers });
  },
  put(url: string, body: any = {}, headers: any = {}) {
    return request('PUT', url, { data: body, headers });
  },
  patch(url: string, body: any = {}, headers: any = {}) {
    return request('PATCH', url, { data: body, headers });
  },
  delete(url: string, body: any = {}, headers: any = {}) {
    return request('DELETE', url, { data: body, headers });
  },
};

export default Http;
