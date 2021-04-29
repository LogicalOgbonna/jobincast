import BaseMarkup from "../../components/Base/BaseMarkup"
import Center from "../../components/Base/Columns/Center"
import { FeaturedCompanies, HeroBlock, WhyUsBlock, RecentJobs, CareerTips } from "../../components/Blocks/Home"

const HomePage = () => {
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
