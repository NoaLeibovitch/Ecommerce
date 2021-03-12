import React from 'react'; // we need this to make JSX compile
import './profile.css';
import {EditUserForm} from "../forms/EditUserForm";


export const EditUser = () =>
    <div className='EditUser'>
        <EditUserForm/>
    </div>

