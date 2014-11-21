Package.describe({
  name: 'fake:asteroid',
  summary: "a purely illustrative package",
  version: "0.0.1"
});

//TODO break this out into a separate package and depend weakly
//Require npm assertion library if it doesn't exist..
//Npm.depends({chai: "1.9.0"});

Package.on_use(function (api, where) {
  api.addFiles(['server.js'], "server");
  api.addFiles(['client.js'], "client");
  api.addFiles(['common.js'], ["client", "server"]);
});


Package.on_test(function(api, where){
  api.use("mike:mocha-package@0.4.5");
  api.addFiles(['server.js'], "server");
  api.addFiles(['client.js'], "client");
  api.addFiles(['common.js'], ["client", "server"]);
  api.addFiles(['serverTest.js'], "server");
  api.addFiles(['clientTest.js'], "client");
  api.addFiles(['commonTest.js'], ["client", "server"]);
});
