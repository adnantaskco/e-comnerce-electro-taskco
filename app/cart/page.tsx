"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
    totalItems,
  } = useCart();

  const router = useRouter();
  const [location, setLocation] = useState("dhaka");

  const deliveryCharge =
    totalItems > 0 ? (location === "dhaka" ? 100 : 180) : 0;

  const grandTotal = totalPrice + deliveryCharge;

  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-8 lg:px-16 py-6 min-h-screen">

      {/* TITLE */}
      <h1 className="text-2xl text-text-primary md:text-4xl font-bold text-center mb-8">
        Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT SIDE */}
        <div className="w-full lg:flex-1 bg-background rounded-2xl border shadow-sm">

          {/* HEADER */}
          <div className="p-5 border-b">
            <h2 className="text-lg text-text-primary font-semibold">Cart Items</h2>
            <p className="text-sm text-text-primary text-ring">
              {totalItems} items in your cart
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="p-10 text-center text-ring">
              🛒 Your cart is empty
            </div>
          ) : (
            <>
              {/* TABLE HEADER (desktop) */}
              <div className="hidden md:grid grid-cols-12 text-sm font-semibold text-ring border-b px-5 py-3">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Qty</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {/* ITEMS */}
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 items-center px-5 py-5 border-b hover:bg-ring-20 transition"
                >

                  {/* PRODUCT */}
                  <div className="col-span-12 md:col-span-6 flex gap-4 items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-lg border"
                    />

                    <div>
                      <h3 className="font-medium text-text-primary text-sm md:text-base">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive text-sm mt-1 flex items-center gap-1"
                      >
                        <FaTrash size={12} /> Remove
                      </button>
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="hidden md:block col-span-2 text-center text-ring">
                    ৳{item.price.toLocaleString()}
                  </div>

                  {/* QTY */}
                  <div className="col-span-6 md:col-span-2 flex justify-start md:justify-center mt-3 md:mt-0">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 hover:bg-ring/50 active:scale-95 transition "
                      >
                        <FaMinus size={12} />
                      </button>

                      <span className="px-4 text-sm">{item.qty}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 hover:bg-ring/50 active:scale-95 transition "
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* TOTAL */}
                  <div className="col-span-6 md:col-span-2 text-right text-text-primary font-semibold mt-3 md:mt-0">
                    ৳{(item.price * item.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* RIGHT SIDE - STICKY SUMMARY */}
        <div className="w-full lg:w-[380px] lg:sticky lg:top-20 h-fit">

          <div className="bg-background border rounded-2xl shadow-md text-text-primary p-6">

            <h2 className="text-lg text-text-primary font-semibold mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between text-text-primary">
                <span>Total Items</span>
                <span className="font-medium">{totalItems}</span>
              </div>

              <div className="flex justify-between text-text-primary">
                <span>Subtotal</span>
                <span className="font-medium">
                  ৳{totalPrice.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center text-text-primary">
                <span>Delivery Area</span>

                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border rounded-lg px-2 py-1 text-text-primary text-sm"
                >
                  <option value="dhaka">Inside Dhaka</option>
                  <option value="outside">Outside Dhaka</option>
                </select>
              </div>

              <div className="flex justify-between text-text-primary">
                <span>Delivery</span>
                <span className="font-medium">
                  ৳{deliveryCharge}
                </span>
              </div>

              <div className="border-t pt-3 flex justify-between text-lg font-bold text-text-primary">
                <span>Total</span>
                <span>৳{grandTotal.toLocaleString()}</span>
              </div>

              <button
                onClick={() => router.push("/checkout")}
                disabled={cart.length === 0}
                className="w-full mt-4 bg-primary text-text-secondary py-3 rounded-xl font-medium hover:bg-gray-900 disabled:opacity-40 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* EXTRA INFO BOX */}
          <div className="mt-4 text-xs text-ring text-center">
            Secure checkout • Fast delivery • Easy returns
          </div>
        </div>
      </div>
    </div>
  );
}