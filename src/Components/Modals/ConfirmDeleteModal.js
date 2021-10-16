const ConfirmDeleteModal = ({setShowHideModal}) => {
  return (
    <div className="modal" id="delete-modal">
      <div className="modal-header">
        <h1> </h1>
        <button className="close-button" onClick = {()=>{
            setShowHideModal(false)
        }}>
          &times;
        </button>
      </div>

      <div className="modal-content">
        <h1>Are you sure you want to delete this book from your library?</h1>

        <p>This action cannot be undone</p>

        <form action="">
          <button id="confirm-delete">Delete</button>
          <button id="cancel-delete">Go back</button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
