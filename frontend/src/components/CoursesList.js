import { Link, useHistory, useLocation } from 'react-router-dom';
import React from 'react';
import {
  GetCourses,
  GetCoursesByCreator,
  GetCoursesWithSearch,
  GetStartedCoursesByUserId,
} from '../data';
import CoursesListItem from './CoursesListItem';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import NotFoundPage from './NotFoundPage';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CoursesList = () => {
  const query = useQuery();
  let location = useLocation();
  let history = useHistory();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userId = useSelector((state) => state.user.id);
  let courses;

  if (location.pathname === '/courses/started') {
    if (!isAuthenticated) {
      history.push('/signin');
    }
    courses = GetStartedCoursesByUserId(userId);
    if (courses.length === 0) {
      return <NotFoundPage text="You didnt start any course" />;
    }
  } else if (location.pathname === '/courses/creator') {
    if (!isAuthenticated) {
      history.push('/signin');
    }
    courses = GetCoursesByCreator(userId);
    if (courses.length === 0) {
      return <NotFoundPage text="You didnt create any course" />;
    }
  } else {
    const search = query.get('search');

    courses = search === null ? GetCourses() : GetCoursesWithSearch(search);

    if (courses === null) {
      return <Typography variant="h5">No courses Found</Typography>;
    }
  }
  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {courses.map((course) => {
          return (
            <li key={course.id} style={{ marginBottom: '15px' }}>
              <Link to={`course/${course.id}`} style={{ textDecoration: 'none' }}>
                <CoursesListItem course={course} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CoursesList;
