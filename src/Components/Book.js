import { setDoc } from "@firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";
const Book = ({ book, userId, hasReadFilter }) => {
  const firestore = useFirestore();
  const handleDelete = async (id) => {
    await deleteDoc(doc(firestore, userId, id));
  };
  const toggleHasRead = async () => {
    await setDoc(
      doc(firestore, userId, book.id),
      { read: !book.read },
      { merge: true }
    );
  };
  return hasReadFilter === "all" || hasReadFilter === book.read ? (
    <div className="Book">
      <img src={book.imgsrc} className="avatar" alt=""></img>
      <div className="card-content">
        <div className="close">
          <button onClick={() => handleDelete(book.id)}>&times;</button>
        </div>
        <div className="top-info">{book.name}</div>
        <div className="bottom-info">{book.author}</div>
        <div className="isbn">ISBN: {book.isbn}</div>

        <div className="has-read">
          <div>{book.read ? "Read" : "Not read"}</div>
          <label className="switch">
            <input
              data-bookid={book.id}
              type="checkbox"
              checked={book.read ? "checked" : ""}
              onChange={toggleHasRead}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  ) : null;
};

export default Book;
