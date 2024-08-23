// import { useState, useEffect } from 'react';
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   BarElement,
//   LineElement,
//   CategoryScale,
//   LinearScale,
// } from 'chart.js';
// import { Pie, Doughnut, Line, Bar } from 'react-chartjs-2';

import ExportsCharts from "./ExportCharts"
import ImportCharts from "./ImportCharts"

// // Register Chart.js components
// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   BarElement,
//   LineElement,
//   CategoryScale,
//   LinearScale
// );

// const Charts = () => {
//   const [importData, setImportData] = useState([]);
//   const [exportData, setExportData] = useState([]);

//   useEffect(() => {
//     // Fetch imports data
//     fetch('/public/import.json')
//       .then(response => response.json())
//       .then(data => setImportData(data.imports));

//     // Fetch exports data
//     fetch('/public/exports.json')
//       .then(response => response.json())
//       .then(data => setExportData(data.exports));
//   }, []);

//   // Filter data for 2022
//   const filterDataForYear = (data, year) =>
//     data.filter(item => item.year === year);

//   const importData2022 = filterDataForYear(importData, 2022);
//   const exportData2022 = filterDataForYear(exportData, 2022);

//   // Function to get the top 10 countries by quantity
//   const getTopCountriesData = (data) => {
//     const countryTotals = data.reduce((acc, row) => {
//       const country = row.countryoforigin || row.destination;
//       if (!acc[country]) {
//         acc[country] = 0;
//       }
//       acc[country] += row.quantity;
//       return acc;
//     }, {});

//     const sortedCountries = Object.entries(countryTotals).sort((a, b) => b[1] - a[1]);

//     return sortedCountries.slice(0, 10).map(([country, quantity]) => ({ country, quantity }));
//   };

//   // Function to get monthly trends data
//   const getMonthlyTrendsData = (data) => {
//     const monthlyTotals = data.reduce((acc, row) => {
//       const monthYear = `${row.month}/${row.year}`;
//       const quantity = row.quantity || 0;
//       const value = row.fob_value || 0;
//       if (!acc[monthYear]) {
//         acc[monthYear] = { quantity: 0, value: 0 };
//       }
//       acc[monthYear].quantity += quantity;
//       acc[monthYear].value += value;
//       return acc;
//     }, {});

//     const months = Object.keys(monthlyTotals);
//     const quantities = months.map(month => monthlyTotals[month].quantity);
//     const values = months.map(month => monthlyTotals[month].value);

//     return { months, quantities, values };
//   };

//   // Function to get HS Code data
//   const getHSCodeData = (data) => {
//     const hsCodeTotals = data.reduce((acc, row) => {
//       const hsCode = row.hs_code;
//       if (!acc[hsCode]) {
//         acc[hsCode] = 0;
//       }
//       acc[hsCode] += row.quantity;
//       return acc;
//     }, {});

//     return Object.entries(hsCodeTotals).map(([hscode, quantity]) => ({ hscode, quantity }));
//   };

//   // Function to get HS Code data for exports
//   const getHSCodeDataForExports = (data) => {
//     const hsCodeTotals = data.reduce((acc, row) => {
//       const hsCode = row.hs_code;
//       if (!acc[hsCode]) {
//         acc[hsCode] = 0;
//       }
//       acc[hsCode] += row.quantity;
//       return acc;
//     }, {});

//     return Object.entries(hsCodeTotals).map(([hscode, quantity]) => ({ hscode, quantity }));
//   };

//   // Function to get export destinations
//   const getTopDestinationsData = (data) => {
//     const destinationTotals = data.reduce((acc, row) => {
//       const destination = row.destination;
//       if (!acc[destination]) {
//         acc[destination] = { quantity: 0, fob_value: 0 };
//       }
//       acc[destination].quantity += row.quantity;
//       acc[destination].fob_value += row.fob_value;
//       return acc;
//     }, {});

//     const sortedDestinations = Object.entries(destinationTotals).sort((a, b) => b[1].quantity - a[1].quantity);

