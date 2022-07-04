import axios from "axios"
import { useEffect, useState } from "react"

function CountryList(props) {
    const {countries, handleCountrySelection} = props
    
    return(
        <div>
            <h1>
                Countries List
            </h1>
                {
                    countries !== null ? countries.map((country) => {
                        return(
                            <div onClick={ (e) => handleCountrySelection(country.name.common)}>
                                {country.name.common}
                            </div>
                        )
                    }) : ''
                }
        </div>
        


    )
}

export default CountryList