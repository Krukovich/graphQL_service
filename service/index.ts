import fetch from 'node-fetch';
import { HEADERS, METHOD } from '../constatns';
import { IContext } from '../interfaces';

// TODO ADD TYPES
class HTTP {
  constructor() {}

  async get(url: string, context?: IContext): Promise<any> {
    const response = await fetch(url, {
      method: METHOD.GET,
      headers: {
        ...HEADERS,
        Authorization: (context && context.token) ? context.token : '',
      },
    });
    return response.json();
  }

  async post(url: string, data: any, context: IContext): Promise<any> {
    const response = await fetch(url, {
      method: METHOD.POST,
      body: JSON.stringify(data),
      headers: {
        ...HEADERS,
        Authorization: context.token ? context.token : '',
      },
    });

    return await response.json();
  }

  async put(url: string, data: any, context: IContext): Promise<any> {
    const response = await fetch(url, {
      method: METHOD.PUT,
      body: JSON.stringify(data),
      headers: {
        ...HEADERS,
        Authorization: context.token ? context.token : '',
      },
    });

    return await response.json();
  }

  async delete(url: string, data: any, context: IContext): Promise<any> {
    const response = await fetch(url, {
      method: METHOD.DELETE,
      body: JSON.stringify(data),
      headers: {
        ...HEADERS,
        Authorization: context.token ? context.token : '',
      },
    });

    return await response.json();
  }
}
export default HTTP;
