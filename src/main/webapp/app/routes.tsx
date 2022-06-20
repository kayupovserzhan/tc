import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Login from 'app/modules/login/login';
import Register from 'app/modules/account/register/register';
import Activate from 'app/modules/account/activate/activate';
import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
import Logout from 'app/modules/login/logout';
import Home from 'app/modules/home/home';
import EntitiesRoutes from 'app/entities/routes';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';
import CoverCar from './modules/cover-car/CoverCar';
import WeighingСar from './modules/weighing-car/WeighingСar';
import RouteSurvey from './modules/route-survey/RouteSurvey';
import FullSupport from './modules/full-support/FullSupport';
import PreventionAnalysis from './modules/prevention-analysis/PreventionAnalysis';
import ProtectionInterests from './modules/protection-interests/ProtectionInterests';
import Tahograf from './modules/tahograf/Tahograf';
import Escort from './modules/escort/Escort';
import AppRoute from './shared/app-route';
import MainLayout from './shared/layout/main-layout';
import Calcultor from './modules/calculator/calculator';

const loading = <div>loading ...</div>;

const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
  loading: () => loading,
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => loading,
});

const Routes = () => {
  return (
    <div className="view-routes">
      <Switch>
        {/* <ErrorBoundaryRoute path="/login" component={Login} />
        <ErrorBoundaryRoute path="/logout" component={Logout} /> */}
        <ErrorBoundaryRoute path="/calculator" component={Calcultor} />
        <ErrorBoundaryRoute path="/escort" component={Escort} />
        <ErrorBoundaryRoute path="/tahograf" component={Tahograf} />
        <ErrorBoundaryRoute path="/protection-interests" component={ProtectionInterests} />
        <ErrorBoundaryRoute path="/prevention-analysis" component={PreventionAnalysis} />
        <ErrorBoundaryRoute path="/full-support" component={FullSupport} />
        <ErrorBoundaryRoute path="/route-survey" component={RouteSurvey} />
        <ErrorBoundaryRoute path="/weighing-car" component={WeighingСar} />
        <ErrorBoundaryRoute path="/cover-car" component={CoverCar} />
        <ErrorBoundaryRoute path="/account/register" component={Register} />
        <ErrorBoundaryRoute path="/account/activate/:key?" component={Activate} />
        <ErrorBoundaryRoute path="/account/reset/request" component={PasswordResetInit} />
        <ErrorBoundaryRoute path="/account/reset/finish/:key?" component={PasswordResetFinish} />
        <PrivateRoute path="/admin" component={Admin} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
        <PrivateRoute path="/account" component={Account} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]} />
        <AppRoute path="/" layout={MainLayout} exact component={Home} />
        {/* <ErrorBoundaryRoute path="/" exact component={Home} /> */}
        <PrivateRoute path="/" component={EntitiesRoutes} hasAnyAuthorities={[AUTHORITIES.USER]} />
        <ErrorBoundaryRoute component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
