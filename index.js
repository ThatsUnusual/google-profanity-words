export class ProfanityEngine {
  constructor() {
    const data = require("./data/list.json");
    this.terms = data.words;
  }

  all() {
    return this.terms;
  }

  search(term) {
    let result = this.terms.indexOf(term);
    return result > -1 ? true : false;
  }
}
