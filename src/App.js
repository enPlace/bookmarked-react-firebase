import { getFirestore } from "@firebase/firestore";
import Bookshelf from "./Bookshelf";
import AddBookModal from "./AddBookModal";
import BookSearchModal from "./BookSearchModal";
import BookListModal from "./BookListModal";
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
  //firestore hooks
  const firestoreInstance = getFirestore(useFirebaseApp());
  const auth = getAuth(useFirebaseApp());
  const { userStatus, data: user } = useUser();

  //app hooks
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [showBookSearchModal, setShowBookSearchModal] = useState(false);
  const [showBookListModal, setShowBookListModal] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [firstResult, setFirstResult] = useState(false);

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
            setShowBookSearchModal={setShowBookSearchModal}
            setSearchResults={setSearchResults}
            setFirstResult={setFirstResult}
          />
          <BookSearchModal
            userId={user.uid}
            showBookSearchModal={showBookSearchModal}
            setShowBookSearchModal={setShowBookSearchModal}
            setShowAddBookModal={setShowAddBookModal}
            setShowBookListModal={setShowBookListModal}
            searchResults={searchResults}
            firstResult={firstResult}
            setFirstResult={setFirstResult}
            setSearchResults={setSearchResults}
          />
          <BookListModal
            setShowAddBookModal={setShowAddBookModal}
            showBookListModal={showBookListModal}
            setShowBookListModal={setShowBookListModal}
            setShowBookSearchModal={setShowBookSearchModal}
            searchResults={searchResults}
            setFirstResult={setFirstResult}
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
