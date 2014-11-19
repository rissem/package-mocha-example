describe("Asteroid library", function(){
  it("knows how to say hello world", function(){
    chai.assert(true, "working commoners");
  });

  it("asynchronous test that never returns", function(done){
    console.log("Ho Hum");
  });
  
  it("asynchronous test that does return", function(done){
    console.log("Ho Hum");
    done();
  });

  // it("has common code that fails", function(){
  //   chai.assert(false, "failing common code");
  // })

  
});
