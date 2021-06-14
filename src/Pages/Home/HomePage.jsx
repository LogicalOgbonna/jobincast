import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BaseMarkup from "../../components/Base/BaseMarkup"
import Center from "../../components/Base/Columns/Center"
import { FeaturedCompanies, HeroBlock, WhyUsBlock, RecentJobs, CareerTips } from "../../components/Blocks/Home"
import { getFeaturedCompaniesAC } from "../../store/home/action";
import { getAllJobsAC } from "../../store/jobs/action";

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllJobsAC("page=0&size=4&sort=createdAt,desc"))
        dispatch(getFeaturedCompaniesAC("page=0&size=4"))
    }, [])

    const state = useSelector(state => state.state)
    
    return (
        <BaseMarkup>
            <div className="desktop-layout">
                <HeroBlock />
                <Center>
                    <FeaturedCompanies />
                    <WhyUsBlock />
                    <RecentJobs />
                    <CareerTips />
                </Center>
            </div>
        </BaseMarkup>
    )
}

export default HomePage
