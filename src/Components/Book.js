import { setDoc } from "@firebase/firestore";
import { doc } from "firebase/firestore";
import { useFirestore } from "reactfire";
const Book = ({
  book,
  userId,
  hasReadFilter,
  searchFilter,
  setShowHideModal,
  setToDelete,
}) => {
  const firestore = useFirestore();
  const toggleHasRead = async () => {
    await setDoc(
      doc(firestore, userId, book.id),
      { read: !book.read },
      { merge: true }
    );
  };

  const checkFilter = (book) => {
    const regex = new RegExp(searchFilter, "i");
    const titleCheck = book.name.match(regex);
    const hasReadCheck = hasReadFilter === "all" || hasReadFilter === book.read;
    for(let i= 0; i<book.author.length; i++){
      if(book.author[i].match(regex)) return true
    }
    return titleCheck && hasReadCheck;
  };

  return checkFilter(book) ? (
    <div className="Book">
      <img src={book.imgsrc} className="avatar" alt=""></img>
      <div className="card-content">
        <div className="closeContainer">
          <button
            className="close"
            onClick={() => {
              setShowHideModal("confirm-delete");
              setToDelete(book.id);
            }}
          >
            &times;
          </button>
        </div>

        <div
          className="bookInfo"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
          }}
        >
          <div className="top-info">{book.name}</div>
          <div className="bottom-info">{book.author}</div>
          <div className="isbn">
            {book.identifier && book.identifier.type}:{" "}
            {book.identifier && book.identifier.identifier}
          </div>

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
    </div>
  ) : null;
};

export default Book;
