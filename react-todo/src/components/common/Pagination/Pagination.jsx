import React, { useMemo } from 'react';

import styles from './Pagination.module.css';

const Pagination = ({ page, maxPages, onChangePage}) => {

  const pages = useMemo(() => {
    if(maxPages < 5) {
      return Array.from({length: maxPages}).map((_, index) => index + 1);
    }

    const lastPages = maxPages - page;

    if (lastPages < 3) {
      return Array.from({length: 5}).map((_, index) => maxPages - 4 + index);
    }

    if (page < 3) {
      return Array.from({ length: 5 }).map((_, index) => index + 1);
    }

    return Array.from({ length: 5 }).map((_, index) => page + index - 2);
  }, [page, maxPages])

  const handleStartClick = () => {
    onChangePage(1);
  }

  const handleEndClick = () => {
    onChangePage(maxPages);
  }

  if(maxPages <= 1) return null;


  return (
    <div className={styles.paginationContainer}>
      <div className={styles.itemWrapper} onClick={handleStartClick}>
        Start
      </div>
      {pages.map(item => (
        <div 
          className={page === item ? styles.activeItemWrapper : styles.itemWrapper}
          onClick={() => onChangePage(item)}
          key={item}
        >
          {item}
        </div>
      ))}
      <div className={styles.itemWrapper} onClick={handleEndClick}>
        End
      </div>
    </div>
  );
};


export default Pagination;