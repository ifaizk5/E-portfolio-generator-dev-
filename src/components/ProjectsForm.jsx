import React from 'react';

const ProjectsForm = ({ formData, handleArrayInputChange, removeItem, addNewItem, handleProjectImageChange }) => {
  return (
    <div className="form-section">
      <h3>Projects</h3>
      {formData.projects.map((project, index) => (
        <div key={project.id} className="array-item">
          <div className="form-group">
            <label>Project Title</label>
            <input 
              type="text" 
              value={project.title}
              onChange={(e) => handleArrayInputChange('projects', project.id, 'title', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              value={project.description}
              onChange={(e) => handleArrayInputChange('projects', project.id, 'description', e.target.value)}
              rows="3"
            />
          </div>
          <div className="form-group">
            <label>Technologies Used</label>
            <input 
              type="text" 
              value={project.technologies}
              onChange={(e) => handleArrayInputChange('projects', project.id, 'technologies', e.target.value)}
              placeholder="React, Node.js, MongoDB, etc."
            />
          </div>
          <div className="form-group">
            <label>Project Link</label>
            <input 
              type="url" 
              value={project.link}
              onChange={(e) => handleArrayInputChange('projects', project.id, 'link', e.target.value)}
              placeholder="https://yourproject.com"
            />
          </div>
          <div className="form-group">
            <label>Project Image</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => handleProjectImageChange(project.id, e)}
            />
            {project.imageURL && (
              <div className="image-preview">
                <img src={project.imageURL} alt="Project preview" width="100" />
              </div>
            )}
          </div>
          <button 
            className="remove-btn"
            onClick={() => removeItem('projects', project.id)}
          >
            Remove Project
          </button>
          {index < formData.projects.length - 1 && <hr />}
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => addNewItem('projects')}
      >
        Add Another Project
      </button>
    </div>
  );
};

export default ProjectsForm;