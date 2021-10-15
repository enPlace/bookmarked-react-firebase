import { useState } from "react";

const AddBookModal = ({
  showAddBookModal,
  setShowAddBookModal,
  setShowBookSearchModal,
  setSearchResults,
  setFirstResult
}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const bookSearch = async function (searchText) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.status);
    }
    const data = await response.json();

    setFirstResult(data.items[0].volumeInfo)
    setSearchResults(data);
    setShowAddBookModal(false);
    
    /* setFirstResult(data.items[0]) */
    setShowBookSearchModal(true);
    return data;
  };
  return (
    <div
      className={`modal ${showAddBookModal ? "active" : ""}`}
      id="add-book-modal"
    >
      <div className="modal-header">
        <h1>Add a new book </h1>
        <button
          className="close-button"
          onClick={() => {
            setTitle("");
            setIsbn("");
            setAuthor("");
            setShowAddBookModal(false);
          }}
        >
          &times;
        </button>
      </div>

      <div className="modal-content">
        <form id="new-book" autoComplete="off">
          <label htmlFor="title" className="title inf">
            Title
          </label>
          <input
            type="text"
            className="inf"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="author" className="author inf">
            Author (optional)
          </label>
          <input
            type="text"
            name="author"
            className="inf"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label htmlFor="isbn" className="isbn inf">
            ISBN (optional)
          </label>
          <input
            type="text"
            name="isbn"
            className="inf"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
          <div id="form-checkbox">
            <input type="checkbox" name="cbox1" id="cbox1" className="inf" />
            <label> I've already read this book</label>
          </div>
          <div className="add-button">
            <button
              type="submit"
              id="add-book-button"
              value="on/off"
              onClick={(e) => {
                e.preventDefault();
                bookSearch(`${title} ${author} ${isbn}`);
              }}
            >
              Get book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookModal;
