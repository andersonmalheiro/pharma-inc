import { configureStore } from '@reduxjs/toolkit';
import userListReducer from './reducers/usersSlice';

export const store = configureStore({
  reducer: {
    userList: userListReducer,
  },
});
