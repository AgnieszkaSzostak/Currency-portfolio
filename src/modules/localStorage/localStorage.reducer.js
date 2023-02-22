import localStorageTypes from "./localStorage.types"

const initState = {
    lsCurrencies: []
}

export const localStorageReducer = (state = initState, action) => {
    switch(action.type) {
        case localStorageTypes.SET_CURRENCYS:
            return {
                ...state,
                lsCurrencies: action.payload
            }
        default: 
            return state
    }
}