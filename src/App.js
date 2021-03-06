import { getFirestore } from "@firebase/firestore";
import Bookshelf from "./Components/BookDisplayComponents/Bookshelf";
import BookSearchModal from "./Components/Modals/BookSearchModal";
import ConfirmBookModal from "./Components/Modals/ConfirmBookModal";
import BookListModal from "./Components/Modals/BookListModal";
import ErrorModal from "./Components/Modals/ErrorModal";
import Overlay from "./Components/Modals/Overlay";
import { useFirebaseApp,  FirestoreProvider, useUser, useSigninCheck } from "reactfire";
import { useState } from "react";
import "./Components/Modals/Modals.css";
import "./App.css";
import Icon from "./icon.png"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";

const App = () => {
  //firestore hooks
  const firestoreInstance = getFirestore(useFirebaseApp());
  const auth = getAuth(useFirebaseApp());
  const { data: user } = useUser();
  const signInStatus = useSigninCheck();
  //app states
  const [showHideModal, setShowHideModal] = useState(false);
  const [searchResults, setSearchResults] = useState(false); // googlebooks API results
  const [firstResult, setFirstResult] = useState(false); //result to be confirmed and added
  const [searchReadStatus, setSearchReadStatus] = useState(false); //value for if user has read book to add

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch {}
  };
  if (signInStatus.status=== "loading") {
    return <span>loading...</span>;
  } else if (!signInStatus.data.signedIn||!user) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleSignIn}
          style={{
            width: "100%",
            height: "50px",
            fontSize: "20px",
            border: "none",
            marginTop: "30px",
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            color: "white",
            backgroundColor: "rgb(31, 45, 250)",
          }}
        >
          Sign in to get started
        </button>
    
        <img src={Icon} alt="" className = "main-icon" />
      </div>
    );
  } else
    return (
      <div>
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
          <ErrorModal
            showHideModal={showHideModal}
            setShowHideModal={setShowHideModal}
          ></ErrorModal>
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
