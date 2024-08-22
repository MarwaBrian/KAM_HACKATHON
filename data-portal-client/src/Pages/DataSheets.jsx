import { useState } from 'react';
import { Link } from 'react-router-dom';
import excelImage from '../assets/excel.png'; 

const countries = [
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cameroon",
  "Central African Republic",
  "Chad",
  "Comoros",
];

const DataSheets = () => {
  const [activeTab, setActiveTab] = useState('exports');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 p-4">
          <h2 className="font-bold text-lg">Basic Data Sheets</h2>
          <ul className="mt-4 space-y-2">
            <li
              className={`text-blue-600 cursor-pointer ${activeTab === 'imports' ? 'font-bold' : ''}`}
              onClick={() => handleTabChange('imports')}
            >
              Imports
            </li>
            <li
              className={`text-blue-600 cursor-pointer ${activeTab === 'exports' ? 'font-bold' : ''}`}
              onClick={() => handleTabChange('exports')}
            >
              Exports
            </li>
          </ul>
        </div>

        <div className="flex-1 p-4 overflow-x-auto">
          <h2 className="text-xl font-bold">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Data Country{" "}
            <span className="text-blue-600">(Last Update June 2024)</span>
          </h2>
          <div className="mt-4 space-y-2">
            {countries.map((country) => (
              <div
                key={country}
                className="flex justify-between items-center border-b-2 border-blue-400 py-2"
              >
                <span className="text-lg">{country}</span>
                <Link
                  to={`/datasheets/${activeTab}/${country.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600"
                >
                  <img
                    src={excelImage} 
                    alt={`Download Excel for ${country}`}
                    className="w-6 h-6"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <footer className="bg-white p-4 text-center">
        {/* Footer content can go here */}
      </footer>
    </div>
  );
};

export default DataSheets;
