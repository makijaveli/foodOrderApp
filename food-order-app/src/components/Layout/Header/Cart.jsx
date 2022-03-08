import React from 'react';
import CartIcon from "../Cart/CariIcon";
import styles from './CartButton.module.css';

const Cart = () => {
    return (
        <button className={styles.button}>
           <span className={styles.icon}>
               <CartIcon/>
           </span>
            <span>Your cart</span>
            <span className={styles.badge}>3</span>
        </button>
    );
};

export default Cart;