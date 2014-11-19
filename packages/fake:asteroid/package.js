Package.describe({
  name: 'fake:asteroid',
  summary: "a purely illustrative package",
  version: "0.0.1"
});

//TODO break this out into a separate package and depend weakly
//Require npm assertion library if it doesn't exist..
//Npm.depends({chai: "1.9.0"});

Package.on_use(function (api, where) {
  api.add_files(['server.js'], "server");
  api.add_files(['client.js'], "client");
});


Package.on_test(function(api, where){
  api.use("mike:mocha");
  api.add_files(['server.js'], "server");
  api.add_files(['client.js'], "client");
  api.add_files(['serverTest.js'], "server");
  api.add_files(['clientTest.js'], "client");
});
