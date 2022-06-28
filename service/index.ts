import fetch from 'node-fetch';

// TODO ADD TYPES
class HTTP {
  constructor() {}

  async get(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
  }

  async post(url: string, data: any): Promise<any> {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }
}
export default HTTP;
