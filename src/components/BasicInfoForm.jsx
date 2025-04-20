import React from 'react';
import { FaUser } from 'react-icons/fa';

const BasicInfoForm = ({ formData, handleInputChange, handleSocialChange, handlePhotoChange }) => {
  return (
    <div className="form-section">
      <h3>Basic Information</h3>
      <div className="form-group">
        <label>Full Name</label>
        <input 
          type="text" 
          value={formData.basic.name}
          onChange={(e) => handleInputChange('basic', 'name', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Professional Title</label>
        <input 
          type="text" 
          value={formData.basic.title}
          onChange={(e) => handleInputChange('basic', 'title', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Profile Photo</label>
        <input 
          type="file" 
          accept="image/*"
          onChange={handlePhotoChange}
        />
      </div>
      <div className="form-group">
        <label>About Me</label>
        <textarea 
          value={formData.basic.about}
          onChange={(e) => handleInputChange('basic', 'about', e.target.value)}
          rows="4"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          value={formData.basic.email}
          onChange={(e) => handleInputChange('basic', 'email', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input 
          type="tel" 
          value={formData.basic.phone}
          onChange={(e) => handleInputChange('basic', 'phone', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input 
          type="text" 
          value={formData.basic.address}
          onChange={(e) => handleInputChange('basic', 'address', e.target.value)}
        />
      </div>
      <h4>Social Links</h4>
      <div className="form-group">
        <label>LinkedIn</label>
        <input 
          type="url" 
          value={formData.basic.social.linkedin}
          onChange={(e) => handleSocialChange('linkedin', e.target.value)}
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>
      <div className="form-group">
        <label>GitHub</label>
        <input 
          type="url" 
          value={formData.basic.social.github}
          onChange={(e) => handleSocialChange('github', e.target.value)}
          placeholder="https://github.com/yourusername"
        />
      </div>
      <div className="form-group">
        <label>Twitter/X</label>
        <input 
          type="url" 
          value={formData.basic.social.twitter}
          onChange={(e) => handleSocialChange('twitter', e.target.value)}
          placeholder="https://twitter.com/yourhandle"
        />
      </div>
    </div>
  );
};

export default BasicInfoForm;