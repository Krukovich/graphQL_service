import fetch from 'node-fetch';

// TODO ADD TYPES
class HTTP {
  constructor() {}

  async get(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
  }
}
export default HTTP;
