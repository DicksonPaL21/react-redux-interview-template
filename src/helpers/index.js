const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1');

const removeSpaces = (num) => num.toString().replace(/\s/g, '');

export const numClickHandler = (e, state, setState) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  if (removeSpaces(state.num).length < 16) {
    setState({
      ...state,
      num:
        state.num === 0 && value === '0'
          ? '0'
          : removeSpaces(state.num) % 1 === 0
          ? toLocaleString(Number(removeSpaces(state.num + value)))
          : toLocaleString(state.num + value),
      res: !state.sign ? 0 : state.res,
    });
  }
};

export const dotClickHandler = (e, state, setState) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  setState({
    ...state,
    num: !state.num.toString().includes('.') ? state.num + value : state.num,
  });
};

export const signClickHandler = (e, state, setState) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  setState({
    ...state,
    sign: value,
    res: !state.res && state.num ? state.num : state.res,
    num: 0,
  });
};

export const equalsClickHandler = (state, setState) => {
  if (state.sign && state.num) {
    const math = (a, b, sign) =>
      sign === '+'
        ? a + b
        : sign === '-'
        ? a - b
        : sign === 'X'
        ? a * b
        : a / b;

    setState({
      ...state,
      res:
        state.num === '0' && state.sign === '/'
          ? "Can't divide with 0"
          : toLocaleString(
              math(
                Number(removeSpaces(state.res)),
                Number(removeSpaces(state.num)),
                state.sign
              )
            ),
      sign: '',
      num: 0,
    });
  }
};

export const deleteClickHandler = (e, state, setState) => {
  e.preventDefault();

  setState({
    ...state,
    num: state.num.slice(0, -1),
  });
};

export const percentClickHandler = (state, setState) => {
  let num = state.num ? parseFloat(removeSpaces(state.num)) : 0;
  let res = state.res ? parseFloat(removeSpaces(state.res)) : 0;

  setState({
    ...state,
    num: (num /= Math.pow(100, 1)),
    res: (res /= Math.pow(100, 1)),
    sign: '',
  });
};

export const resetClickHandler = (setState) => {
  setState((state) => ({
    ...state,
    sign: '',
    num: 0,
    res: 0,
  }));
};
