import HasReadToggle from "./HasReadToggle";
import { doc, deleteDoc } from "firebase/firestore";

import { useFirestore } from "reactfire";
const Book = ({ book, userId }) => {
  const firestore = useFirestore();
  const handleDelete = async (id) => {
    await deleteDoc(doc(firestore, userId, id));
  };
  return (
    <div className="Book">
      <img src={book.imgsrc} className="avatar" alt=""></img>
      <div className="card-content">
        <div className="close">
          <button onClick={() => handleDelete(book.id)}>&times;</button>
        </div>
        <div className="top-info">{book.name}</div>
        <div className="bottom-info">{book.author}</div>
        <div className="isbn">ISBN: {book.isbn}</div>

        <HasReadToggle userId={userId} book={book}></HasReadToggle>
      </div>
    </div>
  );
};

export default Book;
