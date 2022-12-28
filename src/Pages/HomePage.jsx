import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const HomeComponent = React.lazy(() =>
  import("../RootComponents/HomeComponent")
);

const HomePage = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <Helmet>
          <title>Welcome to React</title>
          <meta name='description' content='Welcome to React' />
        </Helmet>
        <HomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
