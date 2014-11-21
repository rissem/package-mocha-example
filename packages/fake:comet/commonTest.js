describe("Comet library", function(){
  it("knows how to say hello world", function(){
    chai.assert(true, "working commoners");
  });

  // it("asynchronous test that never returns", function(done){
  //   console.log("Ho Hum");
  // });
  
  it("asynchronous test that does return eventually", function(done){
    // console.log("Ho Hum");
    Meteor.setTimeout(function(){
      done();
    }, 1000);
  });

  it("imports PI correctly", function(){
    chai.assert(Package['fake:untested'].PI > 3.1, "PI IS GOOD");
  });
});

describe.server("Snappy", function(){
  it("has a useful compression function", function(){
    console.log(Snappy);
    chai.assert(Snappy.compress, "Snappy has a function called compress");
  });
});

