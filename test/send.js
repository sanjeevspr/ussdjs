const ussdjs = require('..');



var ussd = ussdjs();

QUnit.test("Converts to xml on send", function(assert) {
  var expectedRespones = ('<request><headertext>header</headertext></request>');
  const options = {
    'onSend': (data) => {
        assert.ok(data == expectedResponse);
      },
    'onReceive': (data) => {}
  };
  ussd.configure(options)
});
