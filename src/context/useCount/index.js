import { createContext, useContext, useState } from 'react';

const CountContext = createContext({});

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const addition = () => setCount(count + 1);
  const subtraction = () => setCount(count - 1);

  return <CountContext.Provider value={{ count, addition, subtraction }}>{children}</CountContext.Provider>;
};

export const useCount = () => useContext(CountContext);
