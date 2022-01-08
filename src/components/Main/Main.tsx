import React, {FC} from 'react';
import styles from './Main.module.scss'

const Main: FC = ({children}) => {
    return (
        <main className={styles.wrapper}>
            {children}
        </main>
    );
};

export default Main;