//     return {
//       topDestinationsByQuantity: sortedDestinations.slice(0, 10).map(([destination, { quantity }]) => ({ destination, quantity })),
//       topDestinationsByFOBValue: sortedDestinations.slice(0, 10).map(([destination, { fob_value }]) => ({ destination, fob_value }))
//     };
//   };

//   // Extract data for charts
//   const importTopCountries = getTopCountriesData(importData2022);
//   const { months: importMonths, quantities: importQuantities, values: importValues } = getMonthlyTrendsData(importData2022);
//   const importHSCodeData = getHSCodeData(importData2022);

//   const exportTopDestinations = getTopDestinationsData(exportData2022);
//   const { topDestinationsByQuantity, topDestinationsByFOBValue } = exportTopDestinations;
//   const { months: exportMonths, quantities: exportQuantities, values: exportValues } = getMonthlyTrendsData(exportData2022);
//   const exportHSCodeData = getHSCodeDataForExports(exportData2022);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold text-blue-900 mb-4">Imports Data for 2022</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">Top 10 Countries by Import Quantity (Pie Chart)</h3>
//           <Pie
//             data={{
//               labels: importTopCountries.map(item => item.country),
//               datasets: [{
//                 data: importTopCountries.map(item => item.quantity),
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57', '#57A2FF', '#FF33A2', '#A2FF33', '#FF8333', '#33FFCE'],
//               }],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">Monthly Import Trends (Line Chart)</h3>
//           <Line
//             data={{
//               labels: importMonths,
//               datasets: [
//                 {
//                   label: 'Quantity',
//                   data: importQuantities,
//                   borderColor: '#36A2EB',
//                   backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                   fill: true,
//                 },
//                 {
//                   label: 'FOB Value',
//                   data: importValues,
//                   borderColor: '#FF6384',
//                   backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                   fill: true,
//                 },
//               ],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">Total Quantity by HS Code (Bar Chart)</h3>
//           <Bar
//             data={{
//               labels: importHSCodeData.map(item => item.hscode),
//               datasets: [{
//                 label: 'Quantity',
//                 data: importHSCodeData.map(item => item.quantity),
//                 backgroundColor: '#FF6384',
//               }],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         {/* Replace this chart with another tax-related chart for imports */}
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">Additional Import Chart (Bar Chart)</h3>
//           <Bar
//             data={{
//               labels: importHSCodeData.map(item => item.hscode), // Placeholder labels
//               datasets: [{
//                 label: 'Additional Data',
//                 data: importHSCodeData.map(item => item.quantity), // Placeholder data
//                 backgroundColor: '#36A2EB',
//               }],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//       </div>

    //   <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Exports Data for 2022</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //     <div className="bg-white p-4 border border-gray-300 shadow-md">
    //       <h3 className="text-xl font-semibold mb-2">Top 10 Destinations by Quantity (Bar Chart)</h3>
    //       <Bar
    //         data={{
    //           labels: topDestinationsByQuantity.map(item => item.destination),
    //           datasets: [{
    //             label: 'Quantity',
    //             data: topDestinationsByQuantity.map(item => item.quantity),
    //             backgroundColor: '#36A2EB',
    //           }],
    //         }}
    //         options={{ responsive: true }}
    //       />
    //     </div>
    //     <div className="bg-white p-4 border border-gray-300 shadow-md">
    //       <h3 className="text-xl font-semibold mb-2">Top 10 Destinations by FOB Value (Bar Chart)</h3>
    //       <Bar
    //         data={{
    //           labels: topDestinationsByFOBValue.map(item => item.destination),
    //           datasets: [{
    //             label: 'FOB Value',
    //             data: topDestinationsByFOBValue.map(item => item.fob_value),
    //             backgroundColor: '#FF6384',
    //           }],
    //         }}
    //         options={{ responsive: true }}
    //       />
    //     </div>
    //     <div className="bg-white p-4 border border-gray-300 shadow-md">
    //       <h3 className="text-xl font-semibold mb-2">Monthly Export Trends (Line Chart)</h3>
    //       <Line
    //         data={{
    //           labels: exportMonths,
    //           datasets: [
    //             {
    //               label: 'Quantity',
    //               data: exportQuantities,
    //               borderColor: '#36A2EB',
    //               backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //               fill: true,
    //             },
    //             {
    //               label: 'FOB Value',
    //               data: exportValues,
    //               borderColor: '#FF6384',
    //               backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //               fill: true,
    //             },
    //           ],
    //         }}
    //         options={{ responsive: true }}
    //       />
    //     </div>
    //     <div className="bg-white p-4 border border-gray-300 shadow-md">
    //       <h3 className="text-xl font-semibold mb-2">HS Code Distribution (Pie Chart)</h3>
    //       <Pie
    //         data={{
    //           labels: exportHSCodeData.map(item => item.hscode),
    //           datasets: [{
    //             data: exportHSCodeData.map(item => item.quantity),
    //             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57', '#57A2FF', '#FF33A2', '#A2FF33', '#FF8333', '#33FFCE'],
    //           }],
    //         }}
    //         options={{ responsive: true }}
    //       />
    //     </div>
    //   </div>
