import React from 'react'
import BaseMarkup from '../../components/Base/BaseMarkup';
import './PrivacyPage.less';

const PrivacyPage = () => {
    return (
        <BaseMarkup className="bg-grey">
            <div className="privacy-page desktop-layout">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 privacy-content">
                        <h1>Privacy Policy</h1>

                        <h3>Accounts and membership</h3>
                        <p>You must be at least 18 years of age to use this Website. By using this Website and by agreeing to this Agreement you warrant and represent that you are at least 18 years of age. If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and use our Services.</p>
                        <p>Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.</p>

                        <h3>User content</h3>
                        <p>
                            We do not own any data, information or material (“Content”) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor and review Content on the Website submitted or created using our Services by you.
                    </p>
                        <p>
                            Unless specifically permitted by you, your use of the Website does not grant us the license to use, reproduce, adapt, modify, publish or distribute the Content created by you or stored in your user account for commercial, marketing or any similar purpose. But you grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you. Without limiting any of those representations or warranties, we have the right, though not the obligation, to, in our own sole discretion, refuse or remove any Content that, in our reasonable opinion, violates any of our policies or is in any way harmful or objectionable.
                    </p>

                        <h3>
                            Billing and payments
                    </h3>
                        <p>
                            You shall pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. If, in our judgment, your purchase constitutes a high-risk transaction, we will require you to provide us with a copy of your valid government-issued photo identification, and possibly a copy of a recent bank statement for the credit or debit card used for the purchase.
                    </p>

                        <p>
                            We reserve the right to change products and product pricing at any time. We also reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made.
                    </p>
                    </div>

                </div>
            </div>
        </BaseMarkup>
    )
}

export default PrivacyPage
