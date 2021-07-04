import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../Redux/rootReducers';
import {INITIAL_STATE, IUserState} from './state';

const UserSlice = createSlice({
  name: 'userData',
  initialState: INITIAL_STATE,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setMoneyUser: (state, action: PayloadAction<number>) => {
      state.money = action.payload;
    },
    setCodeUser: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    setUserData: (state, action: PayloadAction<IUserState>) => action.payload,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setUserDef: (state) => (state = INITIAL_STATE),
  },
});

export const {setName, setMoneyUser, setUserData, setCodeUser, setUserDef} =
  UserSlice.actions;

export const SelectUserData = (state: RootState) => state.userData;

export default UserSlice.reducer;
