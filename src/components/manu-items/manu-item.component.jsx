import React from 'react';

import './manu-item.style.scss';

const ManuItem = ({ title, imageUrl, size }) => (

    <div
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className={`${size} manu-item`}>
        <div className='content'>
            <h1 className='title'> {title}</h1>
            <span className='subtitle'>SHOP NOW</span>

        </div>
    </div>


);

export default ManuItem;