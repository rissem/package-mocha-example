package-mocha-example
=====================

Example app showing how mocha can be used to test Meteor packages
(currently experimental, use at your own risk)


## Getting Started

To include mocha package tests, add an on_test block like the following

```javascript
Package.on_test(function(api, where){
  api.use("mike:mocha-package@0.4.7");
  api.add_files(['server.js'], "server");
  api.add_files(['client.js'], "client");
  api.add_files(['serverTest.js'], "server");
  api.add_files(['clientTest.js'], "client");
});
```

Here are a few example tests to get you started
```javascript
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
```

For more examples check out some of the examples
https://github.com/rissem/package-mocha-example/blob/master/packages/fake:asteroid/clientTest.js
https://github.com/rissem/package-mocha-example/blob/master/packages/fake:asteroid/commonTest.js
https://github.com/rissem/package-mocha-example/blob/master/packages/fake:asteroid/serverTest.js
https://github.com/rissem/package-mocha-example/blob/master/packages/fake:comet/commonTest.js

To run your tests

`meteor test-packages --driver-package mike:pkgtest [package name]`

#### This project is sponsored by Respond.ly
