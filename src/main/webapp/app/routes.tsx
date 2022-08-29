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
import Contacts from './modules/contacts/contacts';
import About from './modules/about/about';
import SignIn from './modules/sign-in/sign-in';
import SignUp from './modules/sign-up/sign-up';

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
        <AppRoute layout={MainLayout} path="/sign-in" component={SignIn} />
        <AppRoute layout={MainLayout} path="/sign-up" component={SignUp} />
        <AppRoute layout={MainLayout} path="/escort" component={Escort} />
        <AppRoute layout={MainLayout} path="/tahograf" component={Tahograf} />
        <AppRoute layout={MainLayout} path="/protection-interests" component={ProtectionInterests} />
        <AppRoute layout={MainLayout} path="/prevention-analysis" component={PreventionAnalysis} />
        <AppRoute layout={MainLayout} path="/full-support" component={FullSupport} />
        <AppRoute layout={MainLayout} path="/route-survey" component={RouteSurvey} />
        <AppRoute layout={MainLayout} path="/weighing-car" component={WeighingСar} />
        <AppRoute layout={MainLayout} path="/cover-car" component={CoverCar} />
        <AppRoute layout={MainLayout} path="/contacts" component={Contacts} />
        <AppRoute layout={MainLayout} path="/about" component={About} />
        <AppRoute layout={MainLayout} path="/account/register" component={Register} />
        <AppRoute layout={MainLayout} path="/account/activate/:key?" component={Activate} />
        <AppRoute layout={MainLayout} path="/account/reset/request" component={PasswordResetInit} />
        <AppRoute layout={MainLayout} path="/account/reset/finish/:key?" component={PasswordResetFinish} />
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
