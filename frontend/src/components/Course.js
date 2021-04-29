import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getCourseById } from '../data';
import { deleteSections, setSections } from '../store/reducers/sectionsSlice';
import NotFoundPage from './NotFoundPage';

const createSections = (courseId, sectionsList) => {
  const sections = [];
  sectionsList.map((section) => {
    return sections.push({
      to: `/course/${courseId}/${section.number}`,
      text: `${section.title}`,
      index: `${section.id}`,
    });
  });
  return sections;
};

const Course = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(deleteSections());
    };
  }, [dispatch]);

  const { courseId, sectionId } = useParams();

  const course = getCourseById(courseId);
  if (course === null) {
    return <NotFoundPage />;
  }

  let sections = course.sections;
  dispatch(setSections({ sections: createSections(courseId, sections) }));

  const result = sections.filter((section) => section.number === +sectionId);
  const section = result.length === 1 ? result[0] : null;

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

export default Course;
