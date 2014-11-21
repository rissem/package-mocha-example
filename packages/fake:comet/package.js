Package.describe({
  name: 'fake:comet',
  summary: "comet - a purely illustrative package",
  version: "0.0.1"
});

Npm.depends({'snappy': '3.0.4'});

//TODO break this out into a separate package and depend weakly
//Require npm assertion library if it doesn't exist..
//Npm.depends({chai: "1.9.0"});

Package.on_use(function (api, where) {
  api.addFiles(['server.js'], "server");
  api.addFiles(['client.js'], "client");
  api.addFiles(['common.js'], ["client", "server"]);
});


Package.on_test(function(api, where){
  api.use("fake:untested");
  api.use("mike:mocha-package@0.4.5");
  api.addFiles(['server.js'], "server");
  api.addFiles(['client.js'], "client");
  api.addFiles(['common.js'], ["client", "server"]);
  api.addFiles(['commonTest.js'], ["client", "server"]);
});

