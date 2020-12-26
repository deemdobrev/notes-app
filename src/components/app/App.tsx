import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  ROUTE_CREATE_NOTE,
  ROUTE_EDIT_NOTE,
  ROUTE_HOME,
  ROUTE_NOTES,
  ROUTE_VIEW_NOTE,
} from '../../constants/routes.constants';
import { SideMenu } from '../side-menu/SideMenu';
import { ViewNote } from '../view-note/ViewNote';
import { WriteNote } from '../write-note/WriteNote';
import { useStyles } from './App.styles';

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideMenu />
      <Switch>
        <Route exact path={ROUTE_HOME}>
          <Redirect to={ROUTE_NOTES} />
        </Route>
        <Route exact path={[ROUTE_NOTES, ROUTE_VIEW_NOTE]}>
          <ViewNote />
        </Route>
        <Route exact path={[ROUTE_CREATE_NOTE, ROUTE_EDIT_NOTE]}>
          <WriteNote />
        </Route>
      </Switch>
    </div>
  );
};
