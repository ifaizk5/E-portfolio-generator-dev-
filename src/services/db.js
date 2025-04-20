const DB_NAME = 'eportfolio-db';
const STORE_NAME = 'portfolios';
const DB_VERSION = 1;

let db = null;

const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { 
          keyPath: 'id', 
          autoIncrement: true 
        });
        store.createIndex('name', 'name', { unique: false });
        store.createIndex('created_at', 'created_at', { unique: false });
      }
    };
  });
};

export const savePortfolio = async (portfolioData) => {
  if (!db) await initDB();
  
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    const { basic: { name, title } } = portfolioData;
    const portfolio = {
      name,
      title,
      data: JSON.stringify(portfolioData),
      created_at: new Date().toISOString()
    };

    const request = store.add(portfolio);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const getPortfolios = async () => {
  if (!db) await initDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.index('created_at').openCursor(null, 'prev');
    const portfolios = [];

    request.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        portfolios.push(cursor.value);
        cursor.continue();
      } else {
        resolve(portfolios);
      }
    };

    request.onerror = () => reject(request.error);
  });
};

export const getPortfolioById = async (id) => {
  if (!db) await initDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(id);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const deletePortfolio = async (id) => {
  if (!db) await initDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
};

// Initialize the database when the module loads
initDB().catch(console.error); 