import React from 'react';

const SkillsForm = ({ formData, handleArrayInputChange, removeItem, addNewItem }) => {
  return (
    <div className="form-section">
      <h3>Skills</h3>
      {formData.skills.map((skill, index) => (
        <div key={skill.id} className="array-item">
          <div className="form-group">
            <label>Skill Name</label>
            <input 
              type="text" 
              value={skill.name}
              onChange={(e) => handleArrayInputChange('skills', skill.id, 'name', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Skill Level</label>
            <select 
              value={skill.level}
              onChange={(e) => handleArrayInputChange('skills', skill.id, 'level', e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <button 
            className="remove-btn"
            onClick={() => removeItem('skills', skill.id)}
          >
            Remove Skill
          </button>
          {index < formData.skills.length - 1 && <hr />}
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => addNewItem('skills')}
      >
        Add Another Skill
      </button>
    </div>
  );
};

export default SkillsForm;