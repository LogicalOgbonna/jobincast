import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

import useResponsiveFontSize from "./fonts";
import { setLoading } from "../../store/profile/reducer";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      },
      required: true
    }),
    [fontSize]
  );

  return options;
};
const SplitForm = ({ paymentOptions, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const dispatch = useDispatch()

  const loading = useSelector(({ profileSlice: { stripeLoading } }) => stripeLoading)

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    dispatch(setLoading({ type: "stripeLoading", value: true, }))
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    if (error) {
      notification.error({
        message: error.code,
        description: error.message,
      })
      return dispatch(setLoading({ type: "stripeLoading", value: false, }))
    }
    onSuccess(paymentMethod)
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="row align-items-center">
        <div className="col-md-2">
          Card Name
        </div>
        <div className="col-md-10 care_name">
          <input placeholder="Card Name" type="text" name="" id="" />
        </div>
        <div className="col-md-2">
          Card number
        </div>
        <div className="col-md-10">
          <CardNumberElement
            options={options}
          />
        </div>
        <div className="col-md-2">
          Expiry date
        </div>
        <div className="col-md-4">
          <CardExpiryElement
            options={options}
          />
        </div>
        <div className="col-md-1">
          CVV
        </div>
        <div className="col-md-5">
          <CardCvcElement
            options={options}
          />
        </div>
      </div>
      <div className="button-section">
        <button type="submit" disabled={!stripe || loading}>
          {loading ? "Loading..." : `Buy ${paymentOptions?.quantity} Points`}
        </button>
      </div>
    </form>
  );
};

export default SplitForm;
