document.addEventListener('DOMContentLoaded', () => {
  let displayValue = '0';
  let firstOperand = null;
  let secondOperand = null;
  let currentOperator = null;
  let shouldReset = false;

  const display = document.getElementById('display');

  function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    shouldReset = false;
    display.textContent = displayValue;
  }

  function appendNumber(number) {
    if (displayValue === '0' && number === '.') {
      displayValue = '0.';
    } else if (displayValue === '0' || shouldReset) {
      displayValue = number;
      shouldReset = false;
    } else {
      displayValue += number;
    }
    display.textContent = displayValue;
  }

  function setOperator(operator) {
    if (currentOperator !== null) calculate();
    firstOperand = parseFloat(displayValue);
    currentOperator = operator;
    shouldReset = true;
  }

  function calculate() {
    if (currentOperator != '%') {
      if (currentOperator === null || shouldReset) return;
    }
    secondOperand = parseFloat(displayValue);

    switch (currentOperator) {
      case '+':
        displayValue = add(firstOperand, secondOperand).toString();
        break;
      case '-':
        displayValue = subtract(firstOperand, secondOperand).toString();
        break;
      case '×':
        displayValue = multiply(firstOperand, secondOperand).toString();
        break;
      case '÷':
        displayValue = divide(firstOperand, secondOperand).toString();
        break;
      case '%':
        displayValue = percent(firstOperand).toString();
        break;
    }

    firstOperand = parseFloat(displayValue);
    currentOperator = null;
    shouldReset = true;
    display.textContent = displayValue;
  }

  function toggleSign() {
    displayValue = changeSign(parseFloat(displayValue)).toString();
    display.textContent = displayValue;
  }

  function handleButtonClick(event) {
    const target = event.currentTarget;
    const action = target.dataset.action;
    const value = target.textContent;

    switch (action) {
      case 'number':
        appendNumber(value);
        break;
      case 'operator':
        setOperator(value);
        break;
      case 'decimal':
        if (!displayValue.includes('.')) appendNumber('.');
        break;
      case 'clear':
        clearDisplay();
        break;
      case 'toggle-sign':
        toggleSign();
        break;
      case 'percent':
        setOperator(value);
        calculate();
        break;
      case 'equals':
        calculate();
        break;
      default:
        break;
    }
  }

  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', handleButtonClick);
  });
});