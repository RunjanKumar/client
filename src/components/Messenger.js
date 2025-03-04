import LoginDialog from "./LoginDialog";
import { useContext } from "react";
import { AccountContext } from "./AccountProvider";
import ChatDialog from "./ChatDialog";
import { Toolbar, styled, Box, AppBar } from "@mui/material";


const Component = styled(Box)`
  height: 100vh;
  background: #DCDCDC;
`

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
  box-shadow: none,
`

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none,
`

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
              <Toolbar>

              </Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
              <Toolbar>

              </Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
