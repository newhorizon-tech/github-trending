import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectDetails = (props) => {
  const { project } = props;
  const creators = [...project.builtBy];
  const navigate = useNavigate();
  const timePeriod = {
    daily: 'today',
    weekly: 'this week',
    monthly: 'this month',
  };
  return (
    <>
      <div id="header">
        <button
          className="back-button"
          type="button"
          onClick={() => navigate('/')}
        >
          {'> Back'}
        </button>
        <h1>
          {project.repositoryName}
        </h1>
        <h2>
          #
          {`${project.rank} ${timePeriod[project.since]}`}
        </h2>

      </div>
      <div className="project-body">
        <p>
          Repo owner:
          {project.username}
        </p>
        <p>
          Stars:
          {project.totalStars}
        </p>
        <p>
          Forks:
          {project.forks}
        </p>
        <p>
          Description:
          {project.description}
        </p>
        <p>
          Language:
          {project.language}
        </p>
        <div className="built-box">
          <span> Built by - </span>
          {creators.map((user) => (
            <div key={user.username} className="built-user">
              <a href={user.url}>
                <img
                  className="avatars"
                  src={user.avatar}
                  alt={user.username}
                  title={user.username}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    language: PropTypes.string,
    rank: PropTypes.number,
    since: PropTypes.string,
    username: PropTypes.string,
    totalStars: PropTypes.number,
    forks: PropTypes.number,
    repositoryName: PropTypes.string,
    starsSince: PropTypes.number,
    builtBy: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }).isRequired,
};

export default ProjectDetails;
