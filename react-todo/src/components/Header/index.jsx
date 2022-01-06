import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Link to='/' className={styles.headerLinks}>
        Main Page
      </Link>
      <Link to='/todos' className={styles.headerLinks}>
        Todos List
      </Link>
      <Link to='/gallery' className={styles.headerLinks}>
        Gallery
      </Link>
    </div>
  );
};

export default Header;