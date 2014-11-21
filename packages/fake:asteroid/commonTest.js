describe("Asteroid library", function(){
  it("knows how to say hello world", function(){
    chai.assert(true, "working commoners");
  });

  describe.client("Client", function(){
    it("asynchronous test that never returns", function(done){
      console.log("Ho Hum");
    });
  })

  describe("well behaved asynchronous test", function(){
    it("asynchronous test that does return", function(done){
      // console.log("Ho Hum");
      done();
    });
  });

  it("has common code that fails", function(){
    chai.assert(false, "failing common code");
  })
});
