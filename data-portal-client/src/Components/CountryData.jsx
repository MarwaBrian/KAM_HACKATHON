

import { useParams } from 'react-router-dom';
import excelImage from '../assets/excel.png'; 

const mockData = {
  algeria: { imports: [{ item: 'Rice', quantity: 100, value: 2000 }], exports: [{ item: 'Oil', quantity: 50, value: 5000 }] },
  angola: { imports: [], exports: [] },
  // More mock data...
};

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
  const { tab, country } = useParams();
  const normalizedCountry = country.replace(/-/g, ' ').toLowerCase();
  const data = mockData[normalizedCountry] || { imports: [], exports: [] };

  const handleDownload = (type) => {
    const headers = ['Item', 'Quantity', 'Value'];
    const rows = data[type].map(item => [item.item, item.quantity, item.value]);
    const filename = `${normalizedCountry}-${type}.csv`;
    downloadCSV(filename, headers, rows);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">
        {normalizedCountry.charAt(0).toUpperCase() + normalizedCountry.slice(1)} {tab.charAt(0).toUpperCase() + tab.slice(1)} Data
        <span className="text-blue-600">(Last Update June 2024)</span>
      </h2>
      <div className="mt-4">
        <button onClick={() => handleDownload(tab)} className="text-blue-600">
          <img
            src={excelImage} 
            alt={`Download Excel for ${normalizedCountry}`}
            className="w-6 h-6"
          />
        </button>
        <table className="min-w-full mt-2 border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Item</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {data[tab].length > 0 ? (
              data[tab].map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{item.item}</td>
                  <td className="border border-gray-300 p-2">{item.quantity}</td>
                  <td className="border border-gray-300 p-2">{item.value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border border-gray-300 p-2 text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryData;
