//importing dependencies
import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={() => {
        /*if the localStorage item is set to the value within token the component is rendered*/
        if (localStorage.getItem('token')) {
          return <Component {...props}/>;
        }
        //if not the user is redirected to the login page.
        else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;