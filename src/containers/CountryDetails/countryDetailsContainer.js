import './styles.css'
import { Avatar, Box, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Stack } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import LocationCityTwoToneIcon from '@mui/icons-material/LocationCityTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';


function CountryDetails(props) {
    const {coatOfArms, population, capital, continents, name, currencies, countryLoading} = props  
    let currencyArr = currencies ? Object.keys(currencies) : null;

    function getCurrencies(currencyArray){
        return currencyArray.map((currency, index) =>{ 
            let text = ''
            return text += `${currencies[currency].name}(${currencies[currency].symbol}) ${currencyArr[index+1] ? ', ' : ''} `}
    )
    }
    function getContinents(continents) {
        let conts = ''
        continents.length < 2 ? conts = continents[0] : continents.map((continent) => conts += `${continent}, ` )

        return conts
    }
    return (
        <div>
            <h1>
                Country Details
            </h1>
            {
                countryLoading ?
                <Grid 
                    container 
                    spacing={1} 
                >
                    <Grid item sm={2} id="coat_of_arms_container">
                        <Box>
                            <Skeleton variant="circular" width={40} height={40} />
                        </Box>
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item sm={9}>
                        <Stack spacing={2} sx={{width: '70%', margin: 'auto'}}>
                            <Skeleton variant="text" width={'100%'}/>
                            <Skeleton variant="text" width={'100%'}/>
                            <Skeleton variant="text" width={'100%'}/>
                        </Stack>
                    </Grid>
                </Grid>

                :

                <Grid 
                    container 
                    spacing={1} 
                >
                <Grid item sm={2} id="coat_of_arms_container">
                    <Box
                        component="img"
                        sx={{
                            height: 100,
                            width: 100,
                          }}
                        src={ coatOfArms ? coatOfArms.png : ''}
                    >
                    </Box>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid item sm={9}>
                    {
                        coatOfArms !== null ? 
                        <Grid container spacing={0.5}>
                            <Grid item sm={5}>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Offical name" secondary={name.official}/>   
                                    </ListItem>
                                    
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <CurrencyExchangeIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Currency" secondary={getCurrencies(currencyArr)}/> 
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item sm={4}>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <PeopleAltTwoToneIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Population" secondary={population.toLocaleString('en-US')}/>   
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <LocationCityTwoToneIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Capital" secondary={capital}/>   
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item sm={2}>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <PublicTwoToneIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Continent" secondary={getContinents(continents)}/>   
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                            
                            : 
                        'Please select a country'
                    }
                </Grid>
            </Grid>

            }
            
        </div>
        
    )
}

export default CountryDetails