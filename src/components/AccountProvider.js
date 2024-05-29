import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountProvider = (props) => {
  const { children } = props;
  const [account, setAccount] = useState(null);
  const [person, setPerson] = useState({});
  return (
    <AccountContext.Provider value={{ account, setAccount, person, setPerson }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
