var divide = function(number1, number2){
  return number1 / number2;
}

var multiply = function(number1, number2){
  return number1 * number2;
}

var subtract = function(number1, number2){
  return number1 - number2;
}

var add = function(number1, number2){
  return number1 + number2;
};


// User Interface //
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var clickAdd = ($("input#radioAdd").val());
    var clickSub = ($("input#radioSubtract").val());
    var clickMul = ($("input#radioMultiply").val());
    var clickDiv = ($("input#radioDivide").val());
    var userInputNum1 = parseInt($("input#userInputNumber1").val());
    var userInputNum2 = parseInt($("input#userInputNumber2").val());
    var resultAdd = add(userInputNum1, userInputNum2)
    var resultDiv = divide(userInputNum1, userInputNum2)
    var resultMul = multiply(userInputNum1, userInputNum2)
    var resultSub = subtract(userInputNum1, userInputNum2)
    var operator = $("input:radio[name=calculatorOperator]:checked").val();
    if (operator === "inputAdd") {
      $("#textResults").text(resultAdd);
    } else if (operator === "inputSub") {
      $("#textResults").text(resultSub);
    } else if (operator === "inputMulti") {
      $("#textResults").text(resultMul);
    } else if (operator === "inputDiv") {
      $("#textResults").text(resultDiv);
    }
});
});
