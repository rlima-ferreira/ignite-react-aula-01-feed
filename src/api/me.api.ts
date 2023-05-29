import { api } from '../libs/api';

export interface IMe {
  id: string;
  avatarUrl: string;
  name: string;
  coverUrl: string;
  role: string;
}

const route = '';

export const meApi = {
  findOne: async () => api.get(route),
};
