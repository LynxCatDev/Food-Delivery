import { Dispatch, SetStateAction } from 'react';
import { IUser } from 'types/user.interface';

export type UserStateType = IUser | null;

export interface IAuthContext {
  user: UserStateType;
  setUser: Dispatch<SetStateAction<UserStateType>>;
}
