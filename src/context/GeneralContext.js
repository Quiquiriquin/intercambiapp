import React, { useState } from 'react';

let GeneralContext = React.createContext();
let { Provider, Consumer } = GeneralContext;

function GeneralProvider({ children }) {

  let [user, setUserInfo] = useState(null);

  const updateUser = (value) => {
    setUserInfo(value);
  };

  return (
    <Provider value={{
      user,
      updateUser,
  }}>
  {children}
</Provider>
)
}

export { GeneralProvider, Consumer as GeneralConsumer, GeneralContext };