//     </div>
//   );
// };

// export default Charts;

// import { useState, useEffect } from 'react';
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   BarElement,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
// } from 'chart.js';
// import { Pie, Doughnut, Line, Bar } from 'react-chartjs-2';

// // Register Chart.js components
// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   BarElement,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale
// );

// const Charts = () => {
//   const [importData, setImportData] = useState([]);
//   const [exportData, setExportData] = useState([]);

//   useEffect(() => {
//     // Fetch imports data
//     fetch('/public/import.json')
//       .then(response => response.json())
//       .then(data => setImportData(data.imports));

//     // Fetch exports data
//     fetch('/public/exports.json')
//       .then(response => response.json())
//       .then(data => setExportData(data.exports));
//   }, []);

//   // Filter data for 2022
//   const filterDataForYear = (data, year) =>
//     data.filter(item => new Date(item.date).getFullYear() === year);

//   const importData2022 = filterDataForYear(importData, 2022);
//   const exportData2022 = filterDataForYear(exportData, 2022);

//   // Function to get the top 10 countries by quantity
//   const getTopCountriesData = (data) => {
//     const countryTotals = data.reduce((acc, row) => {
//       const country = row.countryoforigin || row.countryofdestination;
//       if (!acc[country]) {
//         acc[country] = 0;
//       }
//       acc[country] += row.quantity;
//       return acc;
//     }, {});

//     const sortedCountries = Object.entries(countryTotals).sort((a, b) => b[1] - a[1]);

//     return sortedCountries.slice(0, 10).map(([country, quantity]) => ({ country, quantity }));
//   };

//   // Function to get monthly trends data
//   const getMonthlyTrendsData = (data) => {
//     const monthlyTotals = data.reduce((acc, row) => {
//       const date = new Date(row.date);
//       const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
//       const quantity = row.quantity || 0;
//       const value = row.fob_value || 0;
//       if (!acc[monthYear]) {
//         acc[monthYear] = { quantity: 0, value: 0 };
//       }
//       acc[monthYear].quantity += quantity;
//       acc[monthYear].value += value;
//       return acc;
//     }, {});

//     const months = Object.keys(monthlyTotals);
//     const quantities = months.map(month => monthlyTotals[month].quantity);
//     const values = months.map(month => monthlyTotals[month].value);

//     return { months, quantities, values };
//   };

//   // Function to get HS Code data
//   const getHSCodeData = (data) => {
//     const hsCodeTotals = data.reduce((acc, row) => {
//       const hsCode = row.hscode;
//       if (!acc[hsCode]) {
//         acc[hsCode] = 0;
//       }
//       acc[hsCode] += row.quantity;
//       return acc;
//     }, {});

//     return Object.entries(hsCodeTotals).map(([hscode, quantity]) => ({ hscode, quantity }));
//   };

