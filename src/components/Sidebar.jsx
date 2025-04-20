import React from 'react';
import { FaUser, FaProjectDiagram, FaGraduationCap, FaBriefcase, FaTools, FaHistory, FaEye } from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab, setPreviewMode }) => {
  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: <FaUser /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'skills', label: 'Skills', icon: <FaTools /> },
    { id: 'history', label: 'History', icon: <FaHistory /> },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>ePortfolio Generator</h2>
        <p>Build your professional portfolio</p>
      </div>
      <div className="sidebar-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <button className="preview-btn" onClick={() => setPreviewMode(true)}>
        <FaEye /> Preview Portfolio
      </button>
    </div>
  );
};

export default Sidebar;