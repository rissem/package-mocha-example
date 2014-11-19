console.log("RUNNING SERVER TEST");
MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should be able to refresh quickly", function(){
        chai.assert(true, "YEAH!");
      });
    });
});
