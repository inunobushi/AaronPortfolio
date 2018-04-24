import * as React from 'react';
import { Route, Redirect} from 'react-router-dom';
import AuthGuard from './AuthGuardService';
const authGuard:AuthGuard = new AuthGuard();

const PrivateRoute = (Component:any , ...rest:any[]) => {
return (
    <Route
      {...rest}
      render={(props: any) =>
        authGuard.isUserLoggedIn ? (
          <Component.component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
};

  export default PrivateRoute