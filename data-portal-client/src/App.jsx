
// import './App.css'
// import HomePage from './Pages/HomePage'
// import DataRepository from './Pages/DataRepository'
// import DataSheets from './Pages/DataSheets'

// function App() {


//   return (
//     <>
//       <HomePage />
//       <DataRepository/>
//       <DataSheets/>
//     </>
//   )
// }

// export default App
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DataRepository from './Pages/DataRepository';
import DataSheets from './Pages/DataSheets';
import Header from "./Components/Header"
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Footer from './Components/Footer';
import CountryDetails from './Components/CountryDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data-repository" element={<DataRepository />} />
        <Route path="/data-sheets" element={<DataSheets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/country/:countryName" element={<CountryDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
