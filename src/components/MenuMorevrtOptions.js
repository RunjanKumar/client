import { Menu, MenuItem, styled } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { useState } from "react";

const MenuOptions = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const MenuMorevrtOption = ({ setOpenDrawer }) => {

    const [ open, setOpen ] = useState(null);
    const handleClose = (e) => {
        setOpen(false);
    }
    const handleOpen = (e) => {
        setOpen(e.currentTarget);
    }
  return (
    <>
      <MoreVert onClick={handleOpen}/>
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        transformOrigin={{vertical: 'top', horizontal: 'right'}}
      >
        <MenuOptions onClick={() => {
          handleClose();
          setOpenDrawer(true);
        }}>Profile</MenuOptions>
      </Menu>
    </>
  );
};
export default MenuMorevrtOption;
