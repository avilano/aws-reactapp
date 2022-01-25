import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <main>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello {user.username} we now have Auth!</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        </div>
      )}
    </Authenticator>
  );
}
