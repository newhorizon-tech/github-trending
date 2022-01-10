import { Provider } from 'react-redux';
import {
  Routes, Route, BrowserRouter as Router,
} from 'react-router-dom';
import App from '../App';
import store from '../redux/store';

import TrendingProject from '../components/TrendingProject';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const mockIndex = (TestComponent, project) => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="/projects/:projectId"
          element={<TrendingProject project={project} />}
        />
      </Routes>
    </Router>
  </Provider>
);
export default mockIndex;
