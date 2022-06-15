import React from 'react';
import styles from './Button.module.css';

const Button = ({ img, ...props }) => {
  return (
    <div className={styles.btn} {...props}>
      <img className={styles.img} src={img} alt="" />
    </div>
  );
};

export default Button;
