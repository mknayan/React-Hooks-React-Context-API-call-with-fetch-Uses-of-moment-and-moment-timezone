import React, { Suspense, useState, useEffect, useContext } from "react";

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
    const { updateCountryList } = useContext(GlobalContext);

    useEffect(() => {
        async function fetchData() {
            if (query != '') {
                await fetchCountry(query).then(function (data) {
                    // console.log('Request succeeded with JSON response', data);
                    if (data.status) {
                        setCountry([])
                        updateCountryList([])
                    } else {
                        setCountry(data)
                        updateCountryList(data)
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