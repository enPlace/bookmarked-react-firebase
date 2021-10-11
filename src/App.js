import { getFirestore } from "@firebase/firestore";
import Bookshelf from "./Bookshelf";
import { useFirebaseApp, FirestoreProvider, useUser } from "reactfire";

import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "@firebase/auth";

const App = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  const auth = getAuth(useFirebaseApp());
  const { userStatus, data: user } = useUser();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch {}
  };

  if (userStatus === "loading") {
    console.log(user);
    return <span>loading...</span>;
  }
  else if (!user) {
    console.log(user);
    return (
      <div>
        <button onClick={handleSignIn}>"Please sign in"</button>
      </div>
    );
  } else
    return (
      <div>
        {console.log("useridteat", user.uid)}
        <h1>Welcome Back, {user.displayName}!</h1>
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          sign out
        </button>
        <FirestoreProvider sdk={firestoreInstance}>
          <h1>🌯</h1>

          <Bookshelf userId={user.uid}></Bookshelf>
        </FirestoreProvider>
      </div>
    );
};

export default App;
