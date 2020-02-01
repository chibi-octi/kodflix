import React from 'react';
import './Menu.css';

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = { menuIsVisible: false}
    }
    render() {
        return (
            <div>
                <MenuMobile />
                <div className='menu'>
                    <div className='menu-link'>Home</div>
                    <div className='menu-link'>Projects</div>
                    <div className='menu-link'>About</div>
                    <div className='menu-link'>Contact</div>
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