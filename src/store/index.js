import { configureStore } from '@reduxjs/toolkit';
import filterReduser from './filterSlice';
import userReduser from './userSlice';

export default configureStore({
  reducer: {
    filter: filterReduser,
    users: userReduser
  },
});