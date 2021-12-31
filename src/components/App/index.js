import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllGolfCoursesAction } from '../../state/golf-course/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGolfCoursesAction())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>Hi</div>
  );
}

export default App;
