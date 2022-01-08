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
  const trimString = (str) => {
    const limit = 23;
    let trimmedString = str;
    if (str.length > limit) {
      trimmedString = `${str.substring(0, limit - 3)}...`;
    }
    return trimmedString;
  };

  return (
    <>
      <div id="header">
        <button
          className="back-button"
          type="button"
          onClick={() => navigate('/')}
        >
          <span className="back-symbol"> &#10140;</span>
          Back
        </button>
        <h1>
          {trimString(project.repositoryName)}
        </h1>
        <h2>
          #
          {`${project.rank} ${timePeriod[project.since]}`}
        </h2>

      </div>
      <div className="project-body">
        <p>
          Repo owner:
          {` ${project.username}`}
        </p>
        <p>
          Stars:
          {` ${project.totalStars}`}
        </p>
        <p>
          Forks:
          {` ${project.forks}`}
        </p>
        <p>
          Description:
          {` ${project.description}`}
        </p>
        <p>
          Language:
          {` ${project.language}`}
        </p>
        <div className="built-box">
          <span> Built by: </span>
          <div className="creators">
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
