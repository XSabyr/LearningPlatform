import { Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import { getCourseById } from '../data';
import NotFoundPage from './NotFoundPage';

const CourseSection = () => {
  const { courseId, sectionId } = useParams();
  const course = getCourseById(courseId);

  let section = course.sections.filter((section) => section.number === +sectionId);
  section = section.length === 0 ? null : section[0];

  console.log(section);
  if (section === null) {
    return <NotFoundPage />;
  }

  return (
    <div>
      {' '}
      <Typography variant="h3">
        Hello im the section {sectionId} of the course {courseId}{' '}
      </Typography>
      <Typography variant="h5">My content is: </Typography>
      <Typography variant="h6">{section.content}</Typography>
    </div>
  );
};

export default CourseSection;
