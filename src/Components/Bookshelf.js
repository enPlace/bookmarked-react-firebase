import { useEffect, useState } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import {
  setDoc,
  doc,
  deleteDoc,
  collection,
  query,
  orderBy,
} from "@firebase/firestore";
import { defaultLibrary } from "../default";
import Book from "./Book";
import ConfirmDeleteModal from "./Modals/ConfirmDeleteModal";
import Filter from "./Filter";
import "./Bookshelf.css";

const Bookshelf = ({ userId, setShowHideModal, showHideModal }) => {
  const firestore = useFirestore();
  const [userBooks, setUserBooks] = useState(collection(firestore, userId));
  const [booksQuery, setBooksQuery] = useState(
    query(userBooks, orderBy("dateAdded", "desc"))
  );
  const { status, data: booksData } = useFirestoreCollectionData(booksQuery, {
    idField: "id",
  });
  const [sortBy, setSortBy] = useState("newest");
  const [hasReadFilter, setHasReadFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const [toDelete, setToDelete] = useState(false);

  const handleDelete = async () => {
    await deleteDoc(doc(firestore, userId, toDelete));
  };

  const populateDefault = async (book, userId) => {
    const docData = book;
    await setDoc(doc(firestore, userId, book.id), docData);
  };

  useEffect(() => {
    const newQuery = query(
      userBooks,
      orderBy(
        sortBy === "newest" || sortBy === "oldest" ? "dateAdded" : "name",
        sortBy === "a-z" || sortBy === "oldest" ? "asc" : "desc"
      )
    );
    setBooksQuery(newQuery);
    setUserBooks(collection(firestore, userId));
  }, [sortBy]);

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
      <div className="container">
        <ConfirmDeleteModal
          showHideModal={showHideModal}
          setShowHideModal={setShowHideModal}
          handleDelete = {handleDelete}
          setToDelete={setToDelete}
        />
        <Filter
          sortBy={sortBy}
          setSortBy={setSortBy}
          hasReadFilter={hasReadFilter}
          setHasReadFilter={setHasReadFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        ></Filter>
        <div className="Bookshelf">
          <div
            className="Book add-card"
            onClick={() => {
              setShowHideModal("book-search");
            }}
          >
            <div className="plus">+</div>
          </div>
          {console.log(booksData)}
          {booksData.map((book) => {
            return (
              <Book
                searchFilter={searchFilter}
                hasReadFilter={hasReadFilter}
                userId={userId}
                book={book}
                setShowHideModal={setShowHideModal}
                setToDelete={setToDelete}
              ></Book>
            );
          })}
        </div>
      </div>
    );
};

export default Bookshelf;
