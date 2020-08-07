import React from 'react';

import './manu-item.style.scss';

const ManuItem = ({ title, imageUrl, size }) => (

    <div className={`${size} manu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />

        <div className='content'>
            <h1 className='title'> {title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>

        </div>
    </div>


);

export default ManuItem;