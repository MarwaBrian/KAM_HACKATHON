// import { useState } from 'react';
// import map from '../assets/africa.png'; 

// const SearchAndMap = () => {
//   const [activeRegion, setActiveRegion] = useState('North Africa');
//   const [searchTerm, setSearchTerm] = useState('');

//   const regions = {
//     "North Africa": ["Algeria", "Egypt", "Libya", "Mauritania", "Morocco", "Tunisia"],
//     "West Africa": ["Benin", "Burkina Faso", "Côte d'Ivoire", "Ghana", "Mali", "Niger", "Nigeria", "Senegal"],
//     "East Africa": ["Burundi", "Ethiopia", "Kenya", "Rwanda", "Seychelles", "Somalia", "South Sudan", "Uganda", "Tanzania"],
//     "Central Africa": ["Angola", "Cameroon", "Central African Republic", "Chad", "Congo", "Gabon"],
//     "South Africa": ["Botswana", "Lesotho", "Namibia", "South Africa", "Eswatini", "Zimbabwe"]
//   };

//   const allCountries = Object.values(regions).flat();
//   const filteredCountries = allCountries.filter((country) =>
//     country.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const regionFilteredCountries = regions[activeRegion].filter((country) =>
//     country.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="bg-white p-4" style={{ backgroundColor: '#ADD8E6' }}>
//       <div className="container mx-auto">
//         <div className="relative mb-4">
//           <input
//             type="text"
//             placeholder="Search for data"
//             className="w-full p-2 border border-gray-300 rounded"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <span className="absolute top-1/2 transform -translate-y-1/2 right-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-400"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M12.9 14.32a8 8 0 111.42-1.42l5.38 5.38a1 1 0 01-1.42 1.42l-5.38-5.38zm-1.4-9.32a6 6 0 100 12 6 6 0 000-12z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </span>
//         </div>
//         <div className="flex flex-col md:flex-row mt-6">
//           <div className="w-full md:w-2/3 lg:w-1/2 pr-4">
//             <h2 className="font-semibold text-lg mb-2">Data by Countries</h2>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {Object.keys(regions).map((region) => (
//                 <button
//                   key={region}
//                   onClick={() => setActiveRegion(region)}
//                   className={`whitespace-nowrap font-semibold text-sm py-1 px-2 rounded ${
//                     activeRegion === region ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-green-100'
//                   }`}
//                 >
//                   {region}
//                 </button>
//               ))}
//             </div>
//             <hr className="my-4 border-gray-300" />
//             <ul className="grid grid-cols-2 gap-2">
//               {(searchTerm ? filteredCountries : regionFilteredCountries).map((country) => (
//                 <li key={country} className="text-gray-700 hover:underline cursor-pointer">
//                   {country}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 lg:w-1/2">
//             <img src={map} alt="Map" className="w-full h-auto max-h-60 object-contain" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchAndMap;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import map from '../assets/africa.png'; 

const SearchAndMap = () => {
  const [activeRegion, setActiveRegion] = useState('North Africa');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const regions = {
    "North Africa": ["Algeria", "Egypt", "Libya", "Mauritania", "Morocco", "Tunisia"],
    "West Africa": ["Benin", "Burkina Faso", "Côte d'Ivoire", "Ghana", "Mali", "Niger", "Nigeria", "Senegal"],
    "East Africa": ["Burundi", "Ethiopia", "Kenya", "Rwanda", "Seychelles", "Somalia", "South Sudan", "Uganda", "Tanzania"],
    "Central Africa": ["Angola", "Cameroon", "Central African Republic", "Chad", "Congo", "Gabon"],
    "South Africa": ["Botswana", "Lesotho", "Namibia", "South Africa", "Eswatini", "Zimbabwe"]
  };

  const allCountries = Object.values(regions).flat();
  const filteredCountries = allCountries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const regionFilteredCountries = regions[activeRegion].filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountryClick = (country) => {
    navigate(`/country/${country}`);
  };

  return (
    <div className="bg-white p-4" style={{ backgroundColor: '#ADD8E6' }}>
      <div className="container mx-auto">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search for data"
            className="w-full p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute top-1/2 transform -translate-y-1/2 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.42-1.42l5.38 5.38a1 1 0 01-1.42 1.42l-5.38-5.38zm-1.4-9.32a6 6 0 100 12 6 6 0 000-12z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col md:flex-row mt-6">
          <div className="w-full md:w-2/3 lg:w-1/2 pr-4">
            <h2 className="font-semibold text-lg mb-2">Data by Countries</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.keys(regions).map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`whitespace-nowrap font-semibold text-sm py-1 px-2 rounded ${
                    activeRegion === region ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-green-100'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
            <hr className="my-4 border-gray-300" />
            <ul className="grid grid-cols-2 gap-2">
              {(searchTerm ? filteredCountries : regionFilteredCountries).map((country) => (
                <li 
                  key={country} 
                  className="text-gray-700 hover:underline cursor-pointer"
                  onClick={() => handleCountryClick(country)}
                >
                  {country}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/2">
            <img src={map} alt="Map" className="w-full h-auto max-h-60 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndMap;
