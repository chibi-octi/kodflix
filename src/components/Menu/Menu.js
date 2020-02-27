import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Header from '../Header/Header';

export default class Menu extends React.Component {
        
    render() {
        return (
            <div className="menu-header">
                <div className="menu-header">
                    <Header />
                    <MenuMobile />
                    <div className='menu'>
                        <Link to='/' className='menu-link' >Home</Link>
                        <Link to='/jhbkhjb' className='menu-link'>Projects</Link>
                        <Link to='/' className='menu-link'>About</Link>
                        <Link to='/' className='menu-link'>Contact</Link>
                    </div>
                </div>
            </div>
        );
    }
} 

function MenuMobile() {
    return (
        <div className='menuMobile'>Click here</div>
    )
}