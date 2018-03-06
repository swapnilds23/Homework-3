(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function PaymentHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  PaymentHandler.prototype.addSubmitHandler = function() {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });

      var message = 'Thank you for your payment, ';
      if (data.title) {
        message += data.title + ' ';
      }
      if (data.username) {
        message += data.username + '.';
      }

      $('#ex1').append('<p>' + message + '</p>');
      $('#ex1').modal();
    });
  };

  App.PaymentHandler = PaymentHandler;
  window.App = App;
})(window);
