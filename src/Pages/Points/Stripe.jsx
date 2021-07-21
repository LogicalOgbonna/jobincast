import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import axios from "axios";

import useResponsiveFontSize from "./fonts";
import { setLoading } from "../../store/profile/reducer";
import { useDispatch, useSelector } from "react-redux";

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
      }
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
    onSuccess(paymentMethod, error)
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        Card Name
        <div className="care_name">
          <input placeholder="Card Name" type="text" name="" id="" />
        </div>
      </label>
      <label className="label">
        Card number
        <CardNumberElement
          options={options}
        />
      </label>
      <label className="label">
        Expiry date
        <CardExpiryElement
          options={options}
        />
      </label>
      <label className="label">
        CVC
        <CardCvcElement
          options={options}
        />
      </label>
      <div className="button-section">
        <button type="submit" disabled={!stripe || loading}>
          {loading ? "Loading..." : `Buy ${paymentOptions?.quantity} Points`}
        </button>
      </div>
    </form>
  );
};

export default SplitForm;
