import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const LoginComponent = React.lazy(() =>
  import("../RootComponents/LoginComponent")
);

const LoginPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Login Page</title>
          <meta name='description' content='Welcome to React' />
        </Helmet>
        <LoginComponent />
      </Suspense>
    </Fragment>
  );
};

export default LoginPage;
