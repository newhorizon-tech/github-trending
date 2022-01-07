import { useParams } from "react-router-dom";
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {trendingAsync} from '../redux/trendingSlice';
import ProjectDetails from './ProjectDetails'

const TrendingProject = () => {
  const params = useParams();
  const {projectId} = params;
  const dispatch = useDispatch();
  const loading = useSelector(state => state.trending.status === 'loading');
  const loaded = useSelector(state => state.trending.status === 'loaded');
  const project = useSelector(state => state.trending.projects.find(x => x.rank == projectId));

  useEffect(() => {
   if (!loaded) {
     dispatch(trendingAsync());
    }
   }, []);

  console.log(loaded)
  console.log(project)

  return (
    <div>
      {loading ? 'Loading' : ''}
      {loaded ?  <ProjectDetails project = {project}/> : ''}
    </div>
  );
}


export default TrendingProject;
