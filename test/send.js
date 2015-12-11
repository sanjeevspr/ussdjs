const ussdjs = require('..');



var ussd = ussdjs();

QUnit.test("Converts to xml on send", function(assert) {
  var expectedResponse = '\
    <request><headertext>header</headertext>\
    <options>\
      <option callback="localhost" command="1" display="false" order="1" />\
    </options>\
    </request>';
  ussd.once('onSend',  (data) => {
      assert.equal(data, expectedResponse);
  });
  ussd.emit('send', 'header');
});

QUnit.test("Parses menu correctly on send", function(assert) {
  var expectedResponse = '\
    <request><headertext>menu</headertext>\
    <options>\
      <option callback="localhost" command="1" display="true" order="1">option1</option>\
      <option callback="localhost" command="2" display="true" order="2">option2</option>\
    </options>\
    </request>';
  ussd.once('onSend',  (data) => {
      assert.equal(data, expectedResponse);
  });
  ussd.emit('send', 'menu\noption1\noption2');
});

QUnit.test("Ends ussd session correctly", function(assert) {
  var expectedResponse = '<request><headertext>header</headertext></request>';
  ussd.once('onSend',  (data) => {
      assert.equal(data, expectedResponse);
  });
  ussd.emit('send', 'header', true)
});
