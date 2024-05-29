import { Box, Dialog, styled } from "@mui/material";
import Menu from "./Menu";
import EmptyChat from "./EmptyChat";
import ChatBox from "./Chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "./AccountProvider";

const Component = styled(Box)`
  display: flex;
  height: 100%;
`;

const LeftComponent = styled(Box)`
  height: 100%;
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  background-color: pink;
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, o.14);
`;
const dialogStyled = {
  height: "95%",
  width: "100%",
  margin: "15px",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShawdow: "none",
  borderRadius: "0px",
  overflow: "hidden",
};

const ChatDialog = () => {
  const { person } = useContext(AccountContext);
  return (
    <>
      <Dialog
        open={true}
        hideBackdrop={true}
        PaperProps={{ sx: dialogStyled }}
        maxWidth={"md"}
      >
        <Component>
          <LeftComponent>
            <Menu />
          </LeftComponent>
          <RightComponent>
            {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
          </RightComponent>
        </Component>
      </Dialog>
    </>
  );
};

export default ChatDialog;
