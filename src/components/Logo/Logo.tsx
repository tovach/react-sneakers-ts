import React, {FC} from 'react';
import styles from './Logo.module.scss'
import {ReactComponent as LogoIcon} from "./img/logo-icon.svg";

const Logo: FC = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.img}>
                <LogoIcon/>
            </span>
            <div>
                <h3 className={styles.heading}>REACT SNEAKERS</h3>
                <h5 className={styles.subHeading}>Магазин лучших кроссовок</h5>
            </div>
        </div>
    );
};

export default Logo;