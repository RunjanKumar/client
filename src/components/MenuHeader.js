import { useContext, useState } from "react";
import { AccountContext } from "./AccountProvider";
import { Box, styled } from "@mui/material";
import { Chat as MessageIcon } from "@mui/icons-material";
import MenuMorevrtOption from "./MenuMorevrtOptions";
import InfoDrawer from "./drawer/InfoDrawer";

const Component = styled(Box)`
  height: 44px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        color: #000;
        padding: 1px;
    };
    & :first-child {
        font-size: 22px;
        margin right: 8px;
        margin-top: 3px;
    }
`;

const MenuHeader = () => {
  const { account } = useContext(AccountContext);

  const [ openDrawer, setOpenDrawer ] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  }
  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
        <Wrapper>
          <MessageIcon />
          <MenuMorevrtOption setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen = {setOpenDrawer} />
    </>
  );
};

export default MenuHeader;
