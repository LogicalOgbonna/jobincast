import './ProfilePage.less';
import 'react-phone-input-2/lib/style.css';

import queryString from 'query-string';
import React from 'react';

import BaseMarkup from '../../components/Base/BaseMarkup';
import ProfileSetup from '../../components/Blocks/Profile/ProfileSetup';
import UserHeading from '../../components/Elements/UserHeading';
import ViewProfile from '../../components/Blocks/Profile/ViewProfile';

const message = {
    setup: "Describe Yourself",
    view: "Manage Profile"
}
const ProfilePage = ({ history: { location: { search } } }) => {

    const { action } = queryString.parse(search);
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout profile-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading action={action} message={message[action]} />
                        <ProfileSetup action={action} />
                        <ViewProfile action={action} />
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default ProfilePage