describe('bloomFilter', function() {
  var hashTable;
  


  beforeEach(function() {
    bloom = new BloomFilter(200);
  });

  it('should not retrieve a value not in the set', function(){
    bloom.populate();
    expect (bloom.retrieve('nottest')).to.be.false;
  });

  it('should return true to a value in the set', function(){
    bloom.populate();
    expect (bloom.retrieve('test1')).to.be.true;
  });
  
});
