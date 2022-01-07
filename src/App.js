import './App.css';

import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {trendingAsync} from './redux/trendingSlice';

import ProjectCard from './components/ProjectCard'

const App = () => {
  const dispatch = useDispatch();
   const projects = useSelector(state => state.trending.projects);
   const loaded = useSelector(state => state.trending.status === 'loaded');

   console.log(projects)

    useEffect(() => {
    if (!loaded) {
      dispatch(trendingAsync());
    }
  }, []);

  return (
    <div>
      <h1> Github Trending </h1>
      <div id="project-cards">
      {projects.map(project => <ProjectCard key={project.rank} project={project} /> )}
      </div>
    </div>
  );
}

export default App;
