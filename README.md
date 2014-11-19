package-mocha-example
=====================

Example app showing how mocha can be used to test Meteor packages
(currently experimental, use at your own risk)


## Getting Started

For now you have to work from a [metoer-mocha-web fork](https://github.com/mad-eye/meteor-mocha-web/tree/packageTest) Put this project into your meteor packages directory, but don't add the package (it will only be used for testing)

To include mocha package tests, add an on_test block like the following

```javascript
Package.on_test(function(api, where){
  api.use("mike:mocha");
  api.add_files(['server.js'], "server");
  api.add_files(['client.js'], "client");
  api.add_files(['serverTest.js'], "server");
  api.add_files(['clientTest.js'], "client");
});
```

To run your tests

`meteor test-packages --driver-package practicalmeteor:mocha-web-driver fake:asteroid`
