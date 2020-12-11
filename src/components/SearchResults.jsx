import React, { Suspense, useContext, Fragment } from "react";
import cityTimezones from "city-timezones";

import { GlobalContext } from '../context/GlobalState';

const SearchResults = () => {

    const { updateSelectedCountry, updateSelectedTimeZone, countries, selectedCountry } = useContext(GlobalContext);

    const handleClick = (data) => {
        updateSelectedCountry(data)

        const timezoneArray = cityTimezones.lookupViaCity(data.capital)
        let timezone = ''
        if (timezoneArray && timezoneArray.length > 0) {
            timezone = timezoneArray[0].timezone
        }
        updateSelectedTimeZone(timezone)
    }

    return (
        <Suspense>
            <div className="col-md-4 left-border">
                <p className="text-center"><b>Results</b></p>
                <div className="results">
                    <ul>
                        {
                            countries.length > 0 ?
                                <Fragment>
                                    {
                                        countries.map((countries_single, countries_index) => {
                                            return (
                                                <li key={`country-${countries_index}`} onClick={() => handleClick(countries_single)} className={selectedCountry != '' ? (selectedCountry.name == countries_single.name ? 'active' : '') : ''}>{countries_single.name}</li>
                                            )
                                        })
                                    }
                                </Fragment>
                                :
                                ''
                        }
                    </ul>
                </div>
            </div>
        </Suspense>
    )
};

export default SearchResults;