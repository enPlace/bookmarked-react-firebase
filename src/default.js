import { serverTimestamp } from "@firebase/firestore";

export const defaultLibrary = [
  {
    hasVisited: true,
    id:"hasVisited",
    dateAdded: serverTimestamp()
  },

  {
    author: ["Robert C. Martin"],
    dateAdded: serverTimestamp(),
    id: "book00",
    imgsrc:
      "http://books.google.com/books/content?id=_i6bDeoCQzsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    identifier: { identifier: "9780136083252", type: "ISBN" },
    name: "Clean Code",
    read: false,
  },
  {
    id: "book01",
    name: "Civilization and Capitalism, 15th-18th Century, Vol. I",
    author: ["Fernand Braudel"],
    read: true,
    identifier: { identifier: "0520081145", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=rPgVp3vMOjcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    dateAdded: serverTimestamp(),
  },
  {
    author: ["Ray Bradbury"],
    dateAdded: serverTimestamp(),
    id: "book02",
    imgsrc:
      "http://books.google.com/books/content?id=1XUzAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    identifier: { identifier: "9780575087330", type: "ISBN" },

    name: "Something Wicked This Way Comes",
    read: false,
  },
  {
    author: ["Eduardo H. Galeano"],
    dateAdded: serverTimestamp(),
    id: "book03",
    imgsrc:
      "http://books.google.com/books/content?id=CWYiDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    identifier: { identifier: "9788432316050", type: "ISBN" },

    name: "Las venas abiertas de América Latina",
    read: true,
  },
  {
    id: "book04",
    name: "The Philosophy of Jean-Paul Sartre",
    author: ["Jean-Paul Sartre"],
    read: true,
    identifier: { identifier: "1400076323", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=EAsQAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded: serverTimestamp(),
  },
  {
    id: "book05",
    name: "Boggs:A Comedy of Values",
    author: ["Lawrence Weschler"],
    read: true,
    identifier: { identifier: "9780226893969", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=3TFYOUCBGsUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    dateAdded: serverTimestamp(),
  },
  {
    id: "book06",
    name: "Ficciones",
    author: ["Jorge Louis Borges"],
    read: true,
    identifier: { identifier: "8426405738", type: "ISBN" },
    imgsrc:
      "http://books.google.com/books/content?id=oc5iAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded: serverTimestamp(),
  },

  {
    id: "book07",
    name: "Something Deeply Hidden: Quantum Worlds and the Emergence of Spacetime",
    author: ["Sean Carroll"],
    read: false,
    identifier: { identifier: "9781524743017", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=f16IDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    dateAdded: serverTimestamp(),
  },
  {
    id: "book08",
    name: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: ["Douglas Hofstadter"],
    read: true,
    identifier: { identifier: "0465026567", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=63yk44Sc59EC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded: serverTimestamp(),
  },
  {
    id: "book09",
    name: "Cracking the Coding Interview",
    author: ["Gale Laakmann McDowell"],
    read: false,
    identifier: { identifier: "0984782869", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=jD8iswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded: serverTimestamp(),
  },
  {
    author: ["James Monaco"],
    dateAdded: serverTimestamp(),
    id: "book10",
    imgsrc:
      "http://books.google.com/books/content?id=NCDuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    identifier: { identifier: "9780195321050", type: "ISBN" },

    name: "How to Read a Film",
    read: true,
  },
  {
    author: ["Bruce Chatwin"],
    dateAdded: serverTimestamp(),
    id: "book11",
    imgsrc:
      "http://books.google.com/books/content?id=S45xoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    identifier: { identifier: "8499423124", type: "ISBN" },
    name: "En la Patagonia",
    read: false,
  },
];
