import localStorageTypes from "./localStorage.types"
import LocalStorageAPI from "./localStorage.api"

const api = new LocalStorageAPI();

export const setCurrencysAction = (array) => {
    return {
        type: localStorageTypes.SET_CURRENCYS,
        payload: array
    }
} 

export const getWalletFromLS = (name) => {
    
    return function thunk(dispatch) {
        if(api.loadFromLocalStorage(name) !== undefined){
            dispatch(setCurrencysAction(api.loadFromLocalStorage(name)))
        }
    }
}
