(function(window) {
  'use strict';
  var PAYMENT_SELECTOR = '[payment-form ="form"]';
  var App = window.App;
  var PaymentHandler = App.PaymentHandler;
  var paymentHandler = new PaymentHandler(PAYMENT_SELECTOR);
  paymentHandler.addSubmitHandler();
})(window);
