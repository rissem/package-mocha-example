Package.describe({
  name: 'fake:untested',
  summary: "an untested package",
  version: "0.0.1"
});

//TODO break this out into a separate package and depend weakly
//Require npm assertion library if it doesn't exist..
//Npm.depends({chai: "1.9.0"});

Package.on_use(function (api, where) {
  api.addFiles(['pi.js'], ["server", "client"]);
  api.export(['PI'], ['client', 'server']);
});
