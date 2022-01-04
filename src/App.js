import './App.css';

import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {trendingAsync} from './redux/trendingSlice';

const App = () => {
  const dispatch = useDispatch();
   const projects = useSelector(state => state.trending.projects);
   const loaded = useSelector(state => state.trending.status === 'loaded');

    useEffect(() => {
    if (!loaded) {
      dispatch(trendingAsync());
    }
  }, []);

  return (
    <div>
      <h1> Github Trending </h1>
    </div>
  );
}

export default App;
