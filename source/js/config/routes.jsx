import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'views/Dashboard';
import About from 'views/About';
import ABTests from 'views/Optimization/ABTests';
import Behavior from 'views/Customization/Behavior';
import Code from 'views/Installation/Code';
import InviteButton from 'views/Customization/InviteButton';
import InviteForm from 'views/Customization/InviteForm';
import InviteEmail from 'views/Customization/InviteEmail';
import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  CODE: `${ publicPath }code`,
  INVITE_BUTTON: `${ publicPath }inviteButton`,
  INVITE_FORM: `${ publicPath }inviteForm`,
  INVITE_EMAIL: `${ publicPath }inviteEmail`,
  BEHAVIOR: `${ publicPath }behavior`,
  AB_TESTS: `${ publicPath }abTests`,
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Dashboard } />
    <Route path={ routeCodes.ABOUT } component={ About } />
    <Route path={ routeCodes.CODE } component={ Code } />
    <Route path={ routeCodes.INVITE_BUTTON } component={ InviteButton } />
    <Route path={ routeCodes.INVITE_FORM } component={ InviteForm } />
    <Route path={ routeCodes.INVITE_EMAIL } component={ InviteEmail } />
    <Route path={ routeCodes.BEHAVIOR } component={ Behavior } />
    <Route path={ routeCodes.AB_TESTS } component={ ABTests } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
