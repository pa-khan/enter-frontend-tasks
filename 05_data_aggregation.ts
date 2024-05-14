// Необходимо выполнить агрегацию данных
// На выходе должен быть массив пользователей c книгами в виде объекта

interface IUser {
  id: number;
  name: string;
  age: number;
  email: string;
  bookIds: number[];
}

interface IBook {
  id: number;
  name: string;
}

const users: IUser[] = [
  {
    id: 1,
    name: "John",
    age: 53,
    email: "john@example.com",
    bookIds: [1, 2],
  },
  {
    id: 2,
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    bookIds: [2, 4],
  },
  {
    id: 3,
    name: "Bob",
    age: 35,
    email: "bob@example.com",
    bookIds: [2, 3],
  },
  {
    id: 4,
    name: "Jane",
    age: 28,
    email: "jane@example.com",
    bookIds: [],
  },
];

const books: IBook[] = [
  { id: 1, name: "The Great Gatsby" },
  { id: 2, name: "To Kill a Mockingbird" },
  { id: 3, name: "1984" },
  { id: 4, name: "Pride and Prejudice" },
];
