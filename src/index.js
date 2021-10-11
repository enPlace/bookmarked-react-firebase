import React from "react";
import { render } from "react-dom";
import App from "./App";
import { FirebaseAppProvider, AuthProvider, useFirebaseApp } from "reactfire";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const UserAuth = () =>{
  const auth = getAuth(useFirebaseApp());
  return (
    <AuthProvider sdk={auth}>
       <App />
    </AuthProvider>
  )
}

render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
   <UserAuth></UserAuth>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
