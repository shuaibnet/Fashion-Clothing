import React from 'react';

import './checkout-item.stules.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-ebutton'>&#10005;</div>
    </div>
)

export default CheckoutItem;