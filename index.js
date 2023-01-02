const App = require("./App");

//criamos um app
const app = new App();

//criamos alguns autores
app.createAuthor("J. R. R. Tolkien", "British", "...");
app.createAuthor("Rick Riordan", "American", "...");

//armazenamos os autores em uma database
const authors = app.getAuthors();

//criamos os livros
app.createBook(
  "O Hobbit",
  "...",
  "fantasy",
  300,
  authors[0],
  "...",
  19.99,
  100
);
app.createBook(
  "A Sociedade do Anel",
  "...",
  "fantasy",
  400,
  authors[0],
  "...",
  24.99,
  100
);
app.createBook(
  "O Ladrão de Raios",
  "...",
  "fantasy",
  500,
  authors[1],
  "...",
  24.99,
  100
);
app.createBook(
  "A Pirâmide Vermelha",
  "...",
  "fantasy",
  600,
  authors[1],
  "...",
  24.99,
  100
);

//adicionamos os livros criados na lista
const books = app.getBooks();

//criamos o usuario
app.createUser("Isaac", "isaac@email.com", "123456");

const users = app.getUsers();

app.showDatabase();

//criamos um pedido
const items = [
  {
    product: books[0],
    quantity: 2,
  },
  {
    product: books[1],
    quantity: 1,
  },
  {
    product: books[3],
    quantity: 1,
  },
];

//criamos um pedido com o item e o usuario
app.createOrder(items, users[0]);

app.showDatabase();
