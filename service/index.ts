import fetch from 'node-fetch';
import { HEADERS, METHOD } from '../constatns';
import { IContext } from '../interfaces';

// TODO ADD TYPES
class HTTP {
  constructor() {}

  async get(url: string): Promise<any> {
    const response = await fetch(url, {
      method: METHOD.GET,
      headers: HEADERS,
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
}
export default HTTP;
