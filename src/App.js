import './App.css';
import axios from "axios"
import { useEffect, useState } from "react"
import CountriesContainer from './containers/Countries/countriesContainer';
import CountryDetails from './containers/CountryDetails/countryDetailsContainer';
import CountryList from './containers/CountriesList/CountriesListContainer';
import PaginationComponent from './components/Pagination/index.js';
import { Card, Container, Grid, Paper, Stack } from '@mui/material';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [countryDetails, setCountryDetails] = useState(null)
  //pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(25);
  //loading state
  const [loadingCountryList, setLoadingCountryList] = useState(true)
  const [countryLoading, setCountryLoading] = useState(true)

  function handleCountrySelection(country) {
    setCountry(country)
  }

  useEffect(() => {
    if(country !== null) {
      setCountryLoading(true)
      axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`).then((data) => {
        setCountryDetails(data.data[0]);
        setCountryLoading(false)
      })
    }
  }, [country])

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(sortByName(data.data));
      setLoadingCountryList(false)
    }
      fetchCountries()
  }, []) 

  function sortByName(countries) {
      return countries.sort((a,b) => a.name.common.localeCompare(b.name.common))
  }

  function handlePaginate(event, number) {
    // console.log(event, number)
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
      <Container maxWidth="l">
      <Grid container spacing={2}>

        <Grid item sm={3} id='countries_list'>
          <Stack
          >
            <Paper elevation={3}>
              <CountryList 
              countries = {currentCountries}
              handleCountrySelection = {handleCountrySelection}
              loading = {loadingCountryList}
              />  
              <PaginationComponent
                itemsPerPage = {countriesPerPage}
                totalPages = {countries.length}
                paginate = {handlePaginate}
                currentPage = {currentPage}
              />
            </Paper>
          </Stack>
          
        </Grid>        

        <Grid item sm={9}>
          <Stack
              direction="column"
              justifyContent="space-evenly"
              alignItems="flex-start"
              spacing={1.5}
              id={'country_details_column'}
            >
              <Paper elevation={2}
              id='main_details'
              >
                <CountriesContainer
                name = {countryDetails ? countryDetails.name : null}
                flags = {countryDetails ? countryDetails.flags : null}
                countryLoading = {countryLoading}
                />
              </Paper>
              
              <Paper elevation={3}
              id='secondary_details'
              >
                <CountryDetails
                coatOfArms = {countryDetails ? countryDetails.coatOfArms : null}
                population = {countryDetails ? countryDetails.population : null}
                capital = {countryDetails ? countryDetails.capital : null}
                continents = {countryDetails ? countryDetails.continents : null}
                name = {countryDetails ? countryDetails.name : null}
                currencies = {countryDetails ? countryDetails.currencies: null}
                countryLoading = {countryLoading}
                />
              </Paper>
              
            </Stack>
        </Grid>
    
      </Grid>

      </Container>
      
    </div>
  );
}

export default App;
