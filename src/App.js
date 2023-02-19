import logo from "./logo.svg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import Messenger from "./components/Messenger";

import AccountProvider from "./context/AccountProvider";

{
  /* <GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>; */
}

function App() {
  const clientId =
    "393716471648-f49bve82o0th2103010q24c32canrjdp.apps.googleusercontent.com";

  //   <GoogleOAuthProvider clientId={clientId}>
  //  <Messenger/>
  //   </GoogleOAuthProvider>
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
