import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import Skeleton from '@mui/material/Skeleton';


function CountriesContainer(props) {
    const {name, flags, countryLoading} = props
    const [information, setCountryInformation] = useState(null)

    useEffect(() =>{
        if(name !== null) {
            axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${name.common}?redirect=false`).then((data) => {
                setCountryInformation(data);
            })
        }
    }, [name])

    function trimCountryInfo(string){
        return string.slice(0, 300)
    }
    return (
        <div>
            <h1>
                Country
            </h1>
            
            {
                countryLoading ? 
                <Box>
                    <Box>
                        <Skeleton variant="rectangular" width={350} height={233} sx={{margin: "auto"}}/>
                    </Box>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <Skeleton width={'40%'} sx={{margin:"auto"}}/>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Skeleton width={'80%'} sx={{margin:"auto"}}/>
                                <Skeleton width={'80%'} sx={{margin:"auto"}}/>
                                <Skeleton width={'80%'} sx={{margin:"auto"}}/>

                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                
                :

                <Fragment>
                    <Box
                        component="img"
                        sx={{
                            height: 233,
                            width: 350,
                            maxHeight: { xs: 233, md: 200 },
                            maxWidth: { xs: 350, md: 300 },
                        }}
                        src={flags ? flags.png : ''}
                    />

                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {
                                    name ? name.common : ''
                                }
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {
                                    information ?
                                    <div className="country_information">
                                        {trimCountryInfo(information.data.extract)}<a href={`${information.data.content_urls.desktop.page}`} target={"_blank"}>...</a>
                                    </div>
                                    :
                                    ''
                                }
                            </Typography>
                        </CardContent>
                    </Card>
                </Fragment>

            }



        </div>
        
    )
}

export default CountriesContainer