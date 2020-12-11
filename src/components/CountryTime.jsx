import React, { Suspense, useEffect, useContext } from "react";
import moment from "moment";
import tim from 'moment-timezone'
import cityTimezones from "city-timezones";

import { GlobalContext } from '../context/GlobalState';

const GetTimeNow = function (selectedTimezone) {
    setInterval(() => {
        if (selectedTimezone != '') {
            const time_moment = moment().tz(selectedTimezone).format("hh:mm:ss a");
            const elementExists = document.getElementById("timenow");
            if (elementExists) {
                document.getElementById("timenow").innerHTML = time_moment;
            }
        }
    }, 1000)
}

const CountryTime = () => {

    const { selectedTimezone } = useContext(GlobalContext);

    useEffect(() => {
        clearInterval(GetTimeNow)
        GetTimeNow(selectedTimezone)
    }, [selectedTimezone]);

    return (
        <Suspense>
            <div className="text-center">Country Time: <span id="timenow"></span></div>
        </Suspense>
    )
};

export default CountryTime;