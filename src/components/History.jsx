import React, { useState, useEffect } from 'react';
import { getPortfolios, deletePortfolio } from '../services/db';
import { FaTrash, FaEye } from 'react-icons/fa';

const History = ({ onLoadPortfolio, setPreviewMode }) => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPortfolios();
  }, []);

  const loadPortfolios = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPortfolios();
      setPortfolios(data);
    } catch (err) {
      setError('Failed to load portfolios. Please try again.');
      console.error('Error loading portfolios:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this portfolio?')) {
      try {
        await deletePortfolio(id);
        await loadPortfolios();
      } catch (err) {
        console.error('Error deleting portfolio:', err);
        alert('Failed to delete portfolio. Please try again.');
      }
    }
  };

  const handleView = (portfolio) => {
    try {
      const portfolioData = JSON.parse(portfolio.data);
      onLoadPortfolio(portfolioData);
      setPreviewMode(true);
    } catch (err) {
      console.error('Error parsing portfolio data:', err);
      alert('Failed to load portfolio. The data might be corrupted.');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="history-container">
        <h2>Portfolio History</h2>
        <div className="loading">Loading portfolios...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="history-container">
        <h2>Portfolio History</h2>
        <div className="error">{error}</div>
        <button onClick={loadPortfolios} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="history-container">
      <h2>Portfolio History</h2>
      {portfolios.length === 0 ? (
        <p>No portfolios saved yet.</p>
      ) : (
        <div className="portfolio-list">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="portfolio-item">
              <div className="portfolio-info">
                <h3>{portfolio.name}</h3>
                <p>{portfolio.title}</p>
                <small>Created: {formatDate(portfolio.created_at)}</small>
              </div>
              <div className="portfolio-actions">
                <button
                  onClick={() => handleView(portfolio)}
                  className="view-btn"
                  title="View Portfolio"
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleDelete(portfolio.id)}
                  className="delete-btn"
                  title="Delete Portfolio"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History; 