//   // Function to get import taxes data
//   const getImportTaxesData = (data) => {
//     const taxTotals = data.reduce((acc, row) => {
//       const country = row.countryoforigin;
//       if (!acc[country]) {
//         acc[country] = { importDuty: 0, excise: 0, importVat: 0, totalTaxPayable: 0 };
//       }
//       acc[country].importDuty += row.import_duty;
//       acc[country].excise += row.excise;
//       acc[country].importVat += row.import_vat;
//       acc[country].totalTaxPayable += row.total_tax_payable;
//       return acc;
//     }, {});

//     return Object.entries(taxTotals).map(([country, taxes]) => ({ country, ...taxes }));
//   };

//   // Extract data for charts
//   const importTopCountries = getTopCountriesData(importData2022);
//   const { months: importMonths, quantities: importQuantities, values: importValues } = getMonthlyTrendsData(importData2022);
//   const importHSCodeData = getHSCodeData(importData2022);
//   const importTaxesData = getImportTaxesData(importData2022);

//   const exportTopDestinations = getTopCountriesData(exportData2022);
//   const { months: exportMonths, quantities: exportQuantities, values: exportValues } = getMonthlyTrendsData(exportData2022);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold text-blue-900 mb-4">Imports Data for 2022</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">Top 10 Countries by Import Quantity (Pie Chart)</h3>
//           <Pie
//             data={{
//               labels: importTopCountries.map(item => item.country),
//               datasets: [{
//                 data: importTopCountries.map(item => item.quantity),
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57', '#57A2FF', '#FF33A2', '#A2FF33', '#FF8333', '#33FFCE'],
//               }],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">Monthly Import Trends (Line Chart)</h3>
//           <Line
//             data={{
//               labels: importMonths,
//               datasets: [
//                 {
//                   label: 'Quantity',
//                   data: importQuantities,
//                   borderColor: '#36A2EB',
//                   backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                   fill: true,
//                 },
//                 {
//                   label: 'FOB Value',
//                   data: importValues,
//                   borderColor: '#FF6384',
//                   backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                   fill: true,
//                 },
//               ],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">Total Quantity by HS Code (Bar Chart)</h3>
//           <Bar
//             data={{
//               labels: importHSCodeData.map(item => item.hscode),
//               datasets: [{
//                 label: 'Quantity',
//                 data: importHSCodeData.map(item => item.quantity),
//                 backgroundColor: '#FF6384',
//               }],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">Share of Import Taxes by Country of Origin (Doughnut Chart)</h3>
//           <Doughnut
//             data={{
//               labels: importTaxesData.map(item => item.country),
//               datasets: [{
//                 data: importTaxesData.map(item => item.totalTaxPayable),
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57', '#57A2FF', '#FF33A2', '#A2FF33', '#FF8333', '#33FFCE'],
//               }],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Exports Data for 2022</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">Top 10 Destinations by Quantity (Bar Chart)</h3>
//           <Bar
//             data={{
//               labels: exportTopDestinations.map(item => item.country),
//               datasets: [{
//                 label: 'Quantity',
//                 data: exportTopDestinations.map(item => item.quantity),
//                 backgroundColor: '#36A2EB',
//               }],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">Monthly Export Trends (Line Chart)</h3>
//           <Line
//             data={{
//               labels: exportMonths,
//               datasets: [
//                 {
//                   label: 'Quantity',
//                   data: exportQuantities,
//                   borderColor: '#36A2EB',
//                   backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                   fill: true,
//                 },
//                 {
//                   label: 'FOB Value',
//                   data: exportValues,
//                   borderColor: '#FF6384',
//                   backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                   fill: true,
//                 },
//               ],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">HS Code Distribution (Pie Chart)</h3>
//           <Pie
//             data={{
//               labels: importHSCodeData.map(item => item.hscode),
//               datasets: [{
//                 data: importHSCodeData.map(item => item.quantity),
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57', '#57A2FF', '#FF33A2', '#A2FF33', '#FF8333', '#33FFCE'],
//               }],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Charts;

// import { useState, useEffect } from 'react';
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   BarElement,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
// } from 'chart.js';
// import { Pie, Doughnut, Line, Bar } from 'react-chartjs-2';

