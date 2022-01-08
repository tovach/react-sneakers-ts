import React, {FC, useState} from 'react';
import {ReactComponent as SearchIcon} from "./img/search-icon.svg";

import styles from './SearchForm.module.scss';

const SearchForm: FC = () => {
    const [value, setValue] = useState('');
    const setSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <form className={styles.form}>
            <input className={styles.input} onChange={setSearch} type="text" placeholder={'Поиск...'} value={value}/>
            <span className={styles.icon}><SearchIcon/></span>
        </form>
    );
};

export default SearchForm;