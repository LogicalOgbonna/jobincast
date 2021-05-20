import { combineReducers } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';
import filterSlice from './filter/reducer'
import authSlice from './auth/reducer'
import profileSlice from './profile/reducer'
import applicantsSlice from './applicants/reducer'
const reducers = combineReducers({
    filterSlice,
    authSlice,
    profileSlice,
    applicantsSlice
});

// const persistConfig = {
//   key: 'activEdge:atm-recon',
//   storage
// };

// export default persistReducer(persistConfig, reducers);
export default reducers;