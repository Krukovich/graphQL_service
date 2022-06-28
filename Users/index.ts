import { User } from '../interfaces';
import HTTP from '../service';
import { ENDPOINTS } from '../constatns';
import { v4 as uuidv4 } from 'uuid';

export const UsersMutations: {
  register: (_: null, data: User) => Promise<User>;
} = {
  register: async (_: null, data: User): Promise<User> => {
    const http: HTTP = new HTTP();
    return await http.post(ENDPOINTS.USERS.REGISTER, {
      id: uuidv4(),
      ...data,
    });
  },
};
