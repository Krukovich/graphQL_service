import { IContext, User } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

export const UsersMutations: {
  register: (_: null, data: User, context: IContext) => Promise<User>;
  login: (_: null, data: { email: string; password: string }, context: IContext) => Promise<{ jwt: string }>;
} = {
  register: async (_: null, data: User, context: IContext): Promise<User> => {
    const http: HTTP = new HTTP();
    return await http.post(ENDPOINTS.USERS.REGISTER, data, context);
  },
  login: async (_: null, data: { email: string; password: string }, context: IContext): Promise<{ jwt: string }> => {
    const http: HTTP = new HTTP();
    return await http.post(ENDPOINTS.USERS.LOGIN, data, context);
  },
};

export const UsersQuery: {
  getUsers: () => Promise<User[]>;
  getUserById: (_: null, data: { id: string }) => Promise<User>;
} = {
  getUsers: async (): Promise<User[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.USERS.GET_USERS);
    return data.items;
  },
  getUserById: async (_: null, data: { id: string }): Promise<User> => {
    const http: HTTP = new HTTP();
    return await http.get(`${ENDPOINTS.USERS.GET_USERS}${data.id}`);
  },
};
