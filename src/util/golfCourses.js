import { mapKeys, camelCase } from "lodash";
export const formatGolfCourses = (golfCoursesJSON) => {
  const formattedGolfCourses = {};

  Object.values(golfCoursesJSON?.getAllGolfCourses).forEach((golfCourse) => {
    const camelCaseGC = mapKeys(golfCourse, (v, k) => camelCase(k));
    formattedGolfCourses[camelCaseGC.golfCourseName] = camelCaseGC;
  });

  return formattedGolfCourses;
}