
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
import CountryData from './components/CountryData';

function App() {
  return (
    <div className="m-4">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data-repository" element={<DataRepository />} />
        <Route path="/data-sheets" element={<DataSheets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/country/:countryName" element={<CountryDetails />} />
          <Route path="exports/:country" element={<CountryData />} />
          <Route path="imports/:country" element={<CountryData />} />
          <Route path="/datasheets/:tab/:country" element={<CountryData />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
