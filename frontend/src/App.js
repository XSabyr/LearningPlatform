import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import NotFoundPage from './components/NotFoundPage';
import CoursesList from './components/CoursesList';
import CourseIntroPage from './components/CourseIntroPage';
import CourseSection from './components/CourseSection';
import SignIn from './components/SignIn';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <BrowserRouter>
      <Header>
        <Switch>
          <Route exact path="/">
            {isAuthenticated ? <Redirect to="/courses" /> : <WelcomePage />}
          </Route>
          <Route path="/courses" component={CoursesList} />
          <Route path="/courses?search" component={CoursesList} />
          <Route path="/course/:courseId/:sectionId" component={CourseSection} />
          <Route path="/course/:courseId" component={CourseIntroPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Header>
    </BrowserRouter>
  );
}

export default App;
