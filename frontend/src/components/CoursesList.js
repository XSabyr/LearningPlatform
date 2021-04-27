import { Link, useLocation, useParams } from 'react-router-dom';
import React from 'react';
import { GetCourses, GetCoursesWithSearch } from '../data';
import CoursesListItem from './CoursesListItem';
import { Typography } from '@material-ui/core';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CoursesList = () => {
  const query = useQuery();
  const search = query.get('search');

  const courses = search === null ? GetCourses() : GetCoursesWithSearch(search);

  if (courses === null) {
    return <Typography variant="h5">No courses Found</Typography>;
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
