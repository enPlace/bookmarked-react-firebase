import { serverTimestamp, Timestamp } from "@firebase/firestore";

export const defaultLibrary = [
  {
    hasVisited: true,
    id: "hasVisited",
    dateAdded: serverTimestamp(),
  },
  {
    author: ["Philip K. Dick"],
    name: "Do Androids Dream Of Electric Sheep?",
    dateAdded: new Timestamp( 1634493229,191000000) ,
    id: "MoEO9onVftUC",
    identifier: { identifier: "9780575097933", type: "ISBN_13" },
    imgsrc:
      "http://books.google.com/books/content?id=MoEO9onVftUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    read: true,
  },

  /*   {
    author: ["Robert C. Martin"],
    dateAdded: serverTimestamp(),
    id: "book00",
    imgsrc:
      "http://books.google.com/books/content?id=_i6bDeoCQzsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    identifier: { identifier: "9780136083252", type: "ISBN" },
    name: "Clean Code",
    read: false,
  }, */
  /*   {
    id: "book01",
    name: "Civilization and Capitalism, 15th-18th Century, Vol. I",
    author: ["Fernand Braudel"],
    read: true,
    identifier: { identifier: "0520081145", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=rPgVp3vMOjcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    dateAdded: serverTimestamp(),
  }, */
  /*   {
    author: ["Ray Bradbury"],
    dateAdded: serverTimestamp(),
    id: "book02",
    imgsrc:
      "http://books.google.com/books/content?id=1XUzAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    identifier: { identifier: "9780575087330", type: "ISBN" },

    name: "Something Wicked This Way Comes",
    read: false,
  }, */
  {
    author: ["Eduardo H. Galeano"],
    dateAdded: new Timestamp( 1634493217,191000000) ,
    id: "book03",
    imgsrc:
      "http://books.google.com/books/content?id=CWYiDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    identifier: { identifier: "9788432316050", type: "ISBN" },

    name: "Las venas abiertas de América Latina",
    read: true,
  },
  /*   {
    id: "book04",
    name: "The Philosophy of Jean-Paul Sartre",
    author: ["Jean-Paul Sartre"],
    read: true,
    identifier: { identifier: "1400076323", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=EAsQAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded: serverTimestamp(),
  }, */
  {
    id: "book05",
    name: "Boggs:A Comedy of Values",
    author: ["Lawrence Weschler"],
    read: true,
    identifier: { identifier: "9780226893969", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=3TFYOUCBGsUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    dateAdded: new Timestamp( 1634493216,191000000) ,
  },
  {
    id: "book06",
    name: "Ficciones",
    author: ["Jorge Louis Borges"],
    read: true,
    identifier: { identifier: "8426405738", type: "ISBN" },
    imgsrc:
      "http://books.google.com/books/content?id=oc5iAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded: new Timestamp( 1634493215,191000000) ,
  },

  {
    id: "book07",
    name: "Something Deeply Hidden: Quantum Worlds and the Emergence of Spacetime",
    author: ["Sean Carroll"],
    read: false,
    identifier: { identifier: "9781524743017", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=f16IDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    dateAdded: new Timestamp( 1634493214,191000000) ,
  },
  {
    id: "book08",
    name: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: ["Douglas Hofstadter"],
    read: true,
    identifier: { identifier: "0465026567", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=63yk44Sc59EC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded: new Timestamp( 1634493213,191000000) ,
  },
  {
    id: "book09",
    name: "Cracking the Coding Interview",
    author: ["Gale Laakmann McDowell"],
    read: false,
    identifier: { identifier: "0984782869", type: "ISBN" },

    imgsrc:
      "http://books.google.com/books/content?id=jD8iswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    dateAdded:new Timestamp( 1634493212,191000000) ,
  },
  {
    author: ["James Monaco"],
    dateAdded: new Timestamp( 1634493211,191000000) ,
    id: "book10",
    imgsrc:
      "http://books.google.com/books/content?id=NCDuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    identifier: { identifier: "9780195321050", type: "ISBN" },

    name: "How to Read a Film",
    read: true,
  },
  {
    author: ["J.R.R. Tolkien"],
    imgsrc:
      "http://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    name: "The Fellowship of the Ring",
    id: "aWZzLPhY4o0C",
    dateAdded: new Timestamp( 1634493210,191000000),
    identifier: { identifier: "9780547952017", type: "ISBN_13" },
    read: true,
  },

  /*   {
    author: ["Bruce Chatwin"],
    dateAdded: serverTimestamp(),
    id: "book11",
    imgsrc:
      "http://books.google.com/books/content?id=S45xoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    identifier: { identifier: "8499423124", type: "ISBN" },
    name: "En la Patagonia",
    read: false,
  }, */
];
