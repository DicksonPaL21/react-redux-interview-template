import React, { useState, useEffect } from 'react';
import styles from './Calculator.module.css';

// Helpers
import * as helpers from '../../helpers';

const Calculator = () => {
  const [input, setinput] = useState('');
  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0,
  });

  useEffect(() => {
    setCalc({
      sign: '',
      num: 0,
      res: 0,
    });
  }, []);

  const onClick = (e) => {
    const val = e.target.innerHTML;

    if (!isNaN(val)) {
      setinput((c) => c + val);
      helpers.numClickHandler(e, calc, setCalc);
    } else {
      switch (val) {
        case 'C': {
          setinput('');
          helpers.resetClickHandler(setCalc);
          return;
        }
        case '=': {
          helpers.equalsClickHandler(calc, setCalc);
          return;
        }
        case '%': {
          helpers.percentClickHandler(calc, setCalc);
          return;
        }
        case '.': {
          helpers.dotClickHandler(e, calc, setCalc);
          return;
        }
        case 'Del': {
          setinput((c) => c.slice(0, -1));
          helpers.deleteClickHandler(e, calc, setCalc);
          return;
        }
        default:
          setinput((c) => c + ' ' + val + ' ');
          helpers.signClickHandler(e, calc, setCalc);
          return;
      }
    }
  };

  const btnList = [
    {
      className: [styles.btn, styles.lightOrange].join(' '),
      label: 'C',
      onClick,
    },
    {
      className: [styles.btn, styles.lightOrange].join(' '),
      label: 'Del',
      onClick,
    },
    {
      className: [styles.btn, styles.lightOrange].join(' '),
      label: '%',
      onClick,
    },
    {
      className: [styles.btn, styles.lightOrange].join(' '),
      label: '/',
      onClick,
    },
    {
      className: [styles.btn, styles.light].join(' '),
      label: '7',
      onClick,
    },
    {
      className: [styles.btn, styles.light].join(' '),
      label: '8',
      onClick,
    },
    {
      className: [styles.btn, styles.light].join(' '),
      label: '9',
      onClick,
    },
    {
      className: [styles.btn, styles.lightOrange].join(' '),
      label: 'X',
      onClick,
    },
    {
      className: [styles.btn, styles.light].join(' '),
      label: '4',
      onClick,
    },
    {
      className: [styles.btn, styles.light].join(' '),
      label: '5',
      onClick,
    },
    {
      className: [styles.btn, styles.light].join(' '),
      label: '6',
      onClick,
    },
    {
      className: [styles.btn, styles.lightOrange].join(' '),
      label: '+',
      onClick,
    },
    {
      className: [styles.btn, styles.light].join(' '),
      label: '1',
      onClick,
    },
    {
      className: [styles.btn, styles.light].join(' '),
      label: '2',
      onClick,
    },
    {
      className: [styles.btn, styles.light].join(' '),
      label: '3',
      onClick,
    },
    {
      className: [styles.btn, styles.lightOrange].join(' '),
      label: '-',
      onClick,
    },
    {
      className: [styles.btn, styles.light, styles.fill2Col].join(' '),
      label: '0',
      onClick,
    },
    {
      className: [styles.btn, styles.light].join(' '),
      label: '.',
      onClick,
    },
    {
      className: [styles.btn, styles.orange].join(' '),
      label: '=',
      onClick,
    },
  ];

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <p className={styles.inputs}>{input || 0}</p>
        <p className={styles.result}>{calc.num ? calc.num : calc.res}</p>
      </div>
      <div className={styles.btnGroup}>
        {btnList.map(({ label, ...btnProps }, idx) => (
          <span key={idx} {...btnProps}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
