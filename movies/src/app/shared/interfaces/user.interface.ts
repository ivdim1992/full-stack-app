export interface IUser {
  user: {
    email: string;
    token: string;
    firstName?: string;
    lastName?: string;
    phone?: number;
  };
}
