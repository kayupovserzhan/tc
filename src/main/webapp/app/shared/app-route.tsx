import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundary from 'app/shared/error/error-boundary';

export const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const encloseInErrorBoundary = props => (
    <ErrorBoundary>
      {Layout ? <Layout /> : null}
      <Component {...props} />
    </ErrorBoundary>
  );

  if (!Component) throw new Error(`A component needs to be specified for path ${(rest as any).path}`);

  return <Route {...rest} render={encloseInErrorBoundary} />;
};

export default AppRoute;
