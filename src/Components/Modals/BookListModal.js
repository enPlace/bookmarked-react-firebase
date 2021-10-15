import ListItemContainer from "./ListItemContainer";

const BookListModal = ({
  showBookListModal,
  setShowBookListModal,
  setShowAddBookModal,
  setShowBookSearchModal,
  searchResults,
  setFirstResult,
}) => {
  console.log("searchtest", !searchResults);
  return !searchResults ? null : (
    <div
      className={`modal ${showBookListModal ? "active" : ""}`}
      id="book-list-modal"
    >
      <div className="modal-header">
        <h1>Here are some other books that may match your search:</h1>
        <button
          className="close-button"
          onClick={() => setShowBookListModal(false)}
        >
          &times;
        </button>
      </div>

      <div id="book-results-container">
        {searchResults &&
          searchResults.items.map((result) => {
            return (
              <ListItemContainer
                result={result}
                setShowBookListModal={setShowBookListModal}
                setShowBookSearchModal = {setShowBookSearchModal}
                setFirstResult={setFirstResult}
              />
            );
          })}
      </div>
      <form action="">
        <button
          id="search-again"
          onClick={(e) => {
            e.preventDefault();
            setShowAddBookModal(true);
            setShowBookListModal(false);
          }}
        >
          Back to search menu
        </button>
      </form>
    </div>
  );
};

export default BookListModal;
