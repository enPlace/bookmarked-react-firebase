import ListItemContainer from "./ListItemContainer";

const BookListModal = ({
  showHideModal,
  setShowHideModal,
  searchResults,
  setFirstResult,
}) => {
  console.log("searchtest", !searchResults);
  return !searchResults ? null : (
    <div
      className={`modal ${showHideModal === "book-list" ? "active" : ""}`}
      id="book-list-modal"
    >
      <div className="modal-header">
        <h1>Here are some other books that may match your search:</h1>
        <button
          className="close-button"
          onClick={() => setShowHideModal(false)}
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
                showHideModal={showHideModal}
                setShowHideModal={setShowHideModal}
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
            setShowHideModal("book-search")
          }}
        >
          Back to search menu
        </button>
      </form>
    </div>
  );
};

export default BookListModal;
