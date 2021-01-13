import React, { useState } from 'react';

let GeneralContext = React.createContext();
let { Provider, Consumer } = GeneralContext;

function GeneralProvider({ children }) {

  let [user, setUserInfo] = useState(null);
  let [loading, setLoading] = useState(true);

  const updateUser = (value) => {
    setUserInfo(value);
  };

  const updateLoading = (value) => {
    setLoading(value)
  };

  return (
    <Provider value={{
      user,
      updateUser,
      loading,
      updateLoading,
  }}>
  {children}
</Provider>
)
}

export { GeneralProvider, Consumer as GeneralConsumer, GeneralContext };
