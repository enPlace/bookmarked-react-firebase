import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { setDoc, doc, collection, query, orderBy } from "@firebase/firestore";
import { defaultLibrary } from "./default";
import Book from "./Book";
import "./Bookshelf.css";

const Bookshelf = ({ userId, setShowAddBookModal }) => {
  //check to see if there is a collection with the user's id
  // if it doesn't,

  const firestore = useFirestore();
  const userBooks = collection(firestore, userId);
  const booksQuery = query(userBooks, orderBy("dateAdded", "desc"));
  const { status, data: booksData } = useFirestoreCollectionData(booksQuery, {
    idField: "id",
  });
  const populateDefault = async (book, userId) => {
    const docData = book;
    await setDoc(doc(firestore, userId, book.id), docData);
  };
  if (status === "loading") {
    return <h1>Loading...</h1>;
  } else if (booksData[0] === undefined) {
    return (
      <div>
        populating library...
        {defaultLibrary.forEach((book) => {
          populateDefault(book, userId);
        })}
      </div>
    );
  } else
    return (
      <div className="Bookshelf">
        <div
          className="Book add-card"
          onClick={() => {
            setShowAddBookModal(true);
          }}
        >
          <div className="plus">+</div>
        </div>
        {console.log(booksData)}
        {booksData.map((book) => {
          return <Book userId={userId} book={book}></Book>;
        })}
      </div>
    );
};

export default Bookshelf;
