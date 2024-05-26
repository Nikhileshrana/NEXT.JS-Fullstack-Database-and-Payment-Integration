import Script from "next/script";
import axios from "axios";

export default function Payment() {
  const inititePayment = async () => {
    try {
      // Send a POST request to the backend to create a payment order
      const response = await axios.post("/api/pay", { amount: "5", currency: "INR" });

      // Extract order details from the response
      const orderDetails = response.data;

      // Construct options for Razorpay payment
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderDetails.amount,
        currency: "INR",
        name: "ASTRODUDE",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderDetails.id,
        callback_url: "/api/payments/status",
        prefill: {
          name: "Nikhilesh Rana",
          email: "realnikhileshrana@gmail.com",
          contact: "9599471990",
        },
        notes: {
          address: "Rajasthan, India",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Open Razorpay payment modal with the provided options
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      // Handle errors
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
      <button onClick={inititePayment}>Pay ₹5 Now</button>
    </>
  );
}
