import { useState } from 'react';
import { Link } from 'react-router-dom';

const DataRepository = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">KAM Data Repository</h1>
        <p className="text-xl text-blue-600 mt-2">Find easy access to the databases and perform some statistics</p>
        <p className="text-gray-600 mt-4">
          The KAM Data Repository is a centralized platform that enables KAM members and staff to efficiently explore, visualize, and download extensive datasets relevant to the manufacturing sector in Kenya. This repository supports the work of industry professionals, including manufacturers, researchers, and policymakers, by providing easy access to critical data such as manufacturing output statistics, market trends, industrial performance metrics, economic impact studies, and regulatory compliance information.
        </p>
      </div>

      <div className="bg-blue-600 text-white p-4 rounded-md mb-4">
        <h2 className="text-lg font-semibold">KAM Data Portal - List of datasets</h2>
      </div>
      <div className="bg-white shadow-md rounded-md">
        <ul className="divide-y divide-gray-300">
          <li className="p-4 hover:bg-gray-100 cursor-pointer">
            <div onClick={() => toggleDropdown(0)} className="flex items-center">
              <span className="text-blue-600 mr-2">{openIndex === 0 ? '-' : '+'}</span>
              <span className="font-semibold">KAM Infrastructure Databases</span>
            </div>
            {openIndex === 0 && (
              <ul className="mt-2 ml-6 space-y-2">
                <li><Link to="/infrastructure-roads" className="hover:underline text-gray-700">Roads Database</Link></li>
                <li><Link to="/infrastructure-rail" className="hover:underline text-gray-700">Rail Infrastructure</Link></li>
                <li><Link to="/infrastructure-energy" className="hover:underline text-gray-700">Energy Infrastructure</Link></li>
              </ul>
            )}
          </li>

          <li className="p-4 hover:bg-gray-100 cursor-pointer">
            <div onClick={() => toggleDropdown(1)} className="flex items-center">
              <span className="text-blue-600 mr-2">{openIndex === 1 ? '-' : '+'}</span>
              <span className="font-semibold">KAM Exports and Imports Database</span>
            </div>
            {openIndex === 1 && (
              <ul className="mt-2 ml-6 space-y-2">
                <li><Link to="/exports" className="hover:underline text-gray-700">Exports Data</Link></li>
                <li><Link to="/imports" className="hover:underline text-gray-700">Imports Data</Link></li>
              </ul>
            )}
          </li>

          <li className="p-4 hover:bg-gray-100 cursor-pointer">
            <div onClick={() => toggleDropdown(2)} className="flex items-center">
              <span className="text-blue-600 mr-2">{openIndex === 2 ? '-' : '+'}</span>
              <span className="font-semibold">KAM Operations Database</span>
            </div>
            {openIndex === 2 && (
              <ul className="mt-2 ml-6 space-y-2">
                <li><Link to="/operations-production" className="hover:underline text-gray-700">Production Data</Link></li>
                <li><Link to="/operations-logistics" className="hover:underline text-gray-700">Logistics Data</Link></li>
              </ul>
            )}
          </li>

          <li className="p-4 hover:bg-gray-100 cursor-pointer">
            <div onClick={() => toggleDropdown(3)} className="flex items-center">
              <span className="text-blue-600 mr-2">{openIndex === 3 ? '-' : '+'}</span>
              <span className="font-semibold">Database on Economy and Inflation</span>
            </div>
            {openIndex === 3 && (
              <ul className="mt-2 ml-6 space-y-2">
                <li><Link to="/economy-gdp" className="hover:underline text-gray-700">GDP Data</Link></li>
                <li><Link to="/economy-inflation" className="hover:underline text-gray-700">Inflation Data</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataRepository;
