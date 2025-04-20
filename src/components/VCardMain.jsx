import React from 'react';

const VCardMain = ({ formData }) => {
  return (
    <div className="vcard-main">
      {formData.experience.length > 0 && (
        <div className="section">
          <h3 className="section-title">Experience</h3>
          {formData.experience.map(exp => (
            <div key={exp.id} className="experience-item">
              <h4>{exp.position}</h4>
              <p><strong>{exp.company}</strong> | {exp.startDate} - {exp.endDate}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {formData.education.length > 0 && (
        <div className="section">
          <h3 className="section-title">Education</h3>
          {formData.education.map(edu => (
            <div key={edu.id} className="education-item">
              <h4>{edu.degree} in {edu.field}</h4>
              <p><strong>{edu.institution}</strong> | {edu.startYear} - {edu.endYear}</p>
              {edu.description && <p>{edu.description}</p>}
            </div>
          ))}
        </div>
      )}
      
      {formData.projects.length > 0 && (
        <div className="section">
          <h3 className="section-title">Projects</h3>
          {formData.projects.map(project => (
            <div key={project.id} className="project-item">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              {project.technologies && <p><strong>Technologies:</strong> {project.technologies}</p>}
              {project.imageURL && (
                <img src={project.imageURL} alt={project.title} className="project-image" />
              )}
              {project.link && (
                <p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VCardMain;