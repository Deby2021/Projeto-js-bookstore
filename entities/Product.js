//estamos criando tudo público, para testar
//mas não se deve ser assim, devemos usar sempre
//e encapsulamento(get e set)

module.exports = class Product {
  //inStock pode ser informada, mas se não for começa em zero
  constructor(name, description, price, inStock = 0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
  }

  //como nosso atributo inStock está público nem precisaríamos
  //deste método, porderíamos fazer isso a qualquer momento
  addToStock(quantity) {
    this.inStock += quantity;
  }

  removeFromStock(quantity) {
    this.inStock -= quantity;
  }
};
