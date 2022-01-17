import { createContext, useReducer } from 'react';

const TipContext = createContext();

const initialState = {
  percent: null,
  custom: '',
  bill: '',
  people: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set percent':
      return { ...state, percent: action.payload };
    case 'set custom':
      return { ...state, custom: action.payload };
    case 'set bill':
      return { ...state, bill: action.payload };
    case 'set people':
      return { ...state, people: action.payload };
    case 'reset':
      return { percent: null, people: '', bill: '', custom: '' };
    default:
      return state;
  }
};

export default function TipPercentContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TipContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </TipContext.Provider>
  );
}

export { TipContext };
