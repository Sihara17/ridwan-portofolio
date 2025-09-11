import React from 'react';
import PropTypes from 'prop-types';

export default function CaseStudyModal({ project, onClose }) {
  return (
    <div className="modal">
      <button onClick={onClose}>Close</button>
      <h2>{project.title}</h2>
      <h3>{project.subtitle}</h3>
      <div>{project.caseStudy.overview}</div>
      <div>{project.caseStudy.problem}</div>
      <div>{project.caseStudy.approach}</div>
      <div>{project.caseStudy.results}</div>
    </div>
  );
}

CaseStudyModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    caseStudy: PropTypes.shape({
      overview: PropTypes.string,
      problem: PropTypes.string,
      approach: PropTypes.string,
      results: PropTypes.string
    })
  }).isRequired,
  onClose: PropTypes.func.isRequired
};
