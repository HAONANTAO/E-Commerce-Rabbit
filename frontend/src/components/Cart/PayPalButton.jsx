/*
 * @Date: 2025-05-01 21:57:00
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-01 22:05:37
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Cart/PaypalButton.jsx
 */
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "ASW9pIYxcb7lyKwMLD2IDyu6jAjm6FN243w2xcNcvdaloTrCGht4VWIXJwS56lKT5HqxfSBhBu1Brwah",
      }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
