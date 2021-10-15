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
  const [sortBy, setSortBy] = useState("newest");
  const [viewCategory, setViewCategory] = useState("all");
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
          <Filter
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewCategory={viewCategory}
            setViewCategory={setViewCategory}
          ></Filter>
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
            viewCategory = {viewCategory}
            sortBy = {sortBy}
          ></Bookshelf>
        </FirestoreProvider>
      </div>
    );
};

export default App;
