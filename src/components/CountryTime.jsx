import React, { Suspense, useEffect, useContext } from "react";
import moment from "moment";
import tim from 'moment-timezone'
import cityTimezones from "city-timezones";

import { GlobalContext } from '../context/GlobalState';

let selectedTimezoneVar = ''
let GetTimeNow = setInterval(function () {
    const elementExists = document.getElementById("timenow");
    if (elementExists) {
        if (selectedTimezoneVar != '') {
            const time_moment = moment().tz(selectedTimezoneVar).format("hh:mm:ss a");
            document.getElementById("timenow").innerHTML = time_moment;
        } else {
            document.getElementById("timenow").innerHTML = "Timezone not found";
        }
    }
}, 1000)

const CountryTime = () => {

    const { selectedTimezone } = useContext(GlobalContext);
    selectedTimezoneVar = selectedTimezone;
    useEffect(() => {
        let GetTimeNow = setInterval(function () {
            const elementExists = document.getElementById("timenow");
            if (elementExists) {
                if (selectedTimezoneVar != '') {
                    const time_moment = moment().tz(selectedTimezoneVar).format("hh:mm:ss a");
                    document.getElementById("timenow").innerHTML = time_moment;
                } else {
                    document.getElementById("timenow").innerHTML = "Timezone not found";
                }
            }
        }, 1000)
        clearInterval(GetTimeNow)
    }, [selectedTimezone]);

    return (
        <Suspense>
            <div className="text-center">Country Time: <span id="timenow"></span></div>
        </Suspense>
    )
};

export default CountryTime;