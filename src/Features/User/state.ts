export interface IUserState {
  name: string;
  money: number;
  code: string;
}

export const INITIAL_STATE: IUserState = {
  name: '',
  money: 0,
  code: '0000',
};
