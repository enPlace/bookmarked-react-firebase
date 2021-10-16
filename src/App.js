import { getFirestore } from "@firebase/firestore";
import Filter from "./Components/Filter";
import Bookshelf from "./Components/Bookshelf";
import AddBookModal from "./Components/Modals/AddBookModal";
import BookSearchModal from "./Components/Modals/BookSearchModal";
import BookListModal from "./Components/Modals/BookListModal";
import { useFirebaseApp, FirestoreProvider, useUser } from "reactfire";
import { useState } from "react";
import "./Components/Modals/Modals.css";
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
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [showBookSearchModal, setShowBookSearchModal] = useState(false);
  const [showBookListModal, setShowBookListModal] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [firstResult, setFirstResult] = useState(false);

  const[searchReadStatus, setSearchReadStatus] = useState(false)
 
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
            searchReadStatus={searchReadStatus} 
            setSearchReadStatus ={setSearchReadStatus}
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
            searchReadStatus = {searchReadStatus}
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
