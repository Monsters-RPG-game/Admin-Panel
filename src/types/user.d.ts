export interface IUser {
  login: string;
  sub: string;
}

export interface IUserTokens {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}
