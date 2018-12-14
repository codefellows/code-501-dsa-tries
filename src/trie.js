class TrieNode {
  constructor(isWord) {
    this.isWord = isWord;
    this.children = new Map();
  }
}

module.exports = class Trie {
  constructor() {
    //! Vinicio - starting with an empty root node
    this.root = new TrieNode(false);
  }

  insertWord(word) {
    let currentNode = this.root;
    // --------------------------------------------------------------------------------------------
    // PREFIX
    // --------------------------------------------------------------------------------------------
    for(let i = 0; i < word.length - 1; i++) {//eslint-disable-line
      const currentCharacter = word[i];
      if (!currentNode.children.has(currentCharacter)) {
        currentNode.children.set(currentCharacter, new TrieNode(false));
      }
      currentNode = currentNode.children.get(currentCharacter);
    }
    // --------------------------------------------------------------------------------------------
    // LAST CHARACTER
    // --------------------------------------------------------------------------------------------
    const currentCharacter = word[word.length - 1];
    if (!currentNode.children.has(currentCharacter)) {
      currentNode.children.set(currentCharacter, new TrieNode(true));
    } else {
      currentNode.children.get(currentCharacter).isWord = true;
    }
  }

  searchWord(word) {
    let currentNode = this.root;
    // --------------------------------------------------------------------------------------------
    // PREFIX
    // --------------------------------------------------------------------------------------------
    for(let i = 0; i < word.length - 1; i++) { //eslint-disable-line
      const currentCharacter = word[i];
      if (!currentNode.children.has(currentCharacter)) {
        return false;
      }
      currentNode = currentNode.children.get(currentCharacter);
    }
    // --------------------------------------------------------------------------------------------
    // LAST CHARACTER
    // --------------------------------------------------------------------------------------------
    const currentCharacter = word[word.length - 1];
    if (currentNode.children.has(currentCharacter)
      && currentNode.children.get(currentCharacter).isWord) {
      return true;
    }
    return false;
  }
};
