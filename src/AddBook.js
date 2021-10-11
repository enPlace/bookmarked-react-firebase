import { setDoc, doc } from "@firebase/firestore";
import { useFirestore } from "reactfire";

const AddBook = ({ userId }) => {
  const firestore = useFirestore();

  const addTask = async (book) => {
    const docData = book;
    const docRef = await setDoc(
      doc(firestore, "defaultLibrary", book.id),
      docData
    );

    console.log(docRef);
  };
 
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}
    >
      <input
        type="text"
        placeholder="add a new task..."
        
       
      />
      <button type="submit">+</button>
    </form>
  );
};

export default AddBook;
