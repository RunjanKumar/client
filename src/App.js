import Messenger from "../src/components/Messenger.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./components/AccountProvider.js";
const App = () => {
  const clientId = "123315811323-2cuhiq94e62k8ekln80d3khi08m6bk96.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
         <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
