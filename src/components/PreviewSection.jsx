import React from 'react';
import { FaEdit, FaFileDownload } from 'react-icons/fa';
import VCardHeader from './VCardHeader';
import VCardSidebar from './VCardSidebar';
import VCardMain from './VCardMain';

const PreviewSection = ({ formData, setPreviewMode, downloadPortfolio, exportAsHTML, portfolioRef }) => {
  return (
    <div className="preview-container">
      <div className="preview-actions">
        <button onClick={() => setPreviewMode(false)}>
          <FaEdit /> Back to Editor
        </button>
        <button onClick={downloadPortfolio}>
          <FaFileDownload /> Download as Image
        </button>
        <button onClick={exportAsHTML}>
          <FaFileDownload /> Export as HTML
        </button>
      </div>
      
      <div className="vcard-container" ref={portfolioRef}>
        <VCardHeader formData={formData} />
        
        <div className="vcard-body">
          <VCardSidebar formData={formData} />
          <VCardMain formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;