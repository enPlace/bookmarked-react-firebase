const AddBookModal = ({showAddBookModal, setShowAddBookModal}) => {
    console.log(showAddBookModal, setShowAddBookModal)
  return (
    <div className={`modal ${showAddBookModal ? "active": ""}`} id="add-book-modal">
      <div className="modal-header">
        <h1>Add a new book </h1>
        <button className="close-button" onClick={()=>setShowAddBookModal(false)}>
          &times;
        </button>
      </div>

      <div className="modal-content">

      <form id="new-book" autoComplete="off">
        <label htmlFor="title" className="title inf">Title</label>
        <input type="text" className= "inf" name = "title" id = "title"/>
        <label htmlFor="author" className = "author inf">Author (optional)</label>
        <input type="text" name = "author" className= "inf" />
        <label htmlFor="isbn" className = "isbn inf">ISBN (optional)</label>
        <input type="text" name = "isbn" className= "inf" />
        <div id = "form-checkbox">
            <input type="checkbox" name="cbox1" id ="cbox1" className = "inf"/>
            <label> I've already read this book</label>
        </div>
        <div className = "add-button"><button type="submit" id = "add-book-button" value = "on/off">Get book</button></div>
    </form>
      </div>
    </div>
  );
};

export default AddBookModal;
