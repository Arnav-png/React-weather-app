import React, { useEffect, useState } from "react";


// api_key = "c8d6dd977819383f6c8dfeeabaf3420d"
// example_api_calling = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function Tempapp() {
    const [city, setcity] = useState(null)
    const [search, setsearch] = useState("london")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c8d6dd977819383f6c8dfeeabaf3420d&units=metric#`
            const response = await fetch(url)
            const resJson = await response.json();

            setcity(resJson.main)
        }
        fetchApi()
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" value={search} onChange={(e) => { setsearch(e.target.value) }} />
                </div>

                {!city ? (
                    <p className="errorMsg">No data Found</p>
                ) : (<div>
                    <div className="info">
                        <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}</h2>

                        <h1 className="temp">{city.temp}°Celsius</h1>
                        <h3 className="tempmin_max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                    </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                </div>
                )
                }
            </div>
        </>
    )
}

export default Tempapp;