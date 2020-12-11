import React, { Suspense, useState, useEffect } from "react";
import moment from "moment";

function GetTimeNow() {
    let la_time_moment = moment().tz('America/Los_Angeles').format("YYYY-MM-DD HH:mm:ss");
    setInterval(() => {
        var elementExists = document.getElementById("timenow");
        if (elementExists) {
            la_time_moment = moment().tz('America/Los_Angeles').format("YYYY-MM-DD HH:mm:ss");
            // document.getElementById("timenow").innerHTML = "<strong>Country Time: </strong>" + la_time_moment + " (Los Angeles)";
            return (<div className="text-center"><strong>Country Time: </strong>{la_time_moment} (Los Angeles)</div>)
        }
    }, 1000);
}

const fetchCountry = query => {
    const url = 'https://restcountries.eu/rest/v2/capital/' + query;
    return fetch(url).then(function (response) {
        return response.json();
    })
};

const CountryTime = () => {

    const [query, setQuery] = useState('dhaka');
    const [country, setCountry] = useState({});

    useEffect(() => {
        async function fetchData() {
            if (query != '') {
                await fetchCountry(query).then(function (data) {
                    // console.log('Request succeeded with JSON response', data);
                    if (data.status) {
                        setCountry([])
                    } else {
                        setCountry(country)
                    }
                })
            }
        }
        fetchData()
    }, [query]);

    return (
        <Suspense>
            <div className="col-md-4">
                <p className="text-center"><b>Search with capital</b></p>
                <input type="text" name="search" className="form-control" value={query} onChange={e => setQuery(e.target.value)} />
            </div>
        </Suspense>
    )
};

export default CountryTime;