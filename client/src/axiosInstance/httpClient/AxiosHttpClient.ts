import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { injectable } from 'tsyringe';

import { baseUrl } from '../constants';
import { HttpClient } from './HttpClient';

@injectable()
export class AxiosHttpClient implements HttpClient {
  private axios: AxiosInstance;

  constructor() {
    const config: AxiosRequestConfig = { baseURL: baseUrl };
    this.axios = axios.create(config);
  }

  get(url: string, config?: any) {
    return this.axios.get(url, config);
  }
}
