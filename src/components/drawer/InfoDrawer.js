import { Drawer, Box, styled, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const drawerStyled = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none',
} 

const Header = styled(Box)`
 background: #008069;
 height: 107px;
 color: #FFFFFF;
 display: flex;
 & > svg {
    margin-top: 75px;
    
    font-weight: 600;
 };
 & > p {
    margin-top: 75px;
    padding-left: 25px;
    font-weight: 600;
 }
`;

const Component = styled(Box)`
    background: #ededed;
    height: 85%;
`;
const Text = styled(Typography)`
    font-size: 18px
`;

const InfoDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyled }}
            style={{ zIndex: 1500}}
        >
            <Header>
                <ArrowBack onClick = {() => setOpen(false)}/>
                <Text> Profile </Text>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}

export default InfoDrawer;