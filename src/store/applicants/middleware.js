import { notification } from "antd";
import { setData } from './reducer'
import { userGetApplicationsService } from "./service";


const userGetApplicationsMW = (store) => (next) => async(action) => {
    if (action.type !== 'user/get-all-applications') return next(action);
    store.dispatch(setData({
        type: "applicationsLoading",
        data: true
    }))
    const { success, message } = await userGetApplicationsService();
    store.dispatch(setData({
        type: "applicationsLoading",
        data: false
    }))
    if (!success) return notification.error({
        description: message
    })

    store.dispatch(setData({ type: "applications", data: message }))
}

const applicantMiddleware = [userGetApplicationsMW];
export default applicantMiddleware;