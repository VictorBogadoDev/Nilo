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
    setMoney: (state, action: PayloadAction<number>) => {
      state.money = action.payload;
    },
    setCodeUser: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    setUserData: (state, action: PayloadAction<IUserState>) => action.payload,
  },
});

export const {setName, setMoney, setUserData, setCodeUser} = UserSlice.actions;

export const SelectUserData = (state: RootState) => state.userData;

export default UserSlice.reducer;
