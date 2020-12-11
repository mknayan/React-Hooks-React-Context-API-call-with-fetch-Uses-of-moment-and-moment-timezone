export default (state, action) => {
    switch (action.type) {
        case 'UPDATE_COUNTRY':
            console.log('UPDATE_COUNTRY', action.payload)
            return {
                ...state,
                countries: action.payload
            };
        case 'UPDATE_SELECTED_COUNTRY':
            return {
                ...state,
                selectedCountry: action.payload
            };
        case 'UPDATE_SELECTED_TIMEZONE':
            return {
                ...state,
                selectedTimezone: action.payload
            };
        default: return state;
    }
}