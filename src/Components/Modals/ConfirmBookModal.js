import { setDoc,  doc, serverTimestamp } from "@firebase/firestore";
import { useFirestore } from "reactfire";

const ConfirmBookMOdal = ({
  userId,
  searchResults,
  showHideModal,
  setShowHideModal,
  firstResult,
  setSearchResults,
  setFirstResult,
  searchReadStatus
}) => {
  const volumeInfo = firstResult.volumeInfo
  const firestore = useFirestore();
  const addBookToShelf = async () => {
    const newBook = {
      author: volumeInfo.authors,
      dateAdded: serverTimestamp(),
      id: firstResult.id,
      imgsrc: `${volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail}`,
      identifier: !volumeInfo.industryIdentifiers ? null : volumeInfo.industryIdentifiers[0],
      name: `${volumeInfo.title}`,
      read: searchReadStatus,
    };
    try {
      await setDoc(doc(firestore, userId, newBook.id), newBook);
     
    } catch {console.error();}
  };
  return !searchResults ? null : (
    <div
      className={`modal ${showHideModal ==="confirm-book" ? "active" : ""}`}
      id="confirm-book-modal"
    >
      <div className="modal-header">
        <h1>Is this the book you're looking for? </h1>
        <button
          className="close-button"
          onClick={() => setShowHideModal(false)}
        >
          &times;
        </button>
      </div>

      <div id="confirm-book-img">
        <img
          src={volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail}
          alt=""
        />
      </div>
      <div id="confirm-book-title" className="info">
        {volumeInfo.title}
      </div>
      {volumeInfo.authors &&
        volumeInfo.authors.map((author) => {
          return (
            <div id="confirm-book-author" className="info">
              {author}
            </div>
          );
        })}
      {volumeInfo.industryIdentifiers && (
        <div id="confirm-book-isbn" className="info">
          Identifier: {volumeInfo.industryIdentifiers[0].identifier} (
          {volumeInfo.industryIdentifiers[0].type})
        </div>
      )}
      <form action="">
        <button
          id="confirm"
          onClick={(e) => {
            e.preventDefault();
            addBookToShelf()
            setSearchResults(false)
            setFirstResult(false)
            setShowHideModal(false)
          }}
        >
          Yes
        </button>{" "}
        <button
          id="show-all-results-button"
          onClick={(e) => {
            e.preventDefault();
            setShowHideModal("book-list");
          }}
        >
          No
        </button>
      </form>
    </div>
  );
};

export default ConfirmBookMOdal;
