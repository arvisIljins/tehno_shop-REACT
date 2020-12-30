import React, { useEffect } from 'react';
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  return <UserContext.Provider value='user'>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
