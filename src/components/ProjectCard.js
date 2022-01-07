const ProjectCard = (props) => {
  const {project} = props
  return (
    <div className="project-card">
      {project.repositoryName}
    </div>

  );
}

export default ProjectCard
