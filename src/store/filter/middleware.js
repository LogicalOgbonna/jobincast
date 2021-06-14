import { setCurrentState, setPill } from './reducer'
import _ from 'lodash'

const prepareSearch = (newCurrentState) => {
    let searchString = `search=`;
    for (let m in newCurrentState) {
        if (newCurrentState[m].length > 0) {
            if (m === "jobTitle" || m === "title" || m === "fullName") {
                const searchValue = newCurrentState[m].replace(/'/g, "");
                searchString += `${m}=='*${searchValue}*';`;
            }
            else {
                if (newCurrentState[m].length > 1) {
                    const searchValue = newCurrentState[m].join(",").replace(/'/g, "").split(",").map(value => `'${value}'`).join(",");
                    searchString += `${m}=in=(${searchValue});`;
                } else {
                    const searchValue = newCurrentState[m].join(",").replace(/'/g, "");
                    searchString += `${m}=='${searchValue}';`;
                }
            }
        }
    }
    return searchString = searchString.substring(0, searchString.length - 1).replace(/"/g, "");
}
const selectPillMW = (store) => (next) => async (action) => {
    if (action.type !== 'user/select-pill') return next(action);
    const { currentState, pills } = { ...store.getState().filterSlice }
    const newCurrentState = { ...currentState }
    const { data, history } = action.payload;
    if (!_.find(pills, data)) {
        newCurrentState[data.searchKey] =
            newCurrentState[data.searchKey] ?
                [...newCurrentState[data.searchKey], data.label.toUpperCase()] :
                [data.label.toUpperCase()];
        const searchString = prepareSearch(newCurrentState)
        history.push(`/${data.page}?page=0&size=10&${searchString}`)

        const newPills = [...pills, data]
        store.dispatch(setPill(newPills))
    }
}
const removePillMW = (store) => (next) => (action) => {
    if (action.type !== 'user/remove-pill') return next(action);
    const { id, history } = action.payload;
    const { pills, currentState } = store.getState().filterSlice;
    const newCurrentState = { ...currentState }
    const pillToRemove = pills.find(value => value.id === id)
    const regex = new RegExp(`${pillToRemove.label}`, "gi");
    let searchValue = newCurrentState[pillToRemove.searchKey].join(" ").replace(regex, "").replace(/'/g, "").trim().replace(/  +/g, " ")
    newCurrentState[pillToRemove.searchKey] = searchValue.length > 1 ? searchValue.split(" ") : [];
    const searchString = prepareSearch(newCurrentState)
    history.push(`/${pillToRemove.page}?page=0&size=10&${searchString}`)
    const newPills = pills.filter(pill => pill.id !== id)
    store.dispatch(setCurrentState(newCurrentState))
    store.dispatch(setPill(newPills))
}
const clearPillMW = (store) => (next) => (action) => {
    if (action.type !== 'user/clear-pill') return next(action);
    const { pathname } = window.location;
    action.payload.push(pathname)
    store.dispatch(setPill([]))
}
const clearFilterAndCurrentStateMW = (store) => (next) => (action) => {
    if (action.type !== 'user/clear-all-state-and-pills') return next(action);
    store.dispatch(setPill([]))
    store.dispatch(setCurrentState({}))
}



const filterMiddleware = [selectPillMW, removePillMW, clearPillMW, clearFilterAndCurrentStateMW];

export default filterMiddleware;