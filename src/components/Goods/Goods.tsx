import React, {FC} from 'react';
import styles from './Goods.module.scss';
import SearchForm from "../SearchForm/SearchForm";
import GoodsList from "../GoodsList/GoodsList";
import items from "../../mockData/products";

const Goods: FC = () => {



    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <h3 className={styles.heading}>Все кроссовки</h3>
                <SearchForm/>
            </div>

            <div className={styles.main}>
                <GoodsList goods={items}/>
            </div>
        </section>
    );
};

export default Goods;