import React from 'react';

const VCardHeader = ({ formData }) => {
  return (
    <div className="vcard-header">
      {formData.basic.photoURL && (
        <img src={formData.basic.photoURL} alt="Profile" className="profile-image" />
      )}
      <h1>{formData.basic.name}</h1>
      <p>{formData.basic.title}</p>
    </div>
  );
};

export default VCardHeader;