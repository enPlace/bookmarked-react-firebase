import { getFirestore } from "@firebase/firestore";
import Bookshelf from "./Bookshelf";
import AddBookModal from "./AddBookModal";
import { useFirebaseApp, FirestoreProvider, useUser } from "reactfire";
import { useState } from "react";
import "./Modals.css";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "@firebase/auth";

const App = () => {
  const [showAddBookModal, setShowAddBookModal] = useState(false);
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
  } else if (!user) {
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
          <AddBookModal
            showAddBookModal={showAddBookModal}
            setShowAddBookModal={setShowAddBookModal}
          />
          <Bookshelf
            userId={user.uid}
            showAddBookModal={showAddBookModal}
            setShowAddBookModal={setShowAddBookModal}
          ></Bookshelf>
        </FirestoreProvider>
      </div>
    );
};

export default App;
