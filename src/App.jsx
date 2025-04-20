import React, { useState, useRef } from 'react';
import { FaFileDownload, FaEye, FaEdit, FaSave } from 'react-icons/fa';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';
import './App.css';
import BasicInfoForm from './components/BasicInfoForm';
import ProjectsForm from './components/ProjectsForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import SkillsForm from './components/SkillsForm';
import History from './components/History';
import Sidebar from './components/Sidebar';
import PreviewSection from './components/PreviewSection';
import ClickSpark from './ClickSpark';
import { savePortfolio } from './services/db';

function App() {
  const [activeTab, setActiveTab] = useState('basic');
  const [previewMode, setPreviewMode] = useState(false);
  const portfolioRef = useRef(null);

  const [formData, setFormData] = useState({
    basic: {
      name: '',
      title: '',
      email: '',
      phone: '',
      address: '',
      about: '',
      photo: null,
      photoURL: '',
      social: {
        linkedin: '',
        github: '',
        twitter: ''
      }
    },
    projects: [
      {
        id: Date.now(),
        title: '',
        description: '',
        technologies: '',
        link: '',
        image: null,
        imageURL: ''
      }
    ],
    education: [
      {
        id: Date.now(),
        institution: '',
        degree: '',
        field: '',
        startYear: '',
        endYear: '',
        description: ''
      }
    ],
    experience: [
      {
        id: Date.now(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ],
    skills: [
      {
        id: Date.now(),
        name: '',
        level: 'Intermediate'
      }
    ]
  });

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSocialChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      basic: {
        ...prev.basic,
        social: {
          ...prev.basic.social,
          [field]: value
        }
      }
    }));
  };

  const handleArrayInputChange = (section, id, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          basic: {
            ...prev.basic,
            photo: file,
            photoURL: reader.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProjectImageChange = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          projects: prev.projects.map(project => 
            project.id === id ? { 
              ...project, 
              image: file,
              imageURL: reader.result
            } : project
          )
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addNewItem = (section) => {
    setFormData(prev => ({
      ...prev,
      [section]: [
        ...prev[section],
        {
          id: Date.now() + Math.random(),
          ...(section === 'projects' ? {
            title: '',
            description: '',
            technologies: '',
            link: '',
            image: null,
            imageURL: ''
          } : section === 'education' ? {
            institution: '',
            degree: '',
            field: '',
            startYear: '',
            endYear: '',
            description: ''
          } : section === 'experience' ? {
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            description: ''
          } : {
            name: '',
            level: 'Intermediate'
          })
        }
      ]
    }));
  };

  const removeItem = (section, id) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  const downloadPortfolio = () => {
    if (portfolioRef.current) {
      htmlToImage.toBlob(portfolioRef.current)
        .then(blob => {
          saveAs(blob, `${formData.basic.name || 'portfolio'}-eportfolio.png`);
        });
    }
  };

  const exportAsHTML = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${formData.basic.name || 'My Portfolio'}</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
          body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            color: #333;
          }
          .vcard-container {
            max-width: 1000px;
            margin: 20px auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            overflow: hidden;
          }
          .vcard-header {
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid white;
            margin-bottom: 20px;
          }
          .vcard-body {
            display: flex;
            flex-wrap: wrap;
          }
          .vcard-sidebar {
            flex: 1;
            min-width: 300px;
            padding: 30px;
            background: #f9f9f9;
          }
          .vcard-main {
            flex: 2;
            min-width: 300px;
            padding: 30px;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #6e8efb;
            border-bottom: 2px solid #eee;
            padding-bottom: 5px;
          }
          .contact-info {
            margin-bottom: 20px;
          }
          .contact-info p {
            margin: 5px 0;
            display: flex;
            align-items: center;
          }
          .skill-item {
            margin-bottom: 10px;
          }
          .skill-name {
            margin-bottom: 5px;
          }
          .skill-bar {
            height: 10px;
            background: #eee;
            border-radius: 5px;
            overflow: hidden;
          }
          .skill-level {
            height: 100%;
            background: #6e8efb;
            border-radius: 5px;
          }
          .project-item, .education-item, .experience-item {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
          }
          .project-item:last-child, .education-item:last-child, .experience-item:last-child {
            border-bottom: none;
          }
          .project-image {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
            margin-top: 10px;
          }
          .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
          }
          .social-links a {
            color: #6e8efb;
            font-size: 20px;
          }
          @media (max-width: 768px) {
            .vcard-body {
              flex-direction: column;
            }
          }
        </style>
      </head>
      <body>
        ${portfolioRef.current.innerHTML}
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    saveAs(blob, `${formData.basic.name || 'portfolio'}-eportfolio.html`);
  };

  const handleSavePortfolio = async () => {
    try {
      await savePortfolio(formData);
      alert('Portfolio saved successfully!');
    } catch (error) {
      console.error('Error saving portfolio:', error);
      alert('Failed to save portfolio. Please try again.');
    }
  };

  return (
    <ClickSpark
      sparkColor='#000'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="app-container">
        {!previewMode ? (
          <div className="generator-container">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} setPreviewMode={setPreviewMode} />
            
            <div className="form-container">
              {activeTab === 'basic' && (
                <BasicInfoForm 
                  formData={formData} 
                  handleInputChange={handleInputChange} 
                  handleSocialChange={handleSocialChange} 
                  handlePhotoChange={handlePhotoChange} 
                />
              )}
              
              {activeTab === 'projects' && (
                <ProjectsForm 
                  formData={formData} 
                  handleArrayInputChange={handleArrayInputChange} 
                  removeItem={removeItem} 
                  addNewItem={addNewItem} 
                  handleProjectImageChange={handleProjectImageChange} 
                />
              )}
              
              {activeTab === 'education' && (
                <EducationForm 
                  formData={formData} 
                  handleArrayInputChange={handleArrayInputChange} 
                  removeItem={removeItem} 
                  addNewItem={addNewItem} 
                />
              )}
              
              {activeTab === 'experience' && (
                <ExperienceForm 
                  formData={formData} 
                  handleArrayInputChange={handleArrayInputChange} 
                  removeItem={removeItem} 
                  addNewItem={addNewItem} 
                />
              )}
              
              {activeTab === 'skills' && (
                <SkillsForm 
                  formData={formData} 
                  handleArrayInputChange={handleArrayInputChange} 
                  removeItem={removeItem} 
                  addNewItem={addNewItem} 
                />
              )}

              {activeTab === 'history' && (
                <History
                  onLoadPortfolio={setFormData}
                  setPreviewMode={setPreviewMode}
                />
              )}

              {activeTab !== 'history' && (
                <button className="save-btn" onClick={handleSavePortfolio}>
                  <FaSave /> Save Portfolio
                </button>
              )}
            </div>
          </div>
        ) : (
          <PreviewSection 
            formData={formData} 
            setPreviewMode={setPreviewMode} 
            downloadPortfolio={downloadPortfolio} 
            exportAsHTML={exportAsHTML} 
            portfolioRef={portfolioRef} 
          />
        )}
      </div>
    </ClickSpark>
  );
}

export default App;