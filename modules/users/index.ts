import { IContext, User } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';

export const usersMutations: {
  register: (_: null, data: User, context: IContext) => Promise<User>;
} = {
  register: async (_: null, data: User, context: IContext): Promise<User> => {
    return await http.post(ENDPOINTS.USERS.REGISTER, data, context);
  },
};

export const usersQuery: {
  getUserById: (_: null, data: { id: string }) => Promise<User>;
  login: (_: null, data: { email: string; password: string }, context: IContext) => Promise<{ jwt: string }>;
} = {
  getUserById: async (_: null, data: { id: string }): Promise<User> => {
    return await http.get(`${ENDPOINTS.USERS.GET}${data.id}`);
  },
  login: async (_: null, data: { email: string; password: string }, context: IContext): Promise<{ jwt: string }> => {
    return await http.post(ENDPOINTS.USERS.LOGIN, data, context);
  },
};
