

function CountryDetails(props) {
    const {coatOfArms, population, capital, continents, name, currencies} = props  
    let currencyArr = currencies ? Object.keys(currencies) : null;
    return (
        <div>
            <h1>
                Country Details
            </h1>

            {
                coatOfArms !== null ? 
                <div>
                    <div className="official_name">
                        {name.official}    
                    </div>
                    <div className="currency">
                        {
                            currencyArr ? 
                            currencyArr.map((currency) => 
                                <span>
                                    {`${currencies[currency].name}(${currencies[currency].symbol})`}
                                </span>
                            ) : ''
                        }    
                    </div>
                    <div className="coat_of_arms">
                        <img src={`${coatOfArms.svg}`} style={{width: "100px", height: "100px"}}>
                        
                        </img>
                    </div> 
                    <div className="population">
                        {population.toLocaleString('en-US')}
                    </div>
                    <div>
                        {capital[0]}
                    </div>
                    <div className="continents">
                        {
                            continents.length < 2 ? 
                            continents[0] :
                            continents.map((continent) => `${continent}, ` )
                        }    
                    </div>
                    
                </div>
                    
                    : 
                'Please select a country'
            }
            
        </div>
        
    )
}

export default CountryDetails