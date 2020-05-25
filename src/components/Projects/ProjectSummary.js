import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="project-list section">
      <div className="card project-summary">
        <div className="card-content">
          <span className="card-title"> {project.title}</span>
          <p>
            Posted by {project.authorFirstName} {project.authorLastName}{" "}
          </p>
          <p>3rd Sep, 2020</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
