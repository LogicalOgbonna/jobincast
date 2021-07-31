import React, { useRef, useEffect } from "react";

export default function Paypal({ paymentOptions, onSuccess, onError }) {
    const paypal = useRef();

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: `Purchase ${paymentOptions?.quantity} JobInCast Points`,
                                amount: {
                                    currency_code: "USD",
                                    value: paymentOptions?.amount,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    onSuccess(order)
                },
                onError: (err) => {
                    onError(err);
                },
            })
            .render(paypal.current);
    }, [paymentOptions?.amount, paymentOptions?.quantity]);

    return (
        <div className="paypal" ref={paypal}></div>
    );
}