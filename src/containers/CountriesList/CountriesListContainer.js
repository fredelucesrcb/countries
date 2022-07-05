import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';

function CountryList(props) {
    const {countries, handleCountrySelection, loading, currentCountry} = props

    function setChosen(name) {
        return currentCountry === name ? 'red' : ''
    }
    return(
        <div>
            <h1>
                Countries List
            </h1>
                {
                    !loading ?
                    countries !== null ? countries.map((country) => {
                        return(
                            <div onClick={ (e) => handleCountrySelection(country.name.common)} style={{cursor:"pointer", color: setChosen(country.name.common) }}>
                                {country.name.common}
                            </div>
                        )
                    }) : ''
                    :
                    <Stack spacing={2} sx={{width: '70%', margin: 'auto'}}>
                        <Skeleton variant="text" width={'100%'}/>
                        <Skeleton variant="text" width={'100%'}/>
                        <Skeleton variant="text" width={'100%'}/>
                    </Stack>
                    

                }
        </div>
        
    )
}

export default CountryList