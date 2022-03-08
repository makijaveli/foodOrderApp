import React, {Fragment} from 'react';

import mealsImage from '../../../assets/meals.jpg';
import style from './Header.module.css'
import Cart from "./Cart";

const Header = () => {
    return <Fragment>
        <header className={style.header}>
            <h1>Meals project</h1>
            <Cart />
        </header>
        <div className={style['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
    </Fragment>
};

export default Header;