import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useEffect, useState } from "react"
import CountriesContainer from './containers/Countries/countriesContainer';
import CountryDetails from './containers/CountryDetails/countryDetailsContainer';
import CountryList from './containers/CountriesList/CountriesListContainer';
import Pagination from './components/Pagination.js';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [countryDetails, setCountryDetails] = useState(null)
  //pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(25);

  function handleCountrySelection(country) {
    setCountry(country)
  }

  useEffect(() => {
    if(country !== null) {
      axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`).then((data) => {
        setCountryDetails(data.data[0])
      })
    }
  }, [country])

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(sortByName(data.data));
    }
      fetchCountries()
  }, []) 

  function sortByName(countries) {
      return countries.sort((a,b) => a.name.common.localeCompare(b.name.common))
  }

  function handlePaginate(number) {
    setCurrentPage(number);
  }

  const iLastCountry = currentPage * countriesPerPage;
  const iFirstCountry = iLastCountry - countriesPerPage;
  const currentCountries = countries.slice(iFirstCountry, iLastCountry);

  return (
    <div className="App">
      <h1>
        Countries
      </h1>

      <div id="country_container">

        <div id="countries_list">
          <CountryList 
          countries = {currentCountries}
          handleCountrySelection = {handleCountrySelection}
          />  
          <Pagination 
            itemsPerPage = {countriesPerPage}
            totalPages = {countries.length}
            paginate = {handlePaginate}
          />
        </div>
        

        <div id="country_details_column">
          <CountriesContainer
          name = {countryDetails ? countryDetails.name : null}
          flags = {countryDetails ? countryDetails.flags : null}
          />

          <CountryDetails
          coatOfArms = {countryDetails ? countryDetails.coatOfArms : null}
          population = {countryDetails ? countryDetails.population : null}
          capital = {countryDetails ? countryDetails.capital : null}
          continents = {countryDetails ? countryDetails.continents : null}
          name = {countryDetails ? countryDetails.name : null}
          currencies = {countryDetails ? countryDetails.currencies: null}
          />
        </div>
       
      </div>
      
    </div>
  );
}

export default App;
