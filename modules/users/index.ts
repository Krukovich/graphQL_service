import { User } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';
import { v4 as uuidv4 } from 'uuid';

export const UsersMutations: {
  register: (_: null, data: User) => Promise<User>;
  login: (_: null, data: { email: string; password: string }) => Promise<{ jwt: string }>;
} = {
  register: async (_: null, data: User): Promise<User> => {
    const http: HTTP = new HTTP();
    return await http.post(ENDPOINTS.USERS.REGISTER, {
      id: uuidv4(),
      ...data,
    });
  },
  login: async (_: null, data: { email: string; password: string }): Promise<{ jwt: string }> => {
    const http: HTTP = new HTTP();
    return await http.post(ENDPOINTS.USERS.LOGIN, data);
  },
};
