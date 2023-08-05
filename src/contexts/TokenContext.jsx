import { createContext, useContext, useState } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  /**
   * Sets the given token and role into state and local storage
   */
  const storeCredentials = (token, role) => {
    // Save the token and role in the state
    setToken(token);
    setRole(role);
    // Save the token & role in local storage
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  };

  // Gets token from state if exists or local storage
  const getToken = () => {
    return token ?? localStorage.getItem("token") ?? null;
  };

  // Gets role from state if exists or local storage
  const getRole = () => {
    return role ?? localStorage.getItem("role") ?? null;
  };

  return (
    <TokenContext.Provider
      value={{ token: getToken(), role: getRole(), storeCredentials }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};
