import { setPill } from './reducer'
import _ from 'lodash'

const selectPillMW = (store) => (next) => (action) => {
    if (action.type !== 'user/select-pill') return next(action);
    const { pills } = store.getState().filterSlice;
    if (!_.find(pills, action.payload)) {
        const newPills = [...pills, action.payload]
        store.dispatch(setPill(newPills))
    }
}
const removePillMW = (store) => (next) => (action) => {
    if (action.type !== 'user/remove-pill') return next(action);
    console.log(action.payload)
    const { pills } = store.getState().filterSlice;
    const newPills = pills.filter(pill => (pill.id !== action.payload.id) || (pill.type !== action.payload.type))
    store.dispatch(setPill(newPills))
}

const filterMiddlerware = [selectPillMW, removePillMW];

export default filterMiddlerware;