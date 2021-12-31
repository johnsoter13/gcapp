import { configureStore } from '@reduxjs/toolkit';

import golfCourse from './golf-course/reducer';

export const store = configureStore({
  reducer: {
    golfCourse, 
  },
});
