import { getFirestore } from "@firebase/firestore";
import Bookshelf from "./Components/Bookshelf";
import BookSearchModal from "./Components/Modals/BookSearchModal";
import ConfirmBookModal from "./Components/Modals/ConfirmBookModal";
import BookListModal from "./Components/Modals/BookListModal";
import Overlay from "./Components/Modals/Overlay";
import { useFirebaseApp, FirestoreProvider, useUser } from "reactfire";
import { useState } from "react";
import "./Components/Modals/Modals.css";
import "./App.css";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "@firebase/auth";

const App = () => {
  //firestore hooks
  const firestoreInstance = getFirestore(useFirebaseApp());
  const auth = getAuth(useFirebaseApp());
  const { userStatus, data: user } = useUser();

  //app states
  const [showHideModal, setShowHideModal] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [firstResult, setFirstResult] = useState(false);

  const [searchReadStatus, setSearchReadStatus] = useState(false);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch {}
  };

  if (userStatus === "loading") {
    return <span>loading...</span>;
  } else if (!user) {
    return (
      <div>
        <button onClick={handleSignIn}>"Please sign in"</button>
      </div>
    );
  } else
    return (
      <div>
        {/*   <h1>Welcome Back, {user.displayName}!</h1> */}
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          sign out
        </button>
        <FirestoreProvider sdk={firestoreInstance}>
          <Overlay
            showHideModal={showHideModal}
            setShowHideModal={setShowHideModal}
          />
          <BookSearchModal
            showHideModal={showHideModal}
            setShowHideModal={setShowHideModal}
            setSearchResults={setSearchResults}
            setFirstResult={setFirstResult}
            searchReadStatus={searchReadStatus}
            setSearchReadStatus={setSearchReadStatus}
          />
          <ConfirmBookModal
            userId={user.uid}
            showHideModal={showHideModal}
            setShowHideModal={setShowHideModal}
            searchResults={searchResults}
            firstResult={firstResult}
            setFirstResult={setFirstResult}
            setSearchResults={setSearchResults}
            searchReadStatus={searchReadStatus}
          />
          <BookListModal
            showHideModal={showHideModal}
            setShowHideModal={setShowHideModal}
            searchResults={searchResults}
            setFirstResult={setFirstResult}
          />
          <Bookshelf
            userId={user.uid}
            showHideModal={showHideModal}
            setShowHideModal={setShowHideModal}
          ></Bookshelf>
        </FirestoreProvider>
      </div>
    );
};

export default App;
