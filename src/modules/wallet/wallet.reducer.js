import walletTypes from "./wallet.types";

const initState = {
    walletCurrencies: [],
}

export const walletReducer = (state = initState, action) => {
    switch(action.type) {
        case walletTypes.SET_CURRENCY:
            return {
                ...state,
                walletCurrencies: [...state.walletCurrencies, action.payload]
            }

        default: 
            return state
    }
}