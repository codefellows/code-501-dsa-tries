const Trie = require('../src/trie');


describe('#Trie', () => {
  test('The constructor should create a Trie with an empty root node', () => {
    const testTrie = new Trie();
    expect(testTrie.root.children.size).toEqual(0);
    expect(testTrie.root.isWord).toEqual(false);
  });

  test('A simple insertion should create the appropriate nodes', () => {
    const testTrie = new Trie();
    testTrie.insertWord('ba');
    expect(testTrie.root.children.size).toEqual(1);
    expect(testTrie.root.children.has('b')).toEqual(true);
    expect(testTrie.root.children.has('a')).toEqual(false);
    expect(testTrie.root.children.get('b').children.has('a')).toEqual(true);
  });

  test('Testing insert/search combo', () => {
    const testTrie = new Trie();
    testTrie.insertWord('Gregor');
    expect(testTrie.searchWord('Gregor')).toEqual(true);
    expect(testTrie.searchWord('Grego')).toEqual(false);
    expect(testTrie.searchWord('Gregory')).toEqual(false);
  });

  test('Testing complex insert/search combo', () => {
    const testTrie = new Trie();
    testTrie.insertWord('Gregor');
    expect(testTrie.searchWord('Gregor')).toEqual(true);
    expect(testTrie.searchWord('Grego')).toEqual(false);
    expect(testTrie.searchWord('Gregory')).toEqual(false);

    testTrie.insertWord('Grego');
    expect(testTrie.searchWord('Grego')).toEqual(true);

    expect(testTrie.searchWord('Hound')).toEqual(false);
    testTrie.insertWord('Hound');
    expect(testTrie.searchWord('Hound')).toEqual(true);

    testTrie.insertWord('Gregory');
    expect(testTrie.searchWord('Gregory')).toEqual(true);
  });
});
