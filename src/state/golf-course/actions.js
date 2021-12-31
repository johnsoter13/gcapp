import { getAllGolfCourses } from "../../lib/sdk";
import { formatGolfCourses } from "../../util/golfCourses";
import { FAILURE, PENDING, SUCCESS } from "../constants"
import { GET_ALL_GOLF_COURSES } from "./constants"

export const getAllGolfCoursesAction = () => (dispatch) => {
    dispatch({
        type: GET_ALL_GOLF_COURSES,
        status: PENDING,
    });

    return getAllGolfCourses()
        .then((response) => response.text())
        .then((text) => {
            const golfCoursesJSON = JSON.parse(text);
            
            const golfCoursesFormatted = formatGolfCourses(golfCoursesJSON);
            dispatch({
                type: GET_ALL_GOLF_COURSES,
                status: SUCCESS,
                payload: {golfCourses: golfCoursesFormatted}
            })
        })
        .catch(() => {
            dispatch({
                type: GET_ALL_GOLF_COURSES,
                status: FAILURE,
            })
        })
};