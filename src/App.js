import React, { useState, useEffect } from 'react';
import { Button, Modal, SearchField } from './components';
import './App.css';

function App() {
  const [isToggle, setIsToggle] = useState(false);
  const [producImage, setProducImage] = useState('');
  const [calcImage, setCalcImage] = useState('');
  const [bannerImage, setBannerImage] = useState('');

  useEffect(() => {
    const fetchImg = async () => {
      const url1 = await fetch('./product-image.png');
      const url2 = await fetch('./calculator-icon.png');
      const url3 = await fetch('./banner.png');
      Promise.all([url1, url2, url3]).then((res) => {
        setProducImage(res[0].url);
        setCalcImage(res[1].url);
        setBannerImage(res[2].url);
      });
    };
    fetchImg();
  }, []);

  const product = {
    img: producImage,
    label: 'Apparels',
    title: 'Ladies shoes of this season',
    ratings: 4.9,
    price: 1400,
  };

  const buttonProps = {
    img: calcImage,
    onClick: () => setIsToggle(true),
  };

  const modalProps = {
    open: isToggle,
    close: setIsToggle,
  };

  return (
    <div className="App">
      <div className="container">
        <SearchField />
        <img className="banner" src={bannerImage} alt="banner" />
        <section className="product">
          <h5>Featured products of 2022</h5>
          <div className="products-wrap">
            {[
              product,
              product,
              product,
              product,
              product,
              product,
              product,
              product,
              product,
            ].map((it, idx) => (
              <div key={idx} className="product">
                <img src={it.img} />
                <label>{it.label}</label>
                <p>{it.title}</p>
                <div className="price-wrap">
                  <p>{it.ratings}</p>
                  <p>${it.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Button {...buttonProps} />
        <Modal {...modalProps} />
      </div>
    </div>
  );
}

export default App;
