describe('trie', function() {
  var graph;

  beforeEach(function() {
    trie = new Trie();
  });

  it('should add a new word to the trie', function(){
    // trie.children['c'] = new Trie('c');
    // expect(trie.contains('c')).to.equal({children: {}, value: "c"});
    trie.addWord('cat');
    trie.addWord('car');
    trie.addWord('bat');
    trie.addWord('elephant');
    trie.addWord('air');
    trie.addWord('airfilter');
    trie.addWord('airplane');

    console.log(trie);
  });
});