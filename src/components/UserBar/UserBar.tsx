import React, {FC} from 'react';

import styles from './UserBar.module.scss';

import {ReactComponent as LikeIcon} from "./img/like-icon.svg";
import {ReactComponent as ProfileIcon} from "./img/profile-icon.svg";
import Cart from "../Cart/Cart";


const UserBar: FC = () => {
    return (
        <div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    {/*<Cart items={cartItems} />*/}
                </li>
                <li className={styles.item}>
                    <a href="/"><span><LikeIcon/></span></a>
                </li>
                <li className={styles.item}>
                    <a href="/"><span><ProfileIcon/></span></a>
                </li>

            </ul>
        </div>
    );
};

export default UserBar;