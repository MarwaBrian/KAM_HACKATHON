

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import excelImage from '../assets/excel.png';

const downloadCSV = (filename, headers, data) => {
  const csvContent = [
    headers.join(','),
    ...data.map(row => row.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const CountryData = () => {
  const { year, country } = useParams();
  const normalizedCountry = country.replace(/-/g, ' ').toUpperCase().trim();

  const [importData, setImportData] = useState([]);
  const [exportData, setExportData] = useState([]);

  useEffect(() => {
    // Fetch import data
    fetch('/import.json')
      .then(response => response.json())
      .then(data => setImportData(data.imports))
      .catch(error => console.error('Error fetching import data:', error));

    // Fetch export data
    fetch('/exports.json')
      .then(response => response.json())
      .then(data => setExportData(data.exports))
      .catch(error => console.error('Error fetching export data:', error));
  }, []);

  // Select relevant columns for display
  const importRelevantData = importData.map(item => ({
    regdate: new Date(item.regdate).toLocaleDateString(),
    countryoforigin: item.countryoforigin.trim(),
    quantity: item.quantity,
    fob_value: item.fob_value
  }));

  const exportRelevantData = exportData.map(item => ({
    month: item.month,
    destination: item.destination,
    hs_code: item.hs_code,
    short_desc: item.short_desc,
    quantity: item.quantity,
    fob_value: item.fob_value
  }));

  const handleDownload = (type, data) => {
    const headers = type === 'import' ? ['Registration Date', 'Country of Origin', 'Quantity', 'FOB Value'] : ['Month', 'Destination', 'HS Code', 'Description', 'Quantity', 'FOB Value'];
    const rows = data.map(item => Object.values(item));
    const filename = `${normalizedCountry}-${type}.csv`;
    downloadCSV(filename, headers, rows);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">
        {normalizedCountry} Data
        <span className="text-blue-600">(Last Update June 2024)</span>
      </h2>
      <div className="mt-4">
        <div className="mb-8">
          <h3 className="text-lg font-semibold">Imports Data</h3>
          <button onClick={() => handleDownload('import', importRelevantData)} className="text-blue-600">
            <img
              src={excelImage}
              alt={`Download Import Excel for ${normalizedCountry}`}
              className="w-6 h-6"
            /> <p>Download</p>
          </button>
          <table className="min-w-full mt-2 border-collapse border border-gray-200 text-sm">
            <thead>
              <tr>
                <th className="border border-gray-300 p-1">Registration Date</th>
                <th className="border border-gray-300 p-1">Country of Origin</th>
                <th className="border border-gray-300 p-1">Quantity</th>
                <th className="border border-gray-300 p-1">FOB Value</th>
              </tr>
            </thead>
            <tbody>
              {importRelevantData.length > 0 ? (
                importRelevantData.slice(0, 5).map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-1">{item.regdate}</td>
                    <td className="border border-gray-300 p-1">{item.countryoforigin}</td>
                    <td className="border border-gray-300 p-1">{item.quantity}</td>
                    <td className="border border-gray-300 p-1">{item.fob_value}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="border border-gray-300 p-1 text-center">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mb-12"> {/* Added margin-bottom to space out from footer */}
          <h3 className="text-lg font-semibold">Exports Data</h3>
          <button onClick={() => handleDownload('export', exportRelevantData)} className="text-blue-600">
            <img
              src={excelImage}
              alt={`Download Export Excel for ${normalizedCountry}`}
              className="w-6 h-6"
            /> <p>Download</p>
          </button>
          <table className="min-w-full mt-2 border-collapse border border-gray-200 text-sm">
            <thead>
              <tr>
                <th className="border border-gray-300 p-1">Month</th>
                <th className="border border-gray-300 p-1">Destination</th>
                <th className="border border-gray-300 p-1">HS Code</th>
                <th className="border border-gray-300 p-1">Description</th>
                <th className="border border-gray-300 p-1">Quantity</th>
                <th className="border border-gray-300 p-1">FOB Value</th>
              </tr>
            </thead>
            <tbody>
              {exportRelevantData.length > 0 ? (
                exportRelevantData.slice(0, 5).map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-1">{item.month}</td>
                    <td className="border border-gray-300 p-1">{item.destination}</td>
                    <td className="border border-gray-300 p-1">{item.hs_code}</td>
                    <td className="border border-gray-300 p-1">{item.short_desc}</td>
                    <td className="border border-gray-300 p-1">{item.quantity}</td>
                    <td className="border border-gray-300 p-1">{item.fob_value}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="border border-gray-300 p-1 text-center">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="mt-12">
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default CountryData;
