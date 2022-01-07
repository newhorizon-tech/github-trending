const ProjectCard = (props) => {
  const {project} = props
  return (
    <div className="project-card">
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
