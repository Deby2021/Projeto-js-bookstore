//Como estamos utilizando o node vamos usar o common.js
module.exports = class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
};
