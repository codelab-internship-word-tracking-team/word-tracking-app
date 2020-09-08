import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../Features/token/tokenSlice';

export default configureStore({
  reducer: {
    token: tokenReducer,
  },
});
