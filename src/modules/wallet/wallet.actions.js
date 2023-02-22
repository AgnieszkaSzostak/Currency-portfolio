import walletTypes from "./wallet.types";
import WalletAPI from './wallet.api'

const api = new WalletAPI();

export const setCurrencyAction = (currency) => {
    return {
        type: walletTypes.SET_CURRENCY,
        payload: currency
    }
}


export const getCurrentValueAction = (walletObject) => {
    const {amount, price, currency} = walletObject;
    return function thunk(dispatch, getState) {
        api.getCurrentValue(currency)
        .then(resp => {
            const fixedAmount = Number(amount).toFixed(2);
            const fixedPrice = Number(price).toFixed(2);
            const rate = resp.rates['PLN'].toFixed(2);
            const currentValue = (Number(rate) * Number(fixedAmount)).toFixed(2);
            const previousValue = Number(fixedAmount) * Number(fixedPrice);

            return {...walletObject, 
                price: fixedPrice,
                currentRate: Number(rate),
                currentValue: currentValue,
                profit: (currentValue - previousValue).toFixed(2) 
            }
            })
        .then(resp => dispatch(setCurrencyAction(resp)))

    }
}
