const send = (text) => {
  // var msg = format(text);
  // this.onSend(msg)
};

const receive = (request) => {
  // var response = parse(request)
  // this.onReceive(request)
};

const configure = (options) => {
  this.onSend = options.onSend;
  this.onReceive = options.onReceive;
};

const createApplication = (options) => {
  var app = {};
  app.configure = configure;
  if (options != null) {app.configure(options)};
  app.send = send;
  return app;
};

exports = module.exports = createApplication
