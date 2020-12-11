import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    countries: [],
    selectedCountry: '',
    selectedTimezone: ''
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function updateCountryList(data) {
        dispatch({
            type: 'UPDATE_COUNTRY',
            payload: data
        });
    };

    function updateSelectedCountry(data) {
        dispatch({
            type: 'UPDATE_SELECTED_COUNTRY',
            payload: data
        });
    };

    function updateSelectedTimeZone(data) {
        dispatch({
            type: 'UPDATE_SELECTED_TIMEZONE',
            payload: data
        });
    };

    return (<GlobalContext.Provider value={{
        countries: state.countries,
        selectedCountry: state.selectedCountry,
        selectedTimezone: state.selectedTimezone,
        updateCountryList,
        updateSelectedCountry,
        updateSelectedTimeZone
    }}>
        {children}
    </GlobalContext.Provider>);
}