export interface User {
  username: string;
  password: string;
}

const mockUser: User = {
  username: "user",
  password: "1234",
};

export const authenticate = (username: string, password: string): boolean => {
  return username === mockUser.username && password === mockUser.password;
};
