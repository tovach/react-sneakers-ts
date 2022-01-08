import React, {FC} from 'react';
import {IProduct} from "../../interfaces/interfaces";

import styles from './ProductCard.module.scss'
import {ReactComponent as LikeIcon} from "./img/like-icon.svg";
import {ReactComponent as PlusIcon} from "./img/plus-icon.svg";


interface ProductCardProps {
    item: IProduct
}

const ProductCard: FC<ProductCardProps> = ({item}) => {
    return (
        <article className={styles.item}>
            <header className={styles.header}>
                <button className={styles.button}>
                    <LikeIcon/>
                </button>
            </header>
            <main className={styles.main}>
                <img className={styles.img} src={item.img} alt={item.title}/>
                <h3 className={styles.title}>{item.title}</h3>
            </main>
            <footer className={styles.footer}>
                <div className={styles.price}>
                    <span>Цена:</span>
                    <h5>{item.price} руб</h5>
                </div>
                <button className={styles.button}>
                    <PlusIcon/>
                </button>
            </footer>
        </article>
    );
};

export default ProductCard;