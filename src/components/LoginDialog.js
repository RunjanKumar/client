import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../util.js/constant";
import { GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "./AccountProvider";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0px 56px 56px;
`;
const QRCode = styled("img")({
  height: "264px",
  width: "264px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyleList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px: 
    color: #4a4a4a;
  }
`;

const dialogStyled = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShawdow: "none",
  overflow: "hidden",
};
const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);
  console.log("setAccount", setAccount);
  const onLoginSuccess = (res) => {
    console.log(res);
    const data = jwtDecode(res.credential);
    console.log("data", data);
    setAccount(data);
  };
  const onLoginError = (err) => {
    console.log("Login Failed", err);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyled }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title> To use whatsapp on your computer:</Title>
          <StyleList>
            <ListItem>1. Open whatsapp on your phone </ListItem>
            <ListItem>2. tap menu setting and select whatsapp web </ListItem>
            <ListItem>
              3. point your phone to the screen and capture the code
            </ListItem>
          </StyleList>
        </Container>
        <Container>
          <div className="relative">
            <QRCode src={qrCodeImage} alt="qr-code" />
            <div className="absolute inset-0 flex items-center justify-center">
              {console.log(onLoginError, onLoginSuccess)}
              <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onLoginError}
              />
            </div>
          </div>
        </Container>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
