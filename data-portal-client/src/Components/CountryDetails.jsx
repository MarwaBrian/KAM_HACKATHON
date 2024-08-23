

// import { useState } from 'react';
// import { Line, Bar } from 'react-chartjs-2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

// const generateChartData = (indicator, data, years) => ({
//   labels: years,
//   datasets: [
//     {
//       label: indicator,
//       data: data,
//       fill: true,
//       backgroundColor: 'rgba(54,162,235,0.2)',  
//       borderColor: 'rgba(54,162,235,1)',         
//       tension: 0.1,
//     },
//   ],
// });

// const CountryDetails = () => {
//   const [selectedCountry, setSelectedCountry] = useState('Kenya');

//   const dummyData = {
  
//     Kenya: [
//       { indicator: 'Real GDP growth (annual %)', data: [3.8, 5.0, 5.0, 4.2, 3.8, 5.6, 5.1, -0.3, 7.6, 4.8, 5.2, 5.4, 5.6] },
//       { indicator: 'Real per Capita GDP Growth Rate (annual %)', data: [1.3, 2.6, 2.7, 1.9, 1.6, 3.5, 3.0, -2.3, 5.5, 2.8, 3.1, 3.4, 3.5] },
//       { indicator: 'Central government, Fiscal Balance (% of GDP)', data: [-5.4, -6.3, -8.3, -7.2, -8.4, -6.7, -7.3, -7.0, -8.3, -6.3, -7.0, -5.5, -5.0] },
//       { indicator: 'Inflation, consumer prices (annual %)', data: [5.7, 6.9, 6.6, 6.3, 8.0, 4.7, 5.2, 5.4, 6.1, 7.6, 7.7, 6.2, 5.5] },
//       { indicator: 'Current account balance (As % of GDP)', data: [-7.9, -9.3, -6.3, -5.4, -7.0, -5.4, -5.2, -4.8, -5.2, -5.2, -4.9, -4.6, -4.5] },
//       { indicator: 'Exports of goods and services (% of GDP)', data: [17.8, 16.5, 15.1, 13.2, 12.7, 12.5, 11.4, 9.6, 10.8, 12.2, 13.9, 15.2, 14.5] },
//       { indicator: 'Imports of goods and services (% of GDP)', data: [29.7, 29.7, 25.2, 21.6, 23.3, 21.9, 20.3, 17.6, 19.9, 21.5, 22.9, 24.7, 24.1] },
//     ],
//     Uganda: [
//       { indicator: 'Real GDP growth (annual %)', data: [5.1, 4.9, 5.2, 5.0, 4.9, 6.1, 4.8, -1.5, 6.7, 5.0, 5.3, 5.5, 5.7] },
//       { indicator: 'Real per Capita GDP Growth Rate (annual %)', data: [2.3, 2.2, 2.5, 2.3, 2.2, 3.5, 2.5, -2.0, 4.5, 3.0, 3.2, 3.4, 3.6] },
//       { indicator: 'Central government, Fiscal Balance (% of GDP)', data: [-4.5, -5.2, -5.9, -6.0, -6.5, -5.0, -5.5, -7.0, -6.5, -5.8, -6.2, -5.0, -4.5] },
//       { indicator: 'Inflation, consumer prices (annual %)', data: [4.5, 5.0, 5.2, 4.7, 6.5, 3.9, 4.2, 4.0, 5.1, 6.0, 6.2, 5.4, 5.0] },
//       { indicator: 'Current account balance (As % of GDP)', data: [-5.5, -6.0, -5.8, -5.5, -6.0, -5.0, -4.8, -6.5, -6.0, -5.5, -5.3, -4.8, -4.5] },
//       { indicator: 'Exports of goods and services (% of GDP)', data: [12.5, 12.0, 11.5, 11.0, 10.5, 10.0, 9.5, 8.5, 9.0, 9.5, 10.0, 10.5, 10.8] },
//       { indicator: 'Imports of goods and services (% of GDP)', data: [22.0, 21.5, 20.0, 19.0, 18.5, 17.5, 17.0, 16.5, 17.0, 17.5, 18.0, 18.5, 18.8] },
//     ],
//     Nigeria: [
//       { indicator: 'Real GDP growth (annual %)', data: [6.2, 6.5, 6.3, 6.0, 5.9, 7.0, 6.8, -1.9, 3.2, 4.0, 2.7, 3.2, 3.5] },
//       { indicator: 'Real per Capita GDP Growth Rate (annual %)', data: [2.5, 2.7, 2.6, 2.4, 2.3, 3.0, 2.8, -1.1, 0.9, 1.7, 0.5, 1.0, 1.3] },
//       { indicator: 'Central government, Fiscal Balance (% of GDP)', data: [-2.0, -2.5, -3.0, -2.8, -3.5, -2.8, -3.0, -4.0, -3.5, -4.0, -4.5, -5.0, -5.2] },
//       { indicator: 'Inflation, consumer prices (annual %)', data: [10.0, 11.2, 11.5, 10.8, 12.0, 11.5, 12.2, 13.0, 12.5, 11.9, 12.0, 13.2, 14.0] },
//       { indicator: 'Current account balance (As % of GDP)', data: [-3.5, -3.8, -4.0, -4.2, -4.5, -4.0, -4.2, -5.0, -5.2, -5.5, -5.8, -6.0, -6.2] },
//       { indicator: 'Exports of goods and services (% of GDP)', data: [14.0, 14.5, 14.2, 14.0, 14.3, 14.5, 14.8, 13.5, 13.0, 12.8, 12.7, 12.5, 12.0] },
//       { indicator: 'Imports of goods and services (% of GDP)', data: [20.5, 21.0, 21.5, 21.0, 22.0, 21.5, 22.0, 22.5, 22.8, 23.0, 23.5, 24.0, 24.5] },
//     ],
//     Ghana: [
//       { indicator: 'Real GDP growth (annual %)', data: [8.5, 7.8, 7.5, 7.0, 6.8, 6.5, 6.2, -1.0, 2.5, 3.6, 4.1, 4.5, 4.8] },
//       { indicator: 'Real per Capita GDP Growth Rate (annual %)', data: [3.0, 2.8, 2.6, 2.4, 2.2, 2.0, 1.8, -0.5, -0.2, 0.7, 1.1, 1.5, 1.8] },
//       { indicator: 'Central government, Fiscal Balance (% of GDP)', data: [-3.0, -3.5, -4.0, -4.5, -4.8, -4.0, -4.5, -5.0, -5.5, -6.0, -6.5, -6.8, -7.0] },
//       { indicator: 'Inflation, consumer prices (annual %)', data: [11.0, 10.5, 11.0, 11.5, 12.0, 11.8, 12.5, 13.0, 12.8, 12.5, 12.0, 12.5, 13.0] },
//       { indicator: 'Current account balance (As % of GDP)', data: [-6.5, -6.8, -7.0, -7.2, -7.5, -7.0, -6.8, -7.5, -7.8, -8.0, -8.2, -8.5, -8.7] },
//       { indicator: 'Exports of goods and services (% of GDP)', data: [22.5, 22.0, 21.5, 21.0, 20.8, 20.5, 20.0, 18.5, 18.0, 17.5, 17.0, 16.5, 16.0] },
//       { indicator: 'Imports of goods and services (% of GDP)', data: [30.0, 29.5, 29.0, 29.2, 30.0, 29.5, 30.0, 30.5, 31.0, 31.5, 32.0, 32.5, 33.0] },
//     ],
//     Burundi: [
//     { "indicator": "Real GDP growth (annual %)", "data": [3.5, 3.7, 3.9, 3.8, 3.6, 4.0, 4.2, -0.5, -0.3, 0.2, 0.5, 0.8, 1.0] },
//     { "indicator": "Real per Capita GDP Growth Rate (annual %)", "data": [1.5, 1.7, 1.9, 1.8, 1.6, 2.0, 2.2, -1.0, -0.8, -0.5, -0.3, 0.1, 0.3] },
//     { "indicator": "Central government, Fiscal Balance (% of GDP)", "data": [-6.0, -6.2, -6.5, -6.0, -6.3, -6.1, -6.0, -6.5, -6.8, -6.7, -6.5, -6.2, -6.0] },
//     { "indicator": "Inflation, consumer prices (annual %)", "data": [9.0, 9.2, 9.5, 9.0, 9.3, 9.1, 9.0, 10.0, 10.2, 10.1, 9.9, 9.7, 9.5] },
//     { "indicator": "Current account balance (As % of GDP)", "data": [-8.0, -8.2, -8.5, -8.3, -8.6, -8.4, -8.2, -8.8, -8.9, -9.0, -8.8, -8.7, -8.5] },
//     { "indicator": "Exports of goods and services (% of GDP)", "data": [10.0, 10.2, 10.5, 10.0, 9.8, 10.0, 10.2, 8.5, 8.2, 8.0, 8.5, 8.3, 8.0] },
//     { "indicator": "Imports of goods and services (% of GDP)", "data": [25.0, 25.5, 25.8, 25.0, 25.2, 25.5, 25.8, 24.0, 24.5, 24.8, 25.0, 25.2, 25.5] }
//   ],
//   Zambia: [
//     { "indicator": "Real GDP growth (annual %)", "data": [7.8, 8.0, 7.5, 6.9, 6.7, 7.2, 7.5, -1.2, -1.0, -0.8, 1.5, 2.0, 2.5] },
//     { "indicator": "Real per Capita GDP Growth Rate (annual %)", "data": [4.0, 4.2, 4.0, 3.8, 3.6, 4.0, 4.2, -2.0, -1.8, -1.5, 0.5, 1.0, 1.5] },
//     { "indicator": "Central government, Fiscal Balance (% of GDP)", "data": [-4.5, -4.8, -5.0, -4.7, -4.5, -4.8, -5.0, -6.0, -6.5, -6.2, -6.0, -5.8, -5.5] },
//     { "indicator": "Inflation, consumer prices (annual %)", "data": [12.0, 12.5, 12.7, 12.3, 12.0, 12.5, 12.8, 14.0, 14.5, 14.7, 14.2, 14.0, 13.8] },
//     { "indicator": "Current account balance (As % of GDP)", "data": [-7.5, -7.8, -8.0, -7.7, -7.9, -8.0, -7.8, -8.5, -8.7, -8.8, -8.6, -8.4, -8.3] },
//     { "indicator": "Exports of goods and services (% of GDP)", "data": [16.0, 16.5, 16.8, 16.2, 16.0, 16.5, 16.8, 15.5, 15.0, 14.8, 14.5, 14.2, 14.0] },
//     { "indicator": "Imports of goods and services (% of GDP)", "data": [31.0, 31.5, 32.0, 31.2, 31.5, 31.8, 32.0, 30.5, 30.8, 31.0, 31.5, 32.0, 32.5] }
//   ],
// Malawi: [
//     { "indicator": "Real GDP growth (annual %)", "data": [4.5, 4.8, 4.7, 4.5, 4.4, 5.0, 5.2, -0.3, -0.2, 0.1, 1.0, 1.5, 1.8] },
//     { "indicator": "Real per Capita GDP Growth Rate (annual %)", "data": [2.5, 2.8, 2.7, 2.5, 2.3, 2.8, 3.0, -1.0, -0.8, -0.6, 0.3, 0.7, 1.0] },
//     { "indicator": "Central government, Fiscal Balance (% of GDP)", "data": [-5.0, -5.3, -5.5, -5.2, -5.0, -5.2, -5.3, -6.0, -6.3, -6.2, -6.0, -5.8, -5.5] },
//     { "indicator": "Inflation, consumer prices (annual %)", "data": [9.5, 9.8, 10.0, 9.7, 10.0, 9.9, 10.2, 11.5, 11.8, 11.7, 11.5, 11.2, 11.0] },
//     { "indicator": "Current account balance (As % of GDP)", "data": [-7.5, -7.8, -8.0, -7.7, -7.9, -8.0, -7.8, -8.5, -8.7, -8.8, -8.6, -8.4, -8.3] },
//     { "indicator": "Exports of goods and services (% of GDP)", "data": [12.5, 12.8, 13.0, 12.7, 12.5, 12.8, 13.0, 11.5, 11.2, 11.0, 10.8, 10.5, 10.2] },
//     { "indicator": "Imports of goods and services (% of GDP)", "data": [20.5, 21.0, 21.5, 21.0, 21.2, 21.5, 21.8, 20.5, 20.8, 21.0, 21.2, 21.5, 21.8] }
//   ],
//   Ethiopia: [
//     { "indicator": "Real GDP growth (annual %)", "data": [8.6, 8.9, 9.0, 8.5, 8.4, 8.7, 8.9, 6.5, 6.3, 6.8, 7.0, 7.2, 7.5] },
//     { "indicator": "Real per Capita GDP Growth Rate (annual %)", "data": [5.0, 5.2, 5.1, 4.9, 4.8, 5.0, 5.2, 2.0, 1.9, 2.1, 2.3, 2.5, 2.7] },
//     { "indicator": "Central government, Fiscal Balance (% of GDP)", "data": [-2.5, -2.8, -3.0, -2.7, -2.6, -2.8, -3.0, -4.0, -4.2, -4.1, -4.0, -3.8, -3.5] },
//     { "indicator": "Inflation, consumer prices (annual %)", "data": [8.0, 8.2, 8.5, 8.3, 8.4, 8.2, 8.0, 9.5, 9.7, 9.6, 9.4, 9.2, 9.0] },
//     { "indicator": "Current account balance (As % of GDP)", "data": [-5.5, -5.8, -6.0, -5.7, -5.9, -5.8, -5.5, -6.5, -6.7, -6.6, -6.5, -6.3, -6.0] },
//     { "indicator": "Exports of goods and services (% of GDP)", "data": [15.0, 15.2, 15.5, 15.0, 14.8, 15.0, 15.2, 13.5, 13.3, 13.0, 12.8, 12.5, 12.2] },
//     { "indicator": "Imports of goods and services (% of GDP)", "data": [29.0, 29.5, 30.0, 29.2, 29.5, 29.8, 30.0, 27.5, 27.8, 28.0, 28.2, 28.5, 28.8] }
//   ]
//   };

