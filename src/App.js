import './App.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SpinnerInfinity } from 'spinners-react';
import { trendingAsync, search } from './redux/trendingSlice';

import ProjectCard from './components/ProjectCard';

const App = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.trending.search);
  const projects = useSelector((state) => {
    const { projects } = state.trending;
    if (searchTerm !== '' && !!projects) {
      return projects.filter((x) => {
        const languageMatch = !(x.language) ? false : x.language.toLowerCase().includes(searchTerm);
        const nameMatch = !(x.repositoryName) ? false
          : x.repositoryName.toLowerCase().includes(searchTerm);
        return languageMatch || nameMatch;
      });
    }
    return projects;
  });
  const loaded = useSelector((state) => state.trending.status === 'loaded');
  const loading = useSelector((state) => state.trending.status === 'loading');

  useEffect(() => {
    if (!loaded) {
      dispatch(trendingAsync());
    }
  }, [loaded]);

  const handleSearch = (e) => {
    dispatch(search(e.target.value.toLowerCase()));
  };

  return (
    <div>
      <div id="header">
        <h1> Github Trending </h1>
        <input id="search-bar" placeholder="Search" onChange={(e) => handleSearch(e)} value={searchTerm} />
      </div>
      {loading
        ? (
          <span className="loading">
            <SpinnerInfinity
              size={71}
              thickness={135}
              speed={135}
              color={getComputedStyle(document.documentElement).getPropertyValue('--light')}
              secondaryColor={getComputedStyle(document.documentElement).getPropertyValue('--dark')}
            />
          </span>
        )
        : ''}
      <div id="project-cards">
        {projects.map((project) => <ProjectCard key={project.rank} project={project} />)}
      </div>
    </div>
  );
};

export default App;
