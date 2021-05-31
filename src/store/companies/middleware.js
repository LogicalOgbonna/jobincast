import { notification } from "antd";
import { getAllCompaniesService } from "./service";
import { setData } from './reducer'


const getAllCompaniesMV = store => next => async action => {
    if (action.type !== 'user/get-all-companies') return next(action);

    store.dispatch(setData({
        type: "companiesLoading",
        value: true
    }))
    const { success, message } = await getAllCompaniesService(action.payload);
    if (!success) return notification.error({
        description: message
    })

    store.dispatch(setData({
        type: "companiesLoading",
        value: false
    }))
    store.dispatch(setData({
        type: "companies",
        value: message
    }))
}

const companiesMiddleware = [getAllCompaniesMV];
export default companiesMiddleware;