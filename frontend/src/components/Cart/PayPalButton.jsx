/*
 * @Date: 2025-05-01 21:57:00
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-02 20:54:48
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Cart/PaypalButton.jsx
 */
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// - amount : 支付金额
// - onSuccess : 支付成功的回调函数
// - onError : 支付错误的回调函数
const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
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
          // - 这是 PayPal 的支付捕获操作 当用户在 PayPal 完成支付后，需要"捕获"这笔支付来确认交易
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
