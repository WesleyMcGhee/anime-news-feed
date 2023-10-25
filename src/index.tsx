import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Feed from './Pages/Feed/Feed.page';
import reportWebVitals from './reportWebVitals';
import { Route, Switch } from 'wouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/feed" component={Feed} />
    </Switch>
  </React.StrictMode>
);

reportWebVitals();
