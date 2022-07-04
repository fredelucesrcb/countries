import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useEffect, useState } from "react"
import CountriesContainer from './containers/Countries/countriesContainer';
import CountryDetails from './containers/CountryDetails/countryDetailsContainer';
import CountryList from './containers/CountriesList/CountriesListContainer';

function App() {
  const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState(null);
  const [countryDetails, setCountryDetails] = useState(null)

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
      axios.get('https://restcountries.com/v3.1/all').then((data) =>{
          setCountries(data.data);
      })
  }, []) 

  return (
    <div className="App">
      <h1>
        Countries
      </h1>

      <div id="country_container">

        <CountryList 
        countries = {countries}
        handleCountrySelection = {handleCountrySelection}
        />  

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
  );
}

export default App;
