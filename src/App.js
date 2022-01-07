import './App.css';

import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {trendingAsync} from './redux/trendingSlice';
import { Routes, Route, useParams } from "react-router-dom";


import ProjectCard from './components/ProjectCard'
import TrendingProject from './components/TrendingProject'


const App = () => {
   const dispatch = useDispatch();
   const projects = useSelector(state => state.trending.projects);
   const loaded = useSelector(state => state.trending.status === 'loaded');

   console.log(projects)

    useEffect(() => {
    if (!loaded) {
      dispatch(trendingAsync());
    }
  }, [loaded]);

  return (
    <div>
     <div id="header">
        <h1> Github Trending </h1>
      </div>
      <div id="project-cards">
        {projects.map(project => <ProjectCard key={project.rank} project={project} /> )}
      </div>
    </div>
  );
}

export default App;
