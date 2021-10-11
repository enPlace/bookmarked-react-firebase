import HasReadToggle from "./HasReadToggle";
const Book = ({ book, userId }) => {
  return (
    <div className="Book">
      <img src={book.imgsrc} className="avatar" alt=""></img>
      <div className="card-content">
        <div className="close">
          <button>&times;</button>
        </div>
        <div className="top-info">{book.name}</div>
        <div className="bottom-info">{book.author}</div>
        <div className="isbn">ISBN: {book.isbn}</div>
        
        <HasReadToggle userId = {userId} book = {book}></HasReadToggle>
      </div>
    </div>
  );
};

export default Book;
