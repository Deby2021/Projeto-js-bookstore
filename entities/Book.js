const Product = require("./Product");

module.exports = class Book extends Product {
  constructor(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock = 0
  ) {
    //chamos o super sempre primeiro e já definimos aqui
    //no lugar  nome.,que será sempre Livro...
    super(`Livro: ${title}`, description, price, inStock);
    this.title = title;
    this.synopsis = synopsis;
    this.genre = genre;
    this.pages = pages;
    this.author = author;
  }
};
