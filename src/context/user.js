import React from 'react';

const UserContext = React.createContext();

//Local storage
const getUserFromLocalStorage = () => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { username: null, token: null };
};

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(getUserFromLocalStorage());

  const userLogin = (user) => {
    setUser(user);
    //Local storage
    localStorage.setItem('user', JSON.stringify(user));
  };

  const userLogOut = () => {
    setUser({ username: null, token: null });
    //local storage
    localStorage.removeItem('user');
  };

  // Error message
  const [alert, setAlert] = React.useState({
    show: false,
    message: '',
    type: 'logIn',
  });

  //Show alert
  const showAlert = ({ message, type = 'logIn' }) => {
    setAlert({ show: true, message, type });
  };
  const closeAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <UserContext.Provider
      value={{ user, userLogin, userLogOut, showAlert, closeAlert, alert }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
