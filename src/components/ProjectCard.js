import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  const navigate = useNavigate();
  const { project } = props;
  return (
    <button
      className={`project-card card-${project.rank % 4}`}
      type="button"
      onClick={() => navigate(`/projects/${project.rank}`)}
    >
      <span className="name">
        {project.repositoryName}
      </span>
      <span>
        {project.starsSince}
      </span>
    </button>

  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    rank: PropTypes.number,
    repositoryName: PropTypes.string,
    starsSince: PropTypes.number,
  }).isRequired,
};

export default ProjectCard;
