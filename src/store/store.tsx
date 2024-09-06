import { configureStore } from '@reduxjs/toolkit';
import userReduсer from './userSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    users: userReduсer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;