// React Imports
import React from 'react';
import { Route } from 'react-router-dom';

// Auth0 Import
import { useAuth0 } from '@auth0/auth0-react';

// Route Imports
import Home from './Home/Home';
import ShowProjects from './ShowProjects/ShowProjects';
import ShowProject from './ShowProject/ShowProject';

export default function Routes({ projectId, focusProject }) {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      {/* "/" => ShowProjects */}
      <Route
        exact
        path="/"
        render={() => (
          isAuthenticated ? (
            <ShowProjects user={user} focusProject={focusProject} />
          ) : (
            <Home />
          )
        )}
      />

      {/* "/project/" => ShowProject */}
      <Route
        path="/project/"
        render={() => (
          isAuthenticated ? (
            <ShowProject user={user} projectId={projectId} />
          ) : (
            <Home />
          )
        )}
      />
    </div>
  );
}
