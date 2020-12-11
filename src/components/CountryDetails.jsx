import React, { Fragment, Suspense, useContext } from "react";

import CountryTime from './CountryTime';
import { GlobalContext } from '../context/GlobalState';

const CountryDetails = () => {

    const { selectedCountry } = useContext(GlobalContext);

    return (
        <Suspense>
            <div className="col-md-4 left-border">
                <p className="text-center"><b>Country Details</b></p>
                {
                    selectedCountry != '' ?
                        <Fragment>
                            <div className="text-center">
                                Country Name: {selectedCountry.name}<br />
                                Capital: {selectedCountry.capital}<br />
                                Languages:&nbsp;
                                {
                                    selectedCountry.languages && selectedCountry.languages.length > 0 ?
                                        <Fragment>
                                            {
                                                selectedCountry.languages.map((languages_single, languages_index) => {
                                                    return languages_single.name + ' '
                                                })
                                            }
                                        </Fragment>
                                        : ''
                                }
                                <br />
                                Flag: <img src={selectedCountry.flag} />
                            </div>
                            <CountryTime />
                        </Fragment>
                        :
                        ''
                }


            </div>
        </Suspense>
    )
};

export default CountryDetails;