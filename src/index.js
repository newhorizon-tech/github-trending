import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {
  Routes, Route, BrowserRouter as Router,
} from 'react-router-dom';
import App from './App';
import store from './redux/store';

import TrendingProject from './components/TrendingProject';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<App />}
          />
          <Route
            path="/projects/:projectId"
            element={<TrendingProject />}
          />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
