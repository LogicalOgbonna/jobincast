import React from 'react'
import BaseMarkup from '../../components/Base/BaseMarkup'
import Center from '../../components/Base/Columns/Center'
import LeftColumn from '../../components/Base/Columns/LeftColumn'
import RightColumn from '../../components/Base/Columns/RightColumn'
import ContactUsCards from '../../components/Blocks/ContactUs/ContactUsCards'
import ContactUsFormBlock from '../../components/Blocks/ContactUs/ContactUsFormBlock'
import './ContactUsPage.scss'


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
                                <p>Email : <a style= {{color: "#16D0D9"}} href="mailto:desktop@jobincast.com.my">desktop@jobincast.com.my</a></p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>Indonesia</h6>
                                <p className= "text-muted">Belleza BSA, 1st Floor, Unit 106,</p>
                                <p className= "text-muted">Jl. Letjen Soepeno,</p>
                                <p className= "text-muted">Permata Hijau Kebayoran Lama,</p>
                                <p className= "text-muted">Jakarta Selatan 12210, Indonesia.</p>
                                <p>Email : <a style= {{color: "#A61100"}} href="mailto:desktop@jobincast.co.id">desktop@jobincast.co.id</a></p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>Thailand</h6>
                                <p className= "text-muted">Suite 10.5, Golden Town Building,</p>
                                <p className= "text-muted">3rd Floor, Phayathai Road, Ratchathewi,</p>
                                <p className= "text-muted">10400 Bangkok, Thailand.</p>
                                <p>Email : <a style= {{color: "#792BC4"}} href="mailto:desktop@jobincast.co.th">desktop@jobincast.co.th</a></p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>Vietnam</h6>
                                <p className= "text-muted">Vietcombank Tower</p>
                                <p className= "text-muted">Level 4, No. 5 Mê Linh Square,</p>
                                <p className= "text-muted">Ben Nghe Ward, District 1,</p>
                                <p className= "text-muted">Ho Chi Minh City, Vietnam.</p>
                                <p>Email : <a style= {{color: "#917E2F"}} href="mailto:desktop@jobincast.vn">desktop@jobincast.vn</a></p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>Singapore</h6>
                                <p className= "text-muted">Singapore Land Building</p>
                                <p className= "text-muted">5th Floor, 50 Raffles Place,</p>
                                <p className= "text-muted">Singapore 048623</p>
                                <p>Email : <a style= {{color: "#D91694"}} href="mailto:desktop@jobincast.com.sg">desktop@jobincast.com.sg</a></p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>Philippine</h6>
                                <p className= "text-muted">LKG Tower,</p>
                                <p className= "text-muted">7th Floor, 6801 Ayala Avenue,</p>
                                <p className= "text-muted">Makati City 1226, Philippine.</p>
                                <p>Email : <a style= {{color: "#00A651"}} href="mailto:desktop@jobincast.com.ph">desktop@jobincast.com.ph</a></p>
                            </ContactUsCards>
                            <ContactUsCards>
                                <h6>India</h6>
                                <p className= "text-muted">301, 3rd Floor, RG Trade Tower,</p>
                                <p className= "text-muted">Netaji Subhash Place, Pitam Pura,</p>
                                <p className= "text-muted">New Delhi-110034</p>
                                <p>Email : <a style= {{color: "#2E3192"}} href="mailto:desktop@jobincast.com.in">desktop@jobincast.in</a></p>
                            </ContactUsCards>
                        </RightColumn>
                    </div>
                </Center>
            </div>
        </BaseMarkup>
    )
}

export default ContactUsPage
