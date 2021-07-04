import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../../Redux/rootReducers';
import {AppDispatch, AppThunk} from '../../../Redux/store';
import {existsData} from '../../../helper/asyncStorage/storage';
import {setUserData} from '../User/slice';
import {IUserState} from '../User/state';

interface ISplashState {
  loading: boolean;
  existData: boolean;
}

const INITIAL_STA: ISplashState = {
  loading: true,
  existData: false,
};

export const splashSlice = createSlice({
  name: 'splash',
  initialState: INITIAL_STA,
  reducers: {
    splashLoading: (state) => {
      state.loading = true;
    },
    splashStopLoading: (state) => {
      state.loading = false;
    },
    existData: (state) => {
      state.existData = true;
    },
    notExistData: (state) => {
      state.existData = false;
    },
  },
});

export const {splashLoading, splashStopLoading, existData, notExistData} =
  splashSlice.actions;

export const selectSplashData = (state: RootState) => state.splash;

export default splashSlice.reducer;

export const verifyData = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(splashLoading());
  // Obtener data del async storage
  try {
    const savedUserData: IUserState | null = await existsData();

    if (savedUserData === null) {
      dispatch(notExistData());
    } else {
      dispatch(existData());
      dispatch(setUserData(savedUserData));
    }
  } catch (err) {
    throw new err.mensage();
  }

  dispatch(splashStopLoading());
};
