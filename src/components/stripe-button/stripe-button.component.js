import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // 50$ -> 5000, 25.50% -> 2550; pass value in cents
    const publishableKey = 'pk_test_3ziEdtNVaQUuzucc7uqeS1uT';

    const onToken = token => {
        console.log('token', token)
        alert('Payment made.')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='React eCommerce'
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
}

export default StripeCheckoutButton;
