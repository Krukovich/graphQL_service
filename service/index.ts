import fetch from 'node-fetch';
import { HEADERS, METHOD } from '../constatns';

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

  //TODO ADD LOGIC FOR GET JWT TOKEN
  async post(url: string, data: any): Promise<any> {
    const response = await fetch(url, {
      method: METHOD.POST,
      body: JSON.stringify(data),
      headers: {
        ...HEADERS,
        // Authorization: authToken ? `Bearer ${authToken}` : '',
      },
    });

    return await response.json();
  }
}
export default HTTP;
