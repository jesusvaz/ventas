import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_O0D001yZagVtX98pYtPdTStQ00GGLgg0zZ';

  const onToken = token => {
    console.log(token);
    //aqui seria guardar la info en el backend
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Paga Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;