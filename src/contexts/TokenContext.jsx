import { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [tokenData, setTokenData] = useState(null);

  const setToken = (token, role) => {
    // Save the token and role in the state
    setTokenData({ token, role });
  };

  const getToken = () => {
    return tokenData ? tokenData.token : null;
  };

  const getRole = () => {
    return tokenData ? tokenData.role : null;
  };

  return (
    <TokenContext.Provider value={{ token: getToken(), role: getRole(), setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};