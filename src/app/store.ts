import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import battlefieldReducer from './battlefield/Battlefield';

export const store = configureStore({
  reducer: {
    battlefield: battlefieldReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
