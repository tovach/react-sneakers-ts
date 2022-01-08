import React from 'react';
import styles from './App.module.scss'
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import UserBar from "./components/UserBar/UserBar";
import Main from "./components/Main/Main";
import Goods from "./components/Goods/Goods";

function App() {
    return (
        <div className={styles.app}>
            <Header>
                <Logo/>
                <UserBar/>
            </Header>
            <Main>
                <Goods/>
            </Main>
        </div>
    );
}

export default App;
