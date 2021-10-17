const ErrorModal = ({ setShowHideModal, showHideModal }) => {
  return showHideModal === "error" ? (
    <div className="modal active" id="error-modal">
      {console.log("si")}
      <div className="modal-header">
        <h1> </h1>
        <button
          className="close-button"
          onClick={() => {
            setShowHideModal(false);
            
          }}
        >
          &times;
        </button>
      </div>

      <div className="modal-content">
        <h1>
          Sorry, we couldn't find any books from your search. Please try again.
        </h1>

        <p>
          (Note that if you have entered the isbn, you may have more success by
          entering only the isbn, without an author or book title.)
        </p>

        <button id="error-return" onClick ={()=>{
            setShowHideModal("book-search")
        }}>Back to search</button>
      </div>
    </div>
  ) : null;
};

export default ErrorModal;
