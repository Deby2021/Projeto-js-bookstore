//Como estamos utilizando o node vamos usar o common.js

module.exports = class Author {
  constructor(name, nationality, bio) {
    this.name = name;
    this.nationality = nationality;
    this.bio = bio;
  }
};
