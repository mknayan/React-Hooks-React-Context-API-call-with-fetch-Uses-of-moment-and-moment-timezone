import React, { Suspense, useState, useEffect, useContext } from "react";
import cityTimezones from "city-timezones";

import { GlobalContext } from '../context/GlobalState';

const fetchCountry = query => {
    const url = 'https://restcountries.eu/rest/v2/capital/' + query;
    return fetch(url).then(function (response) {
        return response.json();
    })
};

const SearchBox = () => {

    const [query, setQuery] = useState('dhaka');
    const [country, setCountry] = useState([]);
    const { updateCountryList, updateSelectedCountry, updateSelectedTimeZone } = useContext(GlobalContext);

    useEffect(() => {
        async function fetchData() {
            updateCountryList([])
            updateSelectedCountry('')
            updateSelectedTimeZone('')
            if (query != '') {
                await fetchCountry(query).then(function (data) {
                    if (data.status) {
                        setCountry([])
                    } else {
                        setCountry(data)
                        updateCountryList(data)
                        updateSelectedCountry(data[0])

                        if (data[0].capital) {
                            const timezoneArray = cityTimezones.lookupViaCity(data[0].capital)
                            let timezone = ''
                            if (timezoneArray && timezoneArray.length > 0) {
                                timezone = timezoneArray[0].timezone
                            }
                            updateSelectedTimeZone(timezone)
                        }
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

export default SearchBox;