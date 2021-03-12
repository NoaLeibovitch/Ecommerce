import React from 'react'; // we need this to make JSX compile
import './profile.css';

type Props = {
    text: string,
}

export const SideMenuOption = (props:Props) =>
    <div className='SideMenuOption'>
        {props.text}
    </div>

