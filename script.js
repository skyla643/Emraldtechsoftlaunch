// Replace the following with your own Stripe public key
const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');

// Handle form submission
const form = document.getElementById('payment-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { paymentMethod, error } = await stripe.createPaymentMethod(
    'card', document.getElementById('card-element')
  );

  if (error) {
    // Display error message
    const errorElement = document.getElementById('card-errors');
    errorElement.textContent = error.message;
  } else {
    // Send
