import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from '~/routes';

export const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} exact {...route} />
      ))}
    </Switch>
  </BrowserRouter>
);
