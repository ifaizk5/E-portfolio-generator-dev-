import React from 'react';

const ExperienceForm = ({ formData, handleArrayInputChange, removeItem, addNewItem }) => {
  return (
    <div className="form-section">
      <h3>Work Experience</h3>
      {formData.experience.map((exp, index) => (
        <div key={exp.id} className="array-item">
          <div className="form-group">
            <label>Company</label>
            <input 
              type="text" 
              value={exp.company}
              onChange={(e) => handleArrayInputChange('experience', exp.id, 'company', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Position</label>
            <input 
              type="text" 
              value={exp.position}
              onChange={(e) => handleArrayInputChange('experience', exp.id, 'position', e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input 
                type="text" 
                value={exp.startDate}
                onChange={(e) => handleArrayInputChange('experience', exp.id, 'startDate', e.target.value)}
                placeholder="June 2018"
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input 
                type="text" 
                value={exp.endDate}
                onChange={(e) => handleArrayInputChange('experience', exp.id, 'endDate', e.target.value)}
                placeholder="Present"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              value={exp.description}
              onChange={(e) => handleArrayInputChange('experience', exp.id, 'description', e.target.value)}
              rows="3"
            />
          </div>
          <button 
            className="remove-btn"
            onClick={() => removeItem('experience', exp.id)}
          >
            Remove Experience
          </button>
          {index < formData.experience.length - 1 && <hr />}
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => addNewItem('experience')}
      >
        Add Another Experience
      </button>
    </div>
  );
};

export default ExperienceForm;