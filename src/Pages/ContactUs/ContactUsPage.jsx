import React from 'react'
import BaseMarkup from '../../components/Base/BaseMarkup'
import Center from '../../components/Base/Columns/Center'
import LeftColumn from '../../components/Base/Columns/LeftColumn'
import RightColumn from '../../components/Base/Columns/RightColumn'
import ContactUsCards from '../../components/Blocks/ContactUs/ContactUsCards'
import ContactUsFormBlock from '../../components/Blocks/ContactUs/ContactUsFormBlock'
import './ContactUsPage.less'


const ContactUsPage = () => {
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
                                <h6>Malaysia</h6>
                                <p className= "text-muted">11-1, Jalan Tasik Utama,</p>
                                <p className= "text-muted">Medan Niaga Tasik Damai,</p>
                                <p className= "text-muted">Sungei Besi,</p>
                                <p className= "text-muted">50470 Kuala Lumpur, Malaysia</p>
                                <p className= "text-muted">Email : desktop@jobincast.com.my</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>Indonesia</h6>
                                <p className= "text-muted">Belleza BSA, 1st Floor, Unit 106,</p>
                                <p className= "text-muted">Jl. Letjen Soepeno,</p>
                                <p className= "text-muted">Permata Hijau Kebayoran Lama,</p>
                                <p className= "text-muted">Jakarta Selatan 12210, Indonesia.</p>
                                <p className= "text-muted">Email : desktop@jobincast.co.id</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>Thailand</h6>
                                <p className= "text-muted">Suite 10.5, Golden Town Building,</p>
                                <p className= "text-muted">3rd Floor, Phayathai Road, Ratchathewi,</p>
                                <p className= "text-muted">10400 Bangkok, Thailand.</p>
                                <p className= "text-muted">Email :  desktop@jobincast.co.th</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>Vietnam</h6>
                                <p className= "text-muted">Vietcombank Tower</p>
                                <p className= "text-muted">Level 4, No. 5 Mê Linh Square,</p>
                                <p className= "text-muted">Ben Nghe Ward, District 1,</p>
                                <p className= "text-muted">Ho Chi Minh City, Vietnam.</p>
                                <p className= "text-muted">Email :  desktop@jobincast.vn</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>Singapore</h6>
                                <p className= "text-muted">Singapore Land Building</p>
                                <p className= "text-muted">5th Floor, 50 Raffles Place,</p>
                                <p className= "text-muted">Singapore 048623</p>
                                <p className= "text-muted">Email :  desktop@jobincast.com.sg</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>Philippines</h6>
                                <p className= "text-muted">LKG Tower,</p>
                                <p className= "text-muted">7th Floor, 6801 Ayala Avenue,</p>
                                <p className= "text-muted">Makati City 1226, Philippines.</p>
                                <p className= "text-muted">Email : desktop@jobincast.com.ph</p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>India</h6>
                                <p className= "text-muted">301, 3rd Floor, RG Trade Tower,</p>
                                <p className= "text-muted">Netaji Subhash Place, Pitam Pura,</p>
                                <p className= "text-muted">New Delhi-110034</p>
                                <p className= "text-muted">Email : desktop@jobincast.in</p>
                            </ContactUsCards>
                        </RightColumn>
                    </div>
                </Center>
            </div>
        </BaseMarkup>
    )
}

export default ContactUsPage
