import { setPill } from './reducer'
import _ from 'lodash'
import { getAllJobsAC } from '../jobs/action';
import queryString from 'query-string';

const selectPillMW = (store) => (next) => async (action) => {
    if (action.type !== 'user/select-pill') return next(action);
    // action.payload
    const { data, history } = action.payload;
    if (data.page === 'jobs') {
        const previousSearch = (queryString.parse(history.location.search)).search ? (queryString.parse(history.location.search)).search : ''
        if (previousSearch) {
            await store.dispatch(getAllJobsAC(`page=0&size=10&search=${previousSearch};${data.searchKey}==${data.label.toUpperCase()}`))
            history.push(`/jobs?search=${previousSearch};${data.searchKey}==${data.label.toUpperCase()}`)
        } else {
            await store.dispatch(getAllJobsAC(`page=0&size=10&search=${data.searchKey}==${data.label.toUpperCase()}`))
            history.push(`/jobs?search=${data.searchKey}==${data.label.toUpperCase()}`)

        }
        //     return
    }
    const { pills } = store.getState().filterSlice;
    if (!_.find(pills, data)) {
        const newPills = [...pills, data]
        store.dispatch(setPill(newPills))
    }
}
const removePillMW = (store) => (next) => (action) => {
    if (action.type !== 'user/remove-pill') return next(action);
    const { pills } = store.getState().filterSlice;
    const newPills = pills.filter(pill => (pill.id !== action.payload.id) || (pill.type !== action.payload.type))
    store.dispatch(setPill(newPills))
}
const clearPillMW = (store) => (next) => (action) => {
    if (action.type !== 'user/clear-pill') return next(action);
    store.dispatch(setPill([]))
}

const filterMiddleware = [selectPillMW, removePillMW, clearPillMW];

export default filterMiddleware;