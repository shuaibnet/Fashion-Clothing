import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const PublishableKey = 'pk_test_51HsY0ILVvigtMnMJgjx7emVkI52coJ1GkVzAoBsMzauOFpNRPVo82TwCNoWJTjjqQZIFFsKYwfj1DggkNkpJPpbn00EZuCKsRm'

    const onToken = token => {
        console.log();
        alert('Payement Successful');
    }


    return (
        <StripeCheckout
            label='Pay Now'
            name=' Ship Timely'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/RsR.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={PublishableKey}
        />
    );
};

export default StripeCheckoutButton;
