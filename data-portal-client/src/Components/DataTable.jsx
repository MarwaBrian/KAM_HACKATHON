
// import { useState, useEffect } from 'react';


// function DataTable() {
//   const [importData, setImportData] = useState([]);
//   const [exportData, setExportData] = useState([]);
//   const [visibleImportRows] = useState(10);
//   const [visibleExportRows] = useState(10);

//   useEffect(() => {
//     // Fetch imports data
//     fetch('/public/import.json')
//       .then(response => response.json())
//       .then(data => setImportData(data.imports));

//     // Fetch exports data
//     fetch('/public/exports.json')  // Replace with the correct path for exports data
//       .then(response => response.json())
//       .then(data => setExportData(data.exports));
//   }, []);

//   return (
//     <div className="p-4">
//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Imports Data Table */}
//         <div className="flex-1 overflow-x-auto max-h-[500px] border border-gray-300 shadow-md bg-white">
//           <h2 className="text-2xl font-bold text-blue-900 mb-4">Imports Data</h2>
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-blue-800 text-white">
//               <tr>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Reg Date</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Country of Origin</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Country of Destination</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">HS Code</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">HS Chapter</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Quantity</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">FOB Value</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">CIF Value</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Import Duty</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Import VAT</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Total Tax Payable</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Total Tax Paid</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {importData.slice(0, visibleImportRows).map((row, index) => (
//                 <tr key={index}>
//                   <td className="px-4 py-2 whitespace-nowrap">{new Date(row.regdate).toLocaleDateString()}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.countryoforigin.trim()}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.countryofdestination.trim()}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.hscode}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.hs_chapter}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.quantity}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.fob_value} {row.currency}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.cif_value} {row.currency}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.import_duty} {row.currency}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.import_vat} {row.currency}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.total_tax_payable} {row.currency}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.total_tax_paid} {row.currency}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Exports Data Table */}
//         <div className="flex-1 overflow-x-auto max-h-[500px] border border-gray-300 shadow-md bg-white">
//           <h2 className="text-2xl font-bold text-blue-900 mb-4">Exports Data</h2>
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-blue-800 text-white">
//               <tr>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Year</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Month</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Destination</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Country Name</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">HS Code</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Description</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Quantity</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Unit</th>
//                 <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">FOB Value</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {exportData.slice(0, visibleExportRows).map((row, index) => (
//                 <tr key={index}>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.year}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.month}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.destination}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.countryname}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.hs_code}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.short_desc}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.quantity} {row.unit}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.unit}</td>
//                   <td className="px-4 py-2 whitespace-nowrap">{row.fob_value.toFixed(2)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DataTable;

import { useState, useEffect } from 'react';

function DataTable() {
  const [importData, setImportData] = useState([]);
  const [exportData, setExportData] = useState([]);
  const [visibleImportRows] = useState(10);
  const [visibleExportRows] = useState(10);

  useEffect(() => {
    // Fetch imports data
    fetch('/public/import.json')
      .then(response => response.json())
      .then(data => setImportData(data.imports));

    // Fetch exports data
    fetch('/public/exports.json')
      .then(response => response.json())
      .then(data => setExportData(data.exports));
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Imports Data Table */}
        <div className="flex-1 overflow-x-auto max-h-[400px] border border-gray-300 shadow-md bg-white">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Imports Data</h2>
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">Reg Date</th>
                <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">Country of Origin</th>
                <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">Quantity</th>
                <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">FOB Value</th>
                <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">Import Duty</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {importData.slice(0, visibleImportRows).map((row, index) => (
                <tr key={index}>
                  <td className="px-2 py-1 whitespace-nowrap">{new Date(row.regdate).toLocaleDateString()}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{row.countryoforigin.trim()}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{row.quantity}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{row.fob_value} {row.currency}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{row.import_duty} {row.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Exports Data Table */}
        <div className="flex-1 overflow-x-auto max-h-[400px] border border-gray-300 shadow-md bg-white">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Exports Data</h2>
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">Year</th>
                <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">Month</th>
                <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">Destination</th>
                <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">HS Code</th>
                <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">Quantity</th>
                <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">FOB Value</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {exportData.slice(0, visibleExportRows).map((row, index) => (
                <tr key={index}>
                  <td className="px-2 py-1 whitespace-nowrap">{row.year}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{row.month}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{row.destination}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{row.hs_code}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{row.quantity}</td>
                  <td className="px-2 py-1 whitespace-nowrap">{row.fob_value.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-8">
        {/* Footer content here */}
      </footer>
    </div>
  );
}

export default DataTable;
