import { HttpClient } from '../HttpClient';

export class StubHttpClient implements HttpClient{
  private data: any;
  constructor(data: any) {
    this.data = data;
  }

  get(url: string, config?: any) {
    return this.data;
  }
}