//   const years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

//   return (
//     <div className="p-4">
//       <div className="relative mb-4 w-1/2">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country-select">
//           Select Country
//         </label>
//         <div className="relative">
//           <select
//             id="country-select"
//             className="block appearance-none w-full bg-white border border-blue-400 hover:border-blue-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue"
//             value={selectedCountry}
//             onChange={(e) => setSelectedCountry(e.target.value)}
//           >
//             {/* ... (your options here) */}
//             <option value="Kenya">Kenya</option>
//             <option value="Uganda">Uganda</option>
//           <option value="Tanzania">Tanzania</option>
//           <option value="Rwanda">Rwanda</option>
//           <option value="Burundi">Burundi</option>
//           <option value="Zambia">Zambia</option>
//           <option value="Malawi">Malawi</option>
//           <option value="Ethiopia">Ethiopia</option>
//           <option value="Senegal">Senegal</option>
//           <option value="Côte d'Ivoire">Côte dIvoire</option>
//           <option value="Ghana">Ghana</option>
//           <option value="Nigeria">Nigeria</option>
//           <option value="South Africa">South Africa</option>
//           <option value="Algeria">Algeria</option>
//           <option value="Morocco">Morocco</option>
//           <option value="Egypt">Egypt</option>
           
//           </select>
//           <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//             <FontAwesomeIcon icon={faChevronDown} className="text-gray-500" />
//           </div>
//         </div>
//       </div>
      
