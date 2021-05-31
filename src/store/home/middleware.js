import { notification } from 'antd';
import { setData } from './reducer';
import { getFeaturedCompaniesService } from './service'

const getFeaturedCompaniesMW = (store) => (next) => async action => {
    if (action.type !== "user/get-feature-companies") return next(action);

    store.dispatch(setData({
        type: "featuredCompaniesLoading",
        value: true
    }))
    const { success, message } = await getFeaturedCompaniesService(action.payload);

    if (!success) return notification.error({
        description: "Could not get any featured company at the moment.",
    })

    store.dispatch(setData({
        type: "featuredCompaniesLoading",
        value: false
    }))

    store.dispatch(setData({
        type: "featuredCompanies",
        value: message
    }))
}

const companiesMiddleWare = [getFeaturedCompaniesMW]

export default companiesMiddleWare;
