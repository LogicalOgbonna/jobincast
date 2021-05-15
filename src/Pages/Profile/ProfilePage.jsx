import React from 'react';
import 'react-phone-input-2/lib/style.css';
import BaseMarkup from '../../components/Base/BaseMarkup';
import queryString from 'query-string';
import './ProfilePage.less';
import ProfileSetup from '../../components/Blocks/Profile/ProfileSetup';
import UserHeading from '../../components/Elements/UserHeading';

const message = {
    setup: "Describe Yourself",
    view: "Manage Profile"
}
const ProfilePage = ({ history: { location: { search } } }) => {

    const { action } = queryString.parse(search)
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout profile-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading action={action} message={message[action]} />
                        <ProfileSetup action={action} />
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default ProfilePage
