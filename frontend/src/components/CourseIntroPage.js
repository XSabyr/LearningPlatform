import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getCourseById, GetUserFirstLastNamesById } from '../data';
import NotFoundPage from './NotFoundPage';

const CourseIntroPage = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  let history = useHistory();

  let { courseId } = useParams();
  const course = getCourseById(courseId);
  if (course === null) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <Typography variant="h3">{course.title}</Typography>
      <Typography variant="h6">created by: {GetUserFirstLastNamesById(course.creator)}</Typography>
      <Typography variant="h4">{course.introduction}</Typography>
      {isAuthenticated && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push(`/course/${courseId}/1`)}>
          Get Started
        </Button>
      )}
      {!isAuthenticated && (
        <Button variant="contained" color="primary" onClick={() => history.push('/signin')}>
          Sign In to get started
        </Button>
      )}
    </div>
  );
};

export default CourseIntroPage;
