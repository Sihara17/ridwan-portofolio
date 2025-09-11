import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.img} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.subtitle}</p>
      <ul>
        {project.tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};