//       {/* New Table */}
//       <div className="overflow-x-auto mb-4">
//         <table className="min-w-full divide-y divide-blue-200">
//           <thead className="bg-blue-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">Indicator</th>
//               {years.map(year => (
//                 <th key={year} className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">{year}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-blue-200">
//             {dummyData[selectedCountry].map(item => (
//               <tr key={item.indicator}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{item.indicator}</td>
//                 {item.data.map((value, index) => (
//                   <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{value}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         {dummyData[selectedCountry].map(item => (
//           <div key={item.indicator} className="border p-4">
//             <h3 className="text-center font-bold mb-2 text-blue-700">{item.indicator}</h3>
//             <div style={{ position: 'relative', height: '200px', width: '100%' }}>
//               <Line
//                 data={generateChartData(item.indicator, item.data, years)}
//                 options={{
//                   responsive: true,
//                   maintainAspectRatio: false,
//                   plugins: {
//                     legend: {
//                       position: 'top',
//                       labels: {
//                         color: 'rgba(54,162,235,1)',
//                       },
//                     },
//                     tooltip: {
//                       callbacks: {
//                         label: function(tooltipItem) {
//                           return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
//                         },
//                       },
//                     },
//                   },
//                   aspectRatio: 1,
//                 }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//   {dummyData[selectedCountry].map(item => (
//     <div key={item.indicator} className="border p-4">
//       <h3 className="text-center font-bold mb-2 text-blue-700">{item.indicator}</h3>
//       <div style={{ position: 'relative', height: '200px', width: '100%' }}>
//         <Bar
//           data={generateChartData(item.indicator, item.data, years)}
//           options={{
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: {
//               legend: {
//                 position: 'top',
//                 labels: {
//                   color: 'rgba(54,162,235,1)',
//                 },
//               },
//               tooltip: {
//                 callbacks: {
//                   label: function(tooltipItem) {
//                     return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
//                   },
//                 },
//               },
//             },
//             aspectRatio: 1,
//           }}
//         />
//       </div>
//     </div>
//   ))}
// </div>

//     </div>
    
//   );
// };

// export default CountryDetails;


import Charts from "./Charts"
import DataTable from "./DataTable"


function CountryDetails() {


    return (
      <>
        <div>
         <DataTable />
         <Charts />
        </div>
      </>
    )
  }
  
  export default CountryDetails