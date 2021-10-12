import { map } from "@firebase/util";

const BookSearchModal = ({
  searchResults,
  showBookSearchModal,
  setShowBookSearchModal,
  setShowAddBookModal,
  setShowBookListModal,
  firstResult, 

}) => {

console.log("firstresults", firstResult)
  return!searchResults ? null : (
    <div
      className={`modal ${showBookSearchModal ? "active" : ""}`}
      id="book-search-modal"
    >
      <div className="modal-header">
        <h1>Is this the book you're looking for? </h1>
        <button
          className="close-button"
          onClick={() => setShowBookSearchModal(false)}
        >
          &times;
        </button>
      </div>

      <div id="booksearch-img">
        <img src={firstResult.imageLinks&&firstResult.imageLinks.thumbnail} alt="" />
      </div>
      <div id="booksearch-title" className="info">
        {firstResult.title}
      </div>
      {firstResult.authors &&
        firstResult.authors.map((author) => {
          return (
            <div id="booksearch-author" className="info">
              {author}
            </div>
          );
        })}
      {firstResult.industryIdentifiers && 
         
            <div id="booksearch-isbn" className="info">
            Identifier: {firstResult.industryIdentifiers[0].identifier} ({firstResult.industryIdentifiers[0].type})
          </div>
          
      }
      <form action="">
        <button
          id="confirm"
          onClick={(e) => {
            e.preventDefault();
            setShowBookSearchModal(false);
            setShowBookListModal(true);
          }}
        >
          Yes
        </button>{" "}
        <button
          id="show-all-results-button"
          onClick={(e) => {
            e.preventDefault();
            setShowBookSearchModal(false);
            setShowBookListModal(true);
          }}
        >
          No
        </button>
      </form>
    </div>
  );
};

export default BookSearchModal;
