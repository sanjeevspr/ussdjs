'use strict';
const util = require('util');
const EventEmitter = require('events');

// Convert text to required xml
const format = (text) => {
  return text;
};

function send(text, endSession, callback) {
  var endSession = endSession ? endSession : false;
  var callback = callback ? callback : 'localhost';
  var msg = format(text);
  this.emit('onSend', msg);
};

function receive(request) {
  var response = parse(request);
  this.emit('onReceive', response)
};

const createApplication = (options) => {
  function MyEventEmitter() {
     EventEmitter.call(this);
  };
  util.inherits(MyEventEmitter, EventEmitter);
  var app = new MyEventEmitter();
  app.on('send', send);
  app.on('receive', receive);
  return app;
};

exports = module.exports = createApplication
