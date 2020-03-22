const chainMaker = {
  chain: [],

  getLength() {
    this.chain.length;
    return this;
  },

  addLink(value) {
    this.chain.push(value)
    return this;
  },

  removeLink(position) {
    if (isNaN(position) ||
      position - 1 < 0 ||
      this.chain[position] === undefined) {
      this.chain = [];
      throw new Error();
    }
    else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let final = '';

    this.chain.forEach((el, index) => {
      if (index == 0) {
        final += `( ${el} )`
      }
      else {
        final += `~~( ${el} )`
      }
    });
    this.chain = [];
    return final;
  }
};

module.exports = chainMaker;
