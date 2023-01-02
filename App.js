const Database = require("./Database");
const Author = require("./entities/Author");
const Book = require("./entities/Book");
const Order = require("./entities/Order");
const Poster = require("./entities/Poster");
const User = require("./entities/User");

module.exports = class App {
  //é só da classe App
  static #database = new Database();

  //criar os usuários
  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user);
  }

  //obter os usuários
  getUsers() {
    return App.#database.find("users");
  }

  //criando um autor
  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio);
    App.#database.saveAuthor(author);
  }

  //obter os autores
  getAuthors() {
    return App.#database.find("authors");
  }

  //criando livros
  createBook(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock
  ) {
    const book = new Book(
      title,
      synopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock
    );
    App.#database.saveBook(book);
  }

  //adicinando mais livros ao estoque
  addBook(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity);
  }

  getBooks() {
    return App.#database.find("books");
  }

  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock);
    App.#database.savePoster(poster);
  }

  addPoster(postername, quantity) {
    App.#database.addPostersToStock(postername, quantity);
  }

  getPosters() {
    return App.#database.find("posters");
  }

  createOrder(items, user) {
    const order = new Order(items, user);
    //salvamos o pedido
    App.#database.saveOrder(order);
    //agora precisamos descontar a quantidade que foi comprada
    //vamos desestrututar este item em produto e quantidade
    //data está em pedidos-ORDER
    order.data.items.forEach(({ product, quantity }) => {
      //o produto pode ser tanto um livro quanto um poster
      //se o meu produto for livro
      //aqui referenciamos o product.name pois livro e poster, tem
      //o mesmo atributo-usamos o polimorfismo
      if (product instanceof Book) {
        App.#database.removeBooksFromStock(product.name, quantity);
      } else if (product instanceof Poster) {
        //agora se produto por um poster
        App.#database.removePostersFromStock(product.name, quantity);
      }
    });
  }

  getOrders() {
    return App.#database.find("orders");
  }

  showDatabase() {
    App.#database.showStorage();
  }
};
