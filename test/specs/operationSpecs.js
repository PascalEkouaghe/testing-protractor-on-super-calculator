describe('Super Calculator', function() {
  it('should return 3 for 1 + 2', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    element(by.css('input[ng-model=first]')).sendKeys(1);
    element(by.css('input[ng-model=second]')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect(element(by.css('h2.ng-binding')).getText()).toEqual('3');
  });
});
