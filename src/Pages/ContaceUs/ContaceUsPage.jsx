import React from 'react'
import BaseMarkup from '../../components/Base/BaseMarkup'
import Center from '../../components/Base/Columns/Center'
import LeftColumn from '../../components/Base/Columns/LeftColumn'
import RightColumn from '../../components/Base/Columns/RightColumn'
import ContactUsCards from '../../components/Blocks/ContactUs/ContactUsCards'
import ContactUsFormBlock from '../../components/Blocks/ContactUs/ContactUsFormBlock'
import './ContaceUsPage.less'


const ContaceUsPage = () => {
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout contact-us-page">
                <Center>
                    <div className="row justify-content-center">
                        <LeftColumn>
                            <ContactUsFormBlock />
                            <p className="contact-us-page-text">For general, send will submit message to desktop@jobincast.com
For other country,  send will submit message to the respective country email address.</p>
                        </LeftColumn>
                        <RightColumn>
                            <p>Alternatively, you can send your email directly to the respective country of inquiry below.</p>
                            <ContactUsCards>
                                <h5>Malaysia</h5>
                                <p>11-1, Jalan Tasik Utama,</p>
                                <p>Medan Niaga Tasik Damai,</p>
                                <p>Sungei Besi,</p>
                                <p>50470 Kuala Lumpur, Malaysia</p>
                                <p>Email : desktop@jobincast.com.my</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h5>Indonesia</h5>
                                <p>Belleza BSA, 1st Floor, Unit 106,</p>
                                <p>Jl. Letjen Soepeno,</p>
                                <p>Permata Hijau Kebayoran Lama,</p>
                                <p>Jakarta Selatan 12210, Indonesia.</p>
                                <p>Email : desktop@jobincast.co.id</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h5>Thailand</h5>
                                <p>Suite 10.5, Golden Town Building,</p>
                                <p>3rd Floor, Phayathai Road, Ratchathewi,</p>
                                <p>10400 Bangkok, Thailand.</p>
                                <p>Email :  desktop@jobincast.co.th</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h5>Vietnam</h5>
                                <p>Vietcombank Tower</p>
                                <p>Level 4, No. 5 Mê Linh Square,</p>
                                <p>Ben Nghe Ward, District 1,</p>
                                <p>Ho Chi Minh City, Vietnam.</p>
                                <p>Email :  desktop@jobincast.vn</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h5>Singapore</h5>
                                <p>Singapore Land Building</p>
                                <p>5th Floor, 50 Raffles Place,</p>
                                <p>Singapore 048623</p>
                                <p>Email :  desktop@jobincast.com.sg</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h5>Philippines</h5>
                                <p>LKG Tower,</p>
                                <p>7th Floor, 6801 Ayala Avenue,</p>
                                <p>Makati City 1226, Philippines.</p>
                                <p>Email : desktop@jobincast.com.ph</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h5>India</h5>
                                <p>301, 3rd Floor, RG Trade Tower,</p>
                                <p>Netaji Subhash Place, Pitam Pura,</p>
                                <p>New Delhi-110034</p>
                                <p>Email : desktop@jobincast.in</p>
                            </ContactUsCards>
                        </RightColumn>
                    </div>
                </Center>
            </div>
        </BaseMarkup>
    )
}

export default ContaceUsPage
