import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const LoginComponent = React.lazy(() =>
  import("../RootComponents/RegistrationComponent")
);

const RegistrationPage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Registration Page</title>
          <meta name='description' content='Welcome to React' />
        </Helmet>
        <LoginComponent />
      </Suspense>
    </Fragment>
  );
};

export default RegistrationPage;
