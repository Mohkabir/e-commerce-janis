import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { convertString } from "../components/ProductItem";
import productContext from "../context/productContext";
import { usePaystackPayment } from "react-paystack";

const Checkout = () => {
  const initialForm = {
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    phone: "",
  };
  const [formData, setformData] = useState(initialForm);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [cartView, setCartView] = useState(true);

  const { cart } = useContext(productContext);

  const cleanPrice = (price) => {
    if (price) {
      return Number(price.split(".")[0].split(",").join(""));
    }
  };

  const total = () => {
    if (cart.length > 1) {
      let calc = 0;
      cart.map((a) => {
        calc += cleanPrice(a.selectedPrice);
      });
      var res = String(calc)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return res;
    } else {
      return cart[0]?.selectedPrice;
    }
  };

  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/");
    }
  }, []);

  const onSuccess = () => {
    router.push("/success");
    setformData(initialForm);
  };

  const checkout = (e) => {
    e.preventDefault();
    if (paymentMethod === "COD") {
      router.push("/success");
    } else {
      initializePayment(onSuccess, onClose);
    }
  };

  const [amount, setAmount] = useState(
    cart.length && total().replace(",", "").replace(".", "")
  );

  const config = {
    email: formData.email,
    amount: cart.length > 1 ? Number(String(amount + "00")) : amount,
    publicKey: `${process.env.PAYSTACK_KEY}`,
  };

  const onClose = () => {
    // console.log(amount, "total()");
  };

  const initializePayment = usePaystackPayment(config);
  return (
    <>
      <section>
        <form
          onSubmit={checkout}
          className="checkout flex flex-col-reverse py-5 max-w-lg w-[90%] mx-auto lg:flex-row lg:max-w-6xl lg:justify-between lg:gap-10 lg:items-start"
        >
          <div className="lg:w-[60%] lg:border-[#e6e6e6]  lg:border lg:border-y-0  lg:border-r-[#e8e8e8] lg:border-l-0 lg:pr-10">
            <div className="flex flex-col gap-5 mt-5">
              <div>
                <h2 className="text-md">Contact Information</h2>
              </div>
              <div className="input">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input gap-5 flex flex-col md:flex-row">
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="firstName"
                  value={formData.firstName}
                  placeholder="Firstname"
                  required
                />

                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Lastname"
                  required
                />
              </div>

              <div className="input">
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="Address"
                  value={formData.address}
                  name="address"
                  required
                />
              </div>
              <div className="input gap-5 flex flex-col md:flex-row">
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="City"
                  value={formData.city}
                  name="city"
                />
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="State"
                  value={formData.state}
                  name="state"
                  required
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="Phone"
                  value={formData.phone}
                  name="phone"
                  required
                />
              </div>
            </div>
            <div>
              <div className="my-4">
                <h2 className="text-md">Payment Method</h2>
              </div>
              <div className="md:flex ">
                <div
                  className="flex "
                  onClick={() => setPaymentMethod("COD")}
                  style={{ cursor: "pointer" }}
                >
                  <input
                    className="mr-2"
                    type="radio"
                    value="COD"
                    name="payment"
                    checked={paymentMethod === "COD"}
                  />
                  <p> Cash on delivery</p>
                </div>
                <div
                  className="flex md:mr-8"
                  onClick={() => setPaymentMethod("Paystack")}
                  style={{ cursor: "pointer" }}
                >
                  <input
                    className="mr-2"
                    type="radio"
                    value="Paystack"
                    name="payment"
                    checked={paymentMethod === "Paystack"}
                  />
                  <p>Pay with Card</p>
                </div>
              </div>
            </div>
            <div className="flex mb-10 md:my-5 font-medium justify-center text-center flex-col gap-5 ">
              <button type="submit" className="paystack-button">
                Submit
              </button>

              <Link href="/all-product">
                <button className="back">
                  <span className="text-[#0479b8]"></span> Back to product
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:w-[40%] lg:flex-col-reverse">
            <div className="total" onClick={() => setCartView(!cartView)}>
              <div className="hidden px-3 lg:flex lg:flex-col lg:gap-4 justify-between py-5 border bg-[#fafafa] border-[#e6e6e6] lg:bg-inherit lg:border lg:border-x-0 lg:border-y-[#e8e8e8] lg:py-7">
                <div className="flex justify-between  text-sm">
                  <p className="text-sm">SubTotal</p>
                  <h3 className="mr-3 text-right text-gray-400">
                    <b className="text-black ">₦{total() || 0}</b>
                  </h3>
                </div>
                <div className="flex text-md justify-between">
                  <p className="text-sm">Shipping</p>
                  <p>Calculated at next step</p>
                </div>
              </div>

              <div className="flex justify-between py-5 border bg-[#fafafa] border-[#e6e6e6] px-3 lg:bg-inherit lg:border-0 lg:py-7">
                <p className="flex items-center gap-2">
                  <span>Total</span>{" "}
                  {!cartView ? <AiOutlineArrowRight /> : <AiOutlineArrowDown />}
                </p>

                <h3 className="mr-3 text-right text-gray-400">
                  <span>NGN </span>
                  <b className="text-black lg:text-3xl">₦{total() || 0}</b>
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              {cart?.map((cart) => (
                <div
                  className={`${
                    !cartView && "hidden"
                  } w-[90%] mx-auto py-6 flex items-center justify-between font-semibold lg:flex`}
                  key={cart.id}
                >
                  <div className="flex relative items-center gap-3 justify-between ">
                    <div className="relative inline-block">
                      <Image
                        className=" w-[60px] rounded-md border border-[#0000001a]"
                        src={cart.selectedImg}
                        alt="pro-imgage"
                        width={100}
                        height={100}
                      />
                      <span className="absolute w-[100px] text-sm -top-4 -right-7 bg-[#808080] px-1 rounded-full h-5 leading-5 text-white right-0">
                        {cart.selectedPlan}
                      </span>
                    </div>
                    <p className=" text-sm"> {cart.title}</p>
                  </div>
                  <div className="text-sm">
                    <p>{`₦${cart.selectedPrice}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Checkout;
