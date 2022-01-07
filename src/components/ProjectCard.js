import {useNavigate} from 'react-router-dom';

const ProjectCard = (props) => {
  const navigate = useNavigate();
  const {project} = props
  return (
    <div className="project-card" onClick={() => navigate(`/projects/${project.rank}`)}>
      <span className="name">
        {project.repositoryName}
      </span>
      <span>
      {project.starsSince}
      </span>
    </div>

  );
}

export default ProjectCard
