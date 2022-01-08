import React, {FC} from 'react';
import {IProduct} from "../../interfaces/interfaces";
import ProductCard from "../ProductCard/ProductCard";

import styles from './GoodsList.module.scss'

interface GoodsListProps {
    goods: IProduct[]
}

const GoodsList: FC<GoodsListProps> = ({goods}) => {
    return (
        <section>
            <ul className={styles.list}>
                {goods.map(el =>
                    <li className={styles.item} key={el.id}><ProductCard item={el}/></li>
                )}
            </ul>
        </section>
    );
};

export default GoodsList;