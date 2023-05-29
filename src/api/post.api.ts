import { api } from '../libs/api';

export interface IAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface IComment {
  id: string;
  text: string;
  publishedAt: Date;
  author: IAuthor;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  publishedAt: Date;
  author: IAuthor;
  comments: IComment[];
}

const route = '';

export const postApi = {
  findAll: async (params?: any) => api.get(route, { params }),
};
