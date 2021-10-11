import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { setDoc, getDocs, doc, collection, query } from "@firebase/firestore";
import { defaultLibrary } from "./default";
import Book from "./Book";
import "./Bookshelf.css"
const Bookshelf = ({ userId }) => {
  //check to see if there is a collection with the user's id
  // if it doesn't,

  const firestore = useFirestore();
  const userBooks = collection(firestore, userId);
  const booksQuery = query(userBooks);
  const { status, data: booksData } = useFirestoreCollectionData(booksQuery, {
    idField: "id",
  });
  const populateDefault = async (book, userId) => {
    const docData = book;
    const docRef = await setDoc(doc(firestore, userId, book.id), docData);
    console.log("thisisdocref", docRef);
  };
  /*     defaultLibrary.forEach(book=>{
        populateDefault(book)
    }) */
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
        {console.log(booksData)}
        {booksData.map(book=>{
            return <Book bookObj = {book}></Book>
        })}
      </div>
    );
};

export default Bookshelf;
