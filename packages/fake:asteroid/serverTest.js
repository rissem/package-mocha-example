 describe("Asteroid finding", function(){
   before(function(){
     Asteroids.remove({});
     Asteroids.insert({name: "Dinosaur Ender"});
     Asteroids.insert({name: "AlienBringer"});
   })

   it("should be able to find two asteroids", function(){
     chai.assert.equal(Asteroids.find({}).count(), 2);
   });
 });

