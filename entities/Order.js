//Order = pedidos que vão sendo feitos

module.exports = class Order {
  #total;
  #items;
  #user;

  //poderíamos criar uma classe items para padronizar
  constructor(items, user) {
    //items é um array- no parâmetro vamos desestruturar
    //este item(que é um produto e uma quantidade)
    //e passamos uma arrow function para fazermos uma verificação
    //se a quantidade for maior que o produto em estoque dará erro
    items.forEach(({ product, quantity }) => {
      if (quantity > product.inStock) {
        throw new Error("Quantidade insuficiente em estoque!");
      }
    });
    this.#items = items;
    this.#user = user;
    //para cada produto multiplicamos o seu preço pela sua quantidade
    //somando todas as multiplicações e atribuindo no atributo total, iniciando em zero
    this.#total = items.reduce(
      (sum, { product, quantity }) => sum + product.price * quantity,
      0
    );
  }

  //retorna um objeto com os dados deste pedido
  get data() {
    return {
      items: this.#items,
      user: this.#user,
      total: this.#total,
    };
  }
};
