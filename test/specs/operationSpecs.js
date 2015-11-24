(function() {
  var selectInDropdown = function (dropdown, optionValue) {
    if(!optionValue) {
      return;
    }
    dropdown.all(by.tagName('option'))
    .then(getClickMatchingOptionClosure(optionValue));
  };

  var getClickMatchingOptionClosure = function(expectedValue) {
    return function(options) {
      for (var i = 0; i < options.length; i++) {
        var option = options[i];
        clickIfMatchingOption(options[i], expectedValue);
      }
    };
  };

  var clickIfMatchingOption = function (option, expectedValue) {
    option.getWebElement().getInnerHtml().then(function(optionValue) {
      if(optionValue === expectedValue) {
        option.click();
      }
    });
  };

  describe('Super Calculator', function() {
    var firstOp = element(by.css('input[ng-model=first]'));
    var secondOp = element(by.css('input[ng-model=second]'));
    var calculateButton = element(by.id('gobutton'));
    var result = element(by.css('h2.ng-binding'));
    var operator = element(by.css('select[ng-model=operator]'));

    beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should return 3 for 1 + 2', function() {
      firstOp.sendKeys(1);
      secondOp.sendKeys(2);

      calculateButton.click();

      expect(result.getText()).toEqual('3');
    });

    it('should return 2 for 3 - 1', function() {
      firstOp.sendKeys(3);
      secondOp.sendKeys(1);
      selectInDropdown(operator, '-');

      calculateButton.click();

      expect(result.getText()).toEqual('2');
    });
  });

})();
