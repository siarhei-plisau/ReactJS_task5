import React from 'react';
import styles from './Main.module.scss';

function Main(props) {
    return (
      <main className={styles.main}>
        {props.children}
      </main>
  );
}

export default Main;
