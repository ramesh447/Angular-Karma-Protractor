// spec.js
/**
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});**/
describe('HelloController', function () {

  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('initially has a greeting', function () {
    expect(element(by.id('greeting')).getText()).toEqual('Hello, World!');
  });

  it('clicking the button changes the greeting if text is inputed', function () {
    element(by.css('[ng-model="newText"]')).sendKeys('Hi!');
    element(by.css('.btn-default')).click();
    expect(element(by.id('greeting')).getText()).toEqual('Hi!');
  });

  it('clicking the button does not change the greeting if text is not inputed', function () {
    element(by.css('.btn-default')).click();
    expect(element(by.id('greeting')).getText()).toEqual('Hello, World!');
  });

});