// // Register Chart.js components
// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   BarElement,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale
// );

// const Charts = () => {
//   const [importData, setImportData] = useState([]);
//   const [exportData, setExportData] = useState([]);

//   useEffect(() => {
//     // Fetch imports data
//     fetch('/public/import.json')
//       .then((response) => response.json())
//       .then((data) => setImportData(data.imports));

//     // Fetch exports data
//     fetch('/public/exports.json')
//       .then((response) => response.json())
//       .then((data) => setExportData(data.exports));
//   }, []);

//   // Filter data for 2022
//   const filterDataForYear = (data, year) =>
//     data.filter((item) => new Date(item.date).getFullYear() === year);

//   const importData2022 = filterDataForYear(importData, 2022);
//   const exportData2022 = filterDataForYear(exportData, 2022);

//   // Function to get the top 10 countries by quantity
//   const getTopCountriesData = (data) => {
//     const countryTotals = data.reduce((acc, row) => {
//       const country = row.countryoforigin || row.countryofdestination;
//       if (!acc[country]) {
//         acc[country] = 0;
//       }
//       acc[country] += row.quantity;
//       return acc;
//     }, {});

//     const sortedCountries = Object.entries(countryTotals).sort(
//       (a, b) => b[1] - a[1]
//     );

//     return sortedCountries
//       .slice(0, 10)
//       .map(([country, quantity]) => ({ country, quantity }));
//   };

//   // Function to get monthly trends data
//   const getMonthlyTrendsData = (data) => {
//     const monthlyTotals = data.reduce((acc, row) => {
//       const date = new Date(row.date);
//       const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
//       const quantity = row.quantity || 0;
//       const value = row.fob_value || 0;
//       if (!acc[monthYear]) {
//         acc[monthYear] = { quantity: 0, value: 0 };
//       }
//       acc[monthYear].quantity += quantity;
//       acc[monthYear].value += value;
//       return acc;
//     }, {});

//     const months = Object.keys(monthlyTotals);
//     const quantities = months.map((month) => monthlyTotals[month].quantity);
//     const values = months.map((month) => monthlyTotals[month].value);

//     return { months, quantities, values };
//   };

//   // Function to get HS Code data
//   const getHSCodeData = (data) => {
//     const hsCodeTotals = data.reduce((acc, row) => {
//       const hsCode = row.hscode;
//       if (!acc[hsCode]) {
//         acc[hsCode] = 0;
//       }
//       acc[hsCode] += row.quantity;
//       return acc;
//     }, {});

//     return Object.entries(hsCodeTotals).map(([hscode, quantity]) => ({
//       hscode,
//       quantity,
//     }));
//   };

//   // Function to get import taxes data
//   const getImportTaxesData = (data) => {
//     const taxTotals = data.reduce((acc, row) => {
//       const country = row.countryoforigin;
//       if (!acc[country]) {
//         acc[country] = {
//           importDuty: 0,
//           excise: 0,
//           importVat: 0,
//           totalTaxPayable: 0,
//         };
//       }
//       acc[country].importDuty += row.import_duty;
//       acc[country].excise += row.excise;
//       acc[country].importVat += row.import_vat;
//       acc[country].totalTaxPayable += row.total_tax_payable;
//       return acc;
//     }, {});

//     return Object.entries(taxTotals).map(([country, taxes]) => ({
//       country,
//       ...taxes,
//     }));
//   };

//   // Extract data for charts
//   const importTopCountries = getTopCountriesData(importData2022);
//   const { months: importMonths, quantities: importQuantities, values: importValues } =
//     getMonthlyTrendsData(importData2022);
//   const importHSCodeData = getHSCodeData(importData2022);
//   const importTaxesData = getImportTaxesData(importData2022);

