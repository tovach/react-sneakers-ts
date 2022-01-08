import React, {FC, useState} from 'react';
import styles from './Cart.module.scss'
import {ReactComponent as CartIcon} from "./img/cart-icon.svg";
import {IProduct} from "../../interfaces/interfaces";

interface CartProps {
    items: IProduct[],
}

const Cart: FC<CartProps> = ({items,}) => {
    const [drawwer, setDrawwer] = useState(false);
    return (
        <div>

            <button onClick={() => setDrawwer(!drawwer)} className={styles.button}>
                    <span>
                        <CartIcon/>
                    </span>
            </button>

            {drawwer &&

                <div className={styles.drawwer} onClick={(e) => {
                    setDrawwer(!drawwer)
                }}>
                    <div className={styles.body} onClick={(e) => e.stopPropagation()}>
                        <h3 className={styles.heading}>Корзина</h3>

                        <div>
                            {
                                items.length ?
                                    <ul>
                                        {
                                            items.map(el =>
                                                <li key={el.id}>
                                                    <p>{el.title}</p>
                                                    <p>{el.price}</p>
                                                </li>
                                            )
                                        }
                                    </ul>
                                    :
                                    <h4>Корзина пуста</h4>

                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Cart;