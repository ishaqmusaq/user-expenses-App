import React from 'react';
import {Link} from 'react-router-dom';

const UsersInfo =( {ITEMS, id,ITEMS_DESCRIPTION, TIME_PURCHASED, DATE_PURCHASED, LOCATION, AMOUNT_SPENT,removeUser})=> {
    const handleClick=()=>{
        removeUser(id)
    }
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
                <button onClick={handleClick}>DLELTE_USER</button><br/>
                <Link to={`/edit/${id}`}>EDIT USER</Link>
            </div>
        </div>
    );
}

export default UsersInfo;