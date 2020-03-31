import React from 'react';

const UsersInfo =( {ITEMS, ITEMS_DESCRIPTION, TIME_PURCHASED, DATE_PURCHASED, LOCATION, AMOUNT_SPENT})=> {
    return (
        <div>
            <div className='output-info'>
                <h1>USER DAILY RESULT</h1>
                <p>ITEMS:{ITEMS}</p>
                <p>ITEMS_DESCRIPTION: {ITEMS_DESCRIPTION}</p>
                <p>TIME_PURCHASED: {TIME_PURCHASED}</p>
                <p>DATE_PURCHASED: {DATE_PURCHASED}</p>
                <p>LOCATION: {LOCATION}</p>
                <p>AMOUNT_SPENT: {AMOUNT_SPENT}</p>
            </div>
        </div>
    );
}

export default UsersInfo;