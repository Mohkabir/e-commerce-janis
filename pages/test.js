// import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";
// // import "./App.css";

// const Test = () => {
//   const publicKey = "pk_test_d3601849b9917323791080dbce93f51362eee0fa";
//   const amount = 1000000;
//   const [email, setEmail] = useState("kabir@gmail.com");
//   const [name, setName] = useState("kabir");
//   const [phone, setPhone] = useState("08135123864");

//   const resetForm = () => {
//     setEmail("");
//     setName("");
//     setPhone("");
//   };

//   const componentProps = {
//     email,
//     amount,
//     metadata: {
//       name,
//       phone,
//     },
//     publicKey,
//     text: "Buy Now",
//     onSuccess: ({ reference }) => {
//       alert(
//         `Your purchase was successful! Transaction reference: ${reference}`
//       );
//       resetForm();
//     },
//     onClose: () => alert("Wait! You need this oil, don't go!!!!"),
//   };

//   return (
//     <div className="App">
//       <PaystackButton className="paystack-button" {...componentProps} />
//     </div>
//   );
// };

// export default Test;
