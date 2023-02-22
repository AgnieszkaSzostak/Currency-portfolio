import API_KEY from "../../helpers/config";

class WalletAPI {
    url = 'https://api.apilayer.com/exchangerates_data';
    options = {
        method: 'GET',
        headers: {
            API_KEY,
        }
    }
    defaultCurrency = 'PLN'
    getCurrentValue(currency){

        return fetch(`${this.url}/latest?symbols=${this.defaultCurrency}&base=${currency}`, this.options)
            .then(this.handleErrors)
            .then(resp => resp.json())
            .catch(error => console.log('error', error))
    }
    getHistoricalValue(date, currency){
        return fetch(`${this.url}/${date}?symbols=${this.defaultCurrency}&base=${currency}`, this.options)
            .then(this.handleErrors)
            .then(resp => resp.json())
            .catch(error => console.log('error', error))

    }
    handleErrors(resp) {
        if(!resp.ok) {
            throw Error(resp.statusText);
        }

        return resp;
    }

}

export default WalletAPI