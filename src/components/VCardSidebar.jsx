import React from 'react';
import { FaBriefcase, FaCode, FaUser } from 'react-icons/fa';

const VCardSidebar = ({ formData }) => {
  return (
    <div className="vcard-sidebar">
      <div className="section">
        <h3 className="section-title">About Me</h3>
        <p>{formData.basic.about}</p>
      </div>
      
      <div className="section">
        <h3 className="section-title">Contact</h3>
        <div className="contact-info">
          {formData.basic.email && <p><strong>Email:</strong> {formData.basic.email}</p>}
          {formData.basic.phone && <p><strong>Phone:</strong> {formData.basic.phone}</p>}
          {formData.basic.address && <p><strong>Address:</strong> {formData.basic.address}</p>}
        </div>
      </div>
      
      <div className="section">
        <h3 className="section-title">Skills</h3>
        {formData.skills.map(skill => (
          <div key={skill.id} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div 
                className="skill-level" 
                style={{
                  width: skill.level === 'Beginner' ? '25%' : 
                        skill.level === 'Intermediate' ? '50%' : 
                        skill.level === 'Advanced' ? '75%' : '100%'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {(formData.basic.social.linkedin || formData.basic.social.github || formData.basic.social.twitter) && (
        <div className="section">
          <h3 className="section-title">Social Links</h3>
          <div className="social-links">
            {formData.basic.social.linkedin && (
              <a href={formData.basic.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaBriefcase />
              </a>
            )}
            {formData.basic.social.github && (
              <a href={formData.basic.social.github} target="_blank" rel="noopener noreferrer">
                <FaCode />
              </a>
            )}
            {formData.basic.social.twitter && (
              <a href={formData.basic.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaUser />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VCardSidebar;