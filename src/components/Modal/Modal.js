import React, { useState, useEffect } from 'react';
import Calculator from '../Calculator';
import styles from './Modal.module.css';

const Modal = ({ open, close, ...props }) => {
  const [closeImage, setCloseImage] = useState('');
  const [saveImage, setSaveImage] = useState('');

  useEffect(() => {
    const fetchImg = async () => {
      const url1 = await fetch('./close-icon.png');
      const url2 = await fetch('./save-icon.png');
      Promise.all([url1, url2]).then((res) => {
        setCloseImage(res[0].url);
        setSaveImage(res[1].url);
      });
    };
    fetchImg();
  }, []);

  const modalProps = {
    className: styles.modal,
    style: {
      display: !!open ? 'flex' : 'none',
    },
  };

  return (
    <div {...modalProps}>
      <div className={styles.modalContainer}>
        <Calculator />
        <div className={styles.options}>
          <div className={styles.closeBtn} onClick={() => close(false)}>
            <img className={styles.closeImg} src={closeImage} alt="close" />
          </div>
          <div className={styles.saveBtn}>
            <img className={styles.saveImg} src={saveImage} alt="close" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
