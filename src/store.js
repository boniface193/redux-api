import { configureStore } from '@reduxjs/toolkit';
import userSlice from './store/users/userSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
