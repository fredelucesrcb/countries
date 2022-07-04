import axios from "axios"
import { useEffect, useState } from "react"


function CountriesContainer(props) {
    const {name, flags} = props
    const [information, setCountryInformation] = useState(null)

    useEffect(() =>{
        if(name !== null) {
            axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${name.common}?redirect=false`).then((data) => {
                setCountryInformation(data);
            })
        }
    }, [name])
    return (
        <div>
            <h1>
                Country
            </h1>
            <h2 className="country_name">
                {
                name ? name.common : ''
                
                }
            </h2>
            {
                flags ? 
                <div className="flag_container">
                    <img src={`${flags.png}`}>

                    </img>
                </div> :

                ''
            }
            {   
                information ?
                <div className="country_information">
                    {
                        information.data.extract
                    }
                </div>
                :
                ''
            }
            
            
        </div>
        
    )
}

export default CountriesContainer