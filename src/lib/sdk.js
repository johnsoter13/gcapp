const LOCAL_HOST_URL = 'http://localhost:4000/api'

export const getAllGolfCourses = () => 
    fetch(`${LOCAL_HOST_URL}/getAllGolfCourses`, {method: 'GET'});