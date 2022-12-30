import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}){
	let stripePromise = null

	const getStripe = () => {
		if(!stripePromise) {
			stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
		}
		return stripePromise
	}

	console.log(lineItems)

	const stripe = await getStripe()

	await stripe.redirectToCheckout({
		mode: 'payment',
		lineItems,
		successUrl: `${window.location.origin}`,
		cancelUrl: window.location.origin
	})

}
// ?session_id={CHECKOUT_SESSION_ID}