//   const exportTopDestinations = getTopCountriesData(exportData2022);
//   const {
//     months: exportMonths,
//     quantities: exportQuantities,
//     values: exportValues,
//   } = getMonthlyTrendsData(exportData2022);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold text-blue-900 mb-4">
//         Imports Data for 2022
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">
//             Top 10 Countries by Import Quantity (Pie Chart)
//           </h3>
//           <Pie
//             data={{
//               labels: importTopCountries.map((item) => item.country),
//               datasets: [
//                 {
//                   data: importTopCountries.map((item) => item.quantity),
//                   backgroundColor: [
//                     '#FF6384',
//                     '#36A2EB',
//                     '#FFCE56',
//                     '#FF5733',
//                     '#33FF57',
//                     '#57A2FF',
//                     '#FF33A2',
//                     '#A2FF33',
//                     '#FF8333',
//                     '#33FFCE',
//                   ],
//                 },
//               ],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">
//             Monthly Import Trends (Line Chart)
//           </h3>
//           <Line
//             data={{
//               labels: importMonths,
//               datasets: [
//                 {
//                   label: 'Quantity',
//                   data: importQuantities,
//                   borderColor: '#36A2EB',
//                   backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                   fill: true,
//                 },
//                 {
//                   label: 'FOB Value',
//                   data: importValues,
//                   borderColor: '#FF6384',
//                   backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                   fill: true,
//                 },
//               ],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">
//             Total Quantity by HS Code (Bar Chart)
//           </h3>
//           <Bar
//             data={{
//               labels: importHSCodeData.map((item) => item.hscode),
//               datasets: [
//                 {
//                   label: 'Quantity',
//                   data: importHSCodeData.map((item) => item.quantity),
//                   backgroundColor: '#FF6384',
//                 },
//               ],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">
//             Share of Import Taxes by Country of Origin (Doughnut Chart)
//           </h3>
//           <Doughnut
//             data={{
//               labels: importTaxesData.map((item) => item.country),
//               datasets: [
//                 {
//                   data: importTaxesData.map((item) => item.totalTaxPayable),
//                   backgroundColor: [
//                     '#FF6384',
//                     '#36A2EB',
//                     '#FFCE56',
//                     '#FF5733',
//                     '#33FF57',
//                     '#57A2FF',
//                     '#FF33A2',
//                     '#A2FF33',
//                     '#FF8333',
//                     '#33FFCE',
//                   ],
//                 },
//               ],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
//         Exports Data for 2022
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">
//             Top 10 Destinations by Quantity (Bar Chart)
//           </h3>
//           <Bar
//             data={{
//               labels: exportTopDestinations.map((item) => item.country),
//               datasets: [
//                 {
//                   label: 'Quantity',
//                   data: exportTopDestinations.map((item) => item.quantity),
//                   backgroundColor: '#36A2EB',
//                 },
//               ],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">
//             Monthly Export Trends (Line Chart)
//           </h3>
//           <Line
//             data={{
//               labels: exportMonths,
//               datasets: [
//                 {
//                   label: 'Quantity',
//                   data: exportQuantities,
//                   borderColor: '#36A2EB',
//                   backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                   fill: true,
//                 },
//                 {
//                   label: 'FOB Value',
//                   data: exportValues,
//                   borderColor: '#FF6384',
//                   backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                   fill: true,
//                 },
//               ],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//         <div className="bg-white p-4 border border-gray-300 shadow-md">
//           <h3 className="text-xl font-semibold mb-2">
//             HS Code Distribution (Pie Chart)
//           </h3>
//           <Pie
//             data={{
//               labels: exportTopDestinations.map((item) => item.country),
//               datasets: [
//                 {
//                   data: exportTopDestinations.map((item) => item.quantity),
//                   backgroundColor: [
//                     '#FF6384',
//                     '#36A2EB',
//                     '#FFCE56',
//                     '#FF5733',
//                     '#33FF57',
//                     '#57A2FF',
//                     '#FF33A2',
//                     '#A2FF33',
//                     '#FF8333',
//                     '#33FFCE',
//                   ],
//                 },
//               ],
//             }}
//             options={{ responsive: true }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Charts;



function Charts() {
  return (
    <div>
        <ImportCharts/>
        <ExportsCharts/>
    </div>
    
  )
}

export default Charts