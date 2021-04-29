import { configureStore } from '@reduxjs/toolkit';
import sectionsSlice from './reducers/sectionsSlice';
import userSlice from './reducers/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    sections: sectionsSlice,
  },
});
