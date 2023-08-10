// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {createContext, useReducer} from 'react';

export const AppContext = createContext(null);

const {Provider} = AppContext;

const AppProvider = ({children}) => {
  // Global state
  const [user, setUser] = useReducer(
    (oldState, newState) => ({...oldState, ...newState}),
    {
      visible: true,
    },
  );
  return (
    <Provider value={[user, setUser]}>
      {children}
    </Provider>
  );
};

AppProvider.context = AppContext;

export default AppProvider;
