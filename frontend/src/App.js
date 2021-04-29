import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import NotFoundPage from './components/NotFoundPage';
import CoursesList from './components/CoursesList';
import CourseIntroPage from './components/CourseIntroPage';
// import CourseSection from './components/CourseSection';
import SignIn from './components/SignIn';
import { useSelector } from 'react-redux';
import Course from './components/Course';
import Settings from './components/Settings';
import CreateCourse from './components/CreateCourse';

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <BrowserRouter>
      <Header>
        <Switch>
          <Route exact path="/" component={isAuthenticated ? CoursesList : WelcomePage} />
          <Route path="/courses" component={CoursesList} />
          <Route path="/course/:courseId/:sectionId" component={Course} />
          <Route path="/course/:courseId" component={CourseIntroPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/courses/started" component={CoursesList} />
          <Route path="/courses/creator" component={CoursesList} />
          <Route path="/account/settings" component={Settings} />
          <Route path="/account/createcourse" component={CreateCourse} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Header>
    </BrowserRouter>
  );
}

export default App;
