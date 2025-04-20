import React from 'react';

const EducationForm = ({ formData, handleArrayInputChange, removeItem, addNewItem }) => {
  return (
    <div className="form-section">
      <h3>Education</h3>
      {formData.education.map((edu, index) => (
        <div key={edu.id} className="array-item">
          <div className="form-group">
            <label>Institution</label>
            <input 
              type="text" 
              value={edu.institution}
              onChange={(e) => handleArrayInputChange('education', edu.id, 'institution', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Degree</label>
            <input 
              type="text" 
              value={edu.degree}
              onChange={(e) => handleArrayInputChange('education', edu.id, 'degree', e.target.value)}
              placeholder="Bachelor of Science"
            />
          </div>
          <div className="form-group">
            <label>Field of Study</label>
            <input 
              type="text" 
              value={edu.field}
              onChange={(e) => handleArrayInputChange('education', edu.id, 'field', e.target.value)}
              placeholder="Computer Science"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Start Year</label>
              <input 
                type="text" 
                value={edu.startYear}
                onChange={(e) => handleArrayInputChange('education', edu.id, 'startYear', e.target.value)}
                placeholder="2015"
              />
            </div>
            <div className="form-group">
              <label>End Year</label>
              <input 
                type="text" 
                value={edu.endYear}
                onChange={(e) => handleArrayInputChange('education', edu.id, 'endYear', e.target.value)}
                placeholder="2019 or Present"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description (optional)</label>
            <textarea 
              value={edu.description}
              onChange={(e) => handleArrayInputChange('education', edu.id, 'description', e.target.value)}
              rows="2"
            />
          </div>
          <button 
            className="remove-btn"
            onClick={() => removeItem('education', edu.id)}
          >
            Remove Education
          </button>
          {index < formData.education.length - 1 && <hr />}
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => addNewItem('education')}
      >
        Add Another Education
      </button>
    </div>
  );
};

export default EducationForm;