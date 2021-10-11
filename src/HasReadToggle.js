import { doc, setDoc } from "@firebase/firestore";
import { useFirestore } from "reactfire";
import { useState } from "react";

const HasReadToggle = ({ book, userId }) => {
  const [read, setRead] = useState(book.read);
  const firestore = useFirestore();
  const toggleHasRead = async () => {
    await setDoc(
      doc(firestore, userId, book.id),
      { read: !read },
      { merge: true }
    );
    setRead(!read)
  };
  return read ? (
    <div className="has-read">
      <div>Read</div>
      <label class="switch">
        <input data-bookid={book.id} type="checkbox" checked  onChange = {toggleHasRead}/>
        <span className="slider round"></span>
      </label>
    </div>
  ) : (
    <div className="has-read">
      <div>Not read</div>
      <label class="switch">
        <input data-bookid={book.id} type="checkbox"onChange = {toggleHasRead} />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default HasReadToggle;
