import './points.scss';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux';

import BaseMarkup from '../../components/Base/BaseMarkup';
import UserHeading from '../../components/Elements/UserHeading';
import Stripe from './Stripe';
import { payPalSuccessAC, stripePaymentAC } from '../../store/profile/action';
import { setLoading } from '../../store/profile/reducer';

const defaultOptions = {
    fortyPoints: {
        check: false,
        amount: 10.0,
        quantity: 10,
        type: "BASIC_UNIT"
    },
    eightyPoints: {
        check: false,
        amount: 100.0,
        quantity: 100,
        type: "STANDARD_UNIT"
    },
    hundredPoints: {
        check: false,
        amount: 1000.0,
        quantity: "Unlimited",
        type: "PLATINUM_UNIT"
    },

}
const Points = () => {
    const [paymentOptions, setPaymentOptions] = useState(defaultOptions)
    const [activeOption, setActiveOption] = useState("fortyPoints")
    const dispatch = useDispatch();

    const profile = useSelector(({ profileSlice: { profile } }) => profile)

    const onRadioCheck = (name, checked) => {
        setPaymentOptions({ ...defaultOptions, [name]: { ...defaultOptions[name], check: checked } })
        setActiveOption(name)
    }

    useEffect(() => {
        setPaymentOptions({ ...defaultOptions, fortyPoints: { ...defaultOptions.fortyPoints, check: true } })
    }, [])

    const onPaypalSuccess = (details, data) => {
        dispatch(payPalSuccessAC({
            amount: details?.purchase_units?.[0]?.amount?.value,
            currency: details?.purchase_units?.[0]?.amount?.currency_code,
            creditType: paymentOptions?.[activeOption]?.type,
            purchaseId: details?.purchase_units?.[0]?.payments?.captures?.[0]?.id,
            quantity: paymentOptions?.[activeOption]?.quantity,
            paymentChannel: "PAYPAL",
            topUpType: "CREDIT_UNIT_PURCHASE"
        }))
    }
    const onPaypalError = (error) => {
        console.log("🚀 ~ file: Points.jsx ~ line 45 ~ onPaypalError ~ error", error)
    }

    const onStripeInitiate = (paymentMethod) =>
        dispatch(stripePaymentAC({
            amount: paymentOptions?.[activeOption]?.amount,
            quantity: paymentOptions?.[activeOption]?.quantity,
            currency: "USD",
            creditType: paymentOptions?.[activeOption]?.type,
            purchaseId: paymentMethod.id,
            paymentChannel: "STRIPE",
            topUpType: "CREDIT_UNIT_PURCHASE"
        }))
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout points-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <UserHeading message="Manage Applicants" subMessage={`Points Balance: ${profile?.availableUnits}pts`} />
                        <div className="col-md-10 points-content">
                            <div className="heading">
                                <p className="text-center">Point Packages</p>
                                <p className="text-center">Jobincast Points are used to download complete applicant complete resume which contains their contact information</p>
                            </div>
                            <div className="cards-section">
                                <div onClick={() => onRadioCheck("fortyPoints", true)} className="card image40">
                                    <div className="card-content">
                                        <p className="40">10points for $10</p>
                                        <input name="fortyPoints" checked={paymentOptions?.fortyPoints?.check} type="radio" />
                                    </div>
                                </div>
                                <div onClick={() => onRadioCheck("eightyPoints", true)} className="card image80">
                                    <div className="card-content">
                                        <p className="80">150points for $100</p>
                                        <input name="eightyPoints" checked={paymentOptions?.eightyPoints?.check} type="radio" />
                                    </div>
                                </div>
                                <div onClick={() => onRadioCheck("hundredPoints", true)} className="card image40">
                                    <div className="card-content">
                                        <p className="200">Unlimited for $1,000</p>
                                        <input name="hundredPoints" checked={paymentOptions?.hundredPoints?.check} type="radio" />
                                    </div>
                                </div>
                            </div>
                            <div className="stripe">
                                <p>Pay with card</p>
                                <Stripe onSuccess={onStripeInitiate} paymentOptions={paymentOptions?.[activeOption]} />
                            </div>
                            <div className="or-divider">
                                OR
                            </div>
                            <div className="button-paypal">
                                <PayPalButton
                                    amount={paymentOptions?.[activeOption]?.amount}
                                    onSuccess={(details, data) => onPaypalSuccess(details, data)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default Points
