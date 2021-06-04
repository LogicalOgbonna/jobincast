import './ProfilePage.less';
import 'react-phone-input-2/lib/style.css';

import queryString from 'query-string';
import React from 'react';

import BaseMarkup from '../../components/Base/BaseMarkup';
import ProfileSetupApplicant from '../../components/Blocks/Profile/ProfileSetupApplicant';
import ProfileSetupEmployer from '../../components/Blocks/Profile/ProfileSetupEmployer';
import UserHeading from '../../components/Elements/UserHeading';
import ViewProfile from '../../components/Blocks/Profile/ViewProfile';
import { useSelector } from 'react-redux';

const ProfilePage = ({ history: { location: { search } } }) => {

    const message = {
        setup: "Describe Yourself",
        view: "Manage Profile"
    }
    const profile = useSelector(({ profileSlice: { profile }}) => profile)
    console.log("🚀 ~ file: ProfilePage.jsx ~ line 20 ~ ProfilePage ~ profile", profile)
    const { action } = queryString.parse(search);
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout profile-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading subMessage={`Points Balance: ${profile?.availableUnits}pts`} action={action} message={message[action]} />
                        <ProfileSetupApplicant action={action} />
                        <ProfileSetupEmployer action={action} />
                        <ViewProfile action={action} />
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default ProfilePage
