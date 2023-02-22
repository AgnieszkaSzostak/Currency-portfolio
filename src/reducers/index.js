import { combineReducers } from 'redux';
import { localStorageReducer } from '../modules/localStorage/localStorage.reducer';
import { walletReducer } from '../modules/wallet/wallet.reducer';

const reducers = combineReducers({
    ls: localStorageReducer,
    wallet: walletReducer
})

export default reducers
  