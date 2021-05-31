import { combineReducers } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';
import filterSlice from './filter/reducer'
import authSlice from './auth/reducer'
import profileSlice from './profile/reducer'
import applicantsSlice from './applicants/reducer'
import jobsSlice from './jobs/reducer'
import homeSlice from './home/reducer'
import resumeSlice from './resume/reducer'
import companiesSlice from './companies/reducer'
const reducers = combineReducers({
    filterSlice,
    authSlice,
    profileSlice,
    applicantsSlice,
    jobsSlice,
    homeSlice,
    resumeSlice,
    companiesSlice
});

// const persistConfig = {
//   key: 'activEdge:atm-recon',
//   storage
// };

// export default persistReducer(persistConfig, reducers);
export default reducers;