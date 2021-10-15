import { setDoc, doc, serverTimestamp } from "@firebase/firestore";
import { useFirestore } from "reactfire";

export const defaultLibrary = [
  {
    author: "Robert C. Martin",
    dateAdded: serverTimestamp(),
    id: "book00",
    imgsrc:
      "http://books.google.com/books/content?id=_i6bDeoCQzsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    isbn: "9780136083252",
    name: "Clean Code",
    read: false,
  },
  {
    id: "book01",
    name: "Civilization and Capitalism, 15th-18th Century, Vol. I",
    author: "Fernand Braudel",
    read: true,
    isbn: "0520081145",
    imgsrc:
      "http://books.google.com/books/content?id=rPgVp3vMOjcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    dateAdded: serverTimestamp(),
  },
  {
    author: "Ray Bradbury",
    dateAdded: serverTimestamp(),
    id: "book02",
    imgsrc:
      "http://books.google.com/books/content?id=1XUzAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    isbn: "9780575087330",
    name: "Something Wicked This Way Comes",
    read: false,
  },
  {
    author: "Eduardo H. Galeano",
    dateAdded: serverTimestamp(),
    id: "book03",
    imgsrc:
      "http://books.google.com/books/content?id=CWYiDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    isbn: "9788432316050",
    name: "Las venas abiertas de América Latina",
    read: true,
  },
  {
    id: "book04",
    name: "The Philosophy of Jean-Paul Sartre",
    author: "Jean-Paul Sartre",
    read: true,
    isbn: "1400076323",
    imgsrc: "http://books.google.com/books/content?id=EAsQAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded: serverTimestamp(),
  },
  {
    id: "book05",
    name: "Boggs:A Comedy of Values",
    author: "Lawrence Weschler",
    read: true,
    isbn: "9780226893969",
    imgsrc: "http://books.google.com/books/content?id=3TFYOUCBGsUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    dateAdded: serverTimestamp(),
  },
  {
    id: "book06",
    name: "Ficciones",
    author: "Jorge Louis Borges",
    read: true,
    isbn: "8426405738",
    imgsrc: 	"http://books.google.com/books/content?id=oc5iAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded: serverTimestamp(),
  },

  {
    id: "book07",
    name: "Something Deeply Hidden: Quantum Worlds and the Emergence of Spacetime",
    author: "Sean Carroll",
    read: false,
    isbn: "9781524743017",
    imgsrc: "http://books.google.com/books/content?id=f16IDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    dateAdded: serverTimestamp(),
  },
  {
    id: "book08",
    name: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas Hofstadter",
    read: true,
    isbn: "0465026567",
    imgsrc: "http://books.google.com/books/content?id=63yk44Sc59EC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded:serverTimestamp(),
  },
  {
    id: "book09",
    name: "Cracking the Coding Interview",
    author: "Gale Laakmann McDowell",
    read: false,
    isbn: " 0984782869",
    imgsrc: "http://books.google.com/books/content?id=jD8iswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded: serverTimestamp(),
  },
  {
    author: "James Monaco",
    dateAdded: serverTimestamp(),
    id: "book10",
    imgsrc:
      "http://books.google.com/books/content?id=NCDuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    isbn: "UOM:39015080886594",
    name: "How to Read a Film",
    read: true,
  },
  {
    author: "Bruce Chatwin",
    dateAdded: serverTimestamp(),
    id: "book11",
    imgsrc:
      "http://books.google.com/books/content?id=S45xoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    isbn: "8499423124",
    name: "En la Patagonia",
    read: false,
  },
];
const AddTask = ({ userId }) => {
  const firestore = useFirestore();

  const populateDefault = async (book, userId) => {
    const docData = book;
    const docRef = await setDoc(
      doc(firestore, userId, book.id),
      docData
    );

    console.log(docRef);
  };
  defaultLibrary.forEach(book=>{
      populateDefault(book)
  })

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
 
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

export default AddTask;
