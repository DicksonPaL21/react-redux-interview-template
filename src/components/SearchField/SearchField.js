import React, { useState, useEffect } from 'react';
import styles from './SearchField.module.css';

const SearchField = () => {
  const [searchImage, setSearchImage] = useState('');
  useEffect(() => {
    const fetchImg = async () => {
      await fetch('./search-icon.png').then((res) => setSearchImage(res.url));
    };
    fetchImg();
  }, []);

  return (
    <div className={styles.SearchField}>
      <img className={styles.searchImage} src={searchImage} alt="Search" />
      <input className={styles.searchInput} type="text" />
    </div>
  );
};

export default SearchField;
