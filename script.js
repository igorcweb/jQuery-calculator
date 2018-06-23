let firstNumber = '',
  secondNumber = '',
  operator = '',
  result = 0,
  operatorChosen = false;

$('.number').on('click', function() {
  if (!operatorChosen) {
    firstNumber += $(this).val();
    $('#first-number').text(firstNumber);
  } else {
    secondNumber += $(this).val();
    $('#second-number').text(secondNumber);
  }
});
$('.operator').on('click', function() {
  if (!secondNumber) {
    operator = $(this).val();
    switch (operator) {
      case 'plus':
        $('#operator').text(' + ');
        break;
      case 'minus':
        $('#operator').text(' - ');
        break;
      case 'times':
        $('#operator').text(' * ');
        break;
      case 'divide':
        $('#operator').text(' / ');
        break;
      default:
        $('#operator').text(' ** ');
    }
    operatorChosen = true;
  } else {
  }
});

$('.equal').on('click', function() {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  equal = $(this).val();
  switch (operator) {
    case 'plus':
      result = firstNumber + secondNumber;
      $('#result').text(result);
      return;

    case 'minus':
      result = firstNumber - secondNumber;
      $('#result').text(result);
      return;

    case 'times':
      result = firstNumber * secondNumber;
      $('#result').text(result);
      return;

    case 'divide':
      result = firstNumber / secondNumber;
      $('#result').text(result);
      return;

    default:
      result = firstNumber ** secondNumber;
      $('#result').text(result);
      return;
  }
});

$('button.clear').on('click', function() {
  number = '';
  firstNumber = '';
  secondNumber = '';
  operator = '';
  result = 0;
  operatorChosen = false;
  $('#first-number, #operator, #second-number, #result').empty();
});
