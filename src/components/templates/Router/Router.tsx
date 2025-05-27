import { FC } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { routes } from '~/routes';

export const Router: FC = () => (
  <HashRouter>
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} exact {...route} />
      ))}
    </Switch>
  </HashRouter>
);
