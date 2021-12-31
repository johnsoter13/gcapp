/* eslint-disable default-case */
import { produce } from 'immer';
import { SUCCESS } from '../constants';
import { GET_ALL_GOLF_COURSES } from './constants';



const initialState = {
    golfCourses: {},
};

export default produce((draft, action) => {
  switch (action.type) {
    case GET_ALL_GOLF_COURSES:
      switch (action.status) {
        case SUCCESS: 
          draft.golfCourseLoadingStatus = action.status;
          draft.golfCourses = action.payload.golfCourses;
          break;
        default: draft.golfCourseLoadingStatus = action.status;
      }
    break;
  }
}, initialState);