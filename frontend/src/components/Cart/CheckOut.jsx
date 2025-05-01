/*
 * @Date: 2025-05-01 20:44:23
 * @LastEditors: 陶浩南 taoaaron5@gmail.com
 * @LastEditTime: 2025-05-01 21:42:52
 * @FilePath: /E-Commerce-Rabbit/frontend/src/components/Cart/CheckOut.jsx
 */
import React, { useState } from "react";
import { checkoutCart as cart } from "@/utils/mockdb";
import { useNavigate } from "react-router-dom";
const CheckOut = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  // 账单的地址
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: " ",
  });
  return (
    <div className="grid grid-cols-1 gap-2 px-6 py-10 mx-auto max-w-7xl tracking-tighter lg:grid-cols-2">
      {/* left 左边地址 */}
      <div className="p-6 bg-white rounded-lg">
        <h2 className="mb-6 text-2xl uppercase">CheckOut</h2>
        {/* 地址表格 */}
        <form>
          <h3 className="mb-4 text-lg">Contact Details</h3>

          {/* email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            {/* 给定的邮箱是登录邮箱 不可以动！ */}
            <input
              type="text"
              className="p-2 w-full rounded border cursor-not-allowed"
              value="user@example.com"
              disabled
            />
          </div>

          {/* delivery name */}
          <h3 className="mb-4 text-lg">Delivery Information</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                require
                className="p-2 w-full rounded border"
              />
            </div>

            {/* last name */}
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                require
                className="p-2 w-full rounded border"
              />
            </div>
          </div>

          {/*address  */}
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              require
              className="p-2 w-full rounded border"
            />
          </div>

          {/* specific address */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                require
                className="p-2 w-full rounded border"
              />
            </div>

            {/* postal code */}
            <div>
              <label className="block text-gray-700">Post Code</label>
              <input
                type="text"
                name="postalCode"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                require
                className="p-2 w-full rounded border"
              />
            </div>
          </div>

          {/* country */}
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              require
              className="p-2 w-full rounded border"
            />
          </div>

          {/* phone */}
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              require
              className="p-2 w-full rounded border"
            />
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                className="py-3 w-full text-white bg-black rounded"
                type="submit">
                Continue to CheckOut
              </button>
            ) : (
              <div>
                <h3 className="mb-4 text-lg">Pay with PayPal</h3>
                {/* Paypal component when click */}
              </div>
            )}
          </div>
        </form>
      </div>

      {/* right右边结账 */}
    </div>
  );
};

export default CheckOut;
