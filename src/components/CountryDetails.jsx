import React, { Suspense, useState, useEffect } from "react";

const fetchCountry = query => {
    const url = 'https://restcountries.eu/rest/v2/capital/' + query;
    return fetch(url).then(function (response) {
        return response.json();
    })
};

const CountryDetails = () => {

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
            <div className="col-md-4 left-border">
                <p className="text-center"><b>Country Details</b></p>
                <div className="text-center">
                    Country Name: Bangladesh<br />
                    Capital: Dhaka<br />
                    Languages: Bengali<br />
                    Flag: <img src="https://restcountries.eu/data/bgd.svg" />
                </div>
                <div className="text-center">Country Time : 2020-12-11 00:37:19 (Los Angeles)</div>
                {/* <GetTimeNow /> */}
            </div>
        </Suspense>
    )
};

export default CountryDetails;