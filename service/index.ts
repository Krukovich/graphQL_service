import fetch, { Response } from 'node-fetch';
import { HEADERS, METHOD } from '../constatns';
import { IContext } from '../interfaces';
import { handleError } from '../utils';

class HTTP {
  constructor() {}

  async get(url: string, context?: IContext): Promise<any> {
    const response: Response = await fetch(url, {
      method: METHOD.GET,
      headers: {
        ...HEADERS,
        Authorization: context && context.token ? context.token : '',
      },
    });

    handleError(response.status);
    return response.json();
  }

  async post(url: string, data: any, context: IContext): Promise<any> {
    const response: Response = await fetch(url, {
      method: METHOD.POST,
      body: JSON.stringify(data),
      headers: {
        ...HEADERS,
        Authorization: context && context.token ? context.token : '',
      },
    });

    handleError(response.status);
    return await response.json();
  }

  async put(url: string, data: any, context: IContext): Promise<any> {
    const response: Response = await fetch(url, {
      method: METHOD.PUT,
      body: JSON.stringify(data),
      headers: {
        ...HEADERS,
        Authorization: context && context.token ? context.token : '',
      },
    });

    handleError(response.status);
    return await response.json();
  }

  async delete(url: string, data: any, context: IContext): Promise<any> {
    const response: Response = await fetch(url, {
      method: METHOD.DELETE,
      body: JSON.stringify(data),
      headers: {
        ...HEADERS,
        Authorization: context && context.token ? context.token : '',
      },
    });

    handleError(response.status);
    return await response.json();
  }
}
export default new HTTP();
