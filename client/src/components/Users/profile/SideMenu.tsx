import React from 'react'; // we need this to make JSX compile
import {SideMenuOption} from "./SideMenuOption";
import './profile.css';

export const SideMenu = () =>
    <div className='SideMenu'>
        <SideMenuOption text="firstOption"/>
        <SideMenuOption text="secondOption"/>
        <SideMenuOption text="ThirdOption"/>
        <SideMenuOption text="ForthOption"/>
        <SideMenuOption text="FifthOption"/>
    </div>

