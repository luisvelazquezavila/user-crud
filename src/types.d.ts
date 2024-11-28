type UserId = `${string}-${string}-${string}-${string}-${string}`;

export interface User {
  name: string,
  username: string,
  id?: UserId
};

export interface TheadKey {
  title: string
};

export type TheadKeyList = TheadKey[];

export type UserList = User[];