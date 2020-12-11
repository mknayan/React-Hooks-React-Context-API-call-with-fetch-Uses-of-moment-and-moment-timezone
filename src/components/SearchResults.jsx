import React, { Suspense, useContext, Fragment } from "react";

import { GlobalContext } from '../context/GlobalState';

const SearchResults = () => {

    const { updateSelectedCountry, updateSelectedTimeZone, countries } = useContext(GlobalContext);

    const handleClick = (data) => {
        updateSelectedCountry(data)
        updateSelectedTimeZone(data.timezones[0])
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
                                                <li key={`country-${countries_index}`} onClick={() => handleClick(countries_single)}>{countries_single.name}</li>
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