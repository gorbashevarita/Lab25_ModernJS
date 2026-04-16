const input = document.getElementById('input');
const output = document.getElementById('output');
const currency_input = document.getElementById('currency_input');
const currency_output = document.getElementById('currency_output');
const button_green = document.getElementById('button-green');
const button_red = document.getElementById('button-red');

const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 148.5,
  RUB: 90,
  CNY: 7.25
};

function convertCurrency(amount, fromCurrency, toCurrency) {
  const amountInUSD = amount / exchangeRates[fromCurrency];
  const result = amountInUSD * exchangeRates[toCurrency];
  return Math.round(result * 100) / 100;
}

button_green.addEventListener('click', function() {
  const amount = Number(input.value);

  if(!input.value) {
    alert('===    Пожалуйста, введите СУММУ для конвертации!    ===');
    return;
  }
  if(currency_input.value === '') {
    alert('===    Пожалуйста, введите ВАЛЮТУ ИЗ которой КОНВЕРТИРУЕМ!    ===');
    return;
  }
  if (currency_output.value === '') {
    alert('===    Пожалуйста, введите ВАЛЮТУ, В которую КОНВЕРТИРУЕМ!    ===');
    return;
  }

  const fromCurrency = currency_input.value;
  const toCurrency = currency_output.value;
  const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
  output.value = convertedAmount;
  output.style.backgroundColor = '#65ca87';
});

button_red.addEventListener('click', function() {
    input.value = '',
    currency_input.value = '',
    currency_output.value = '', 
    output.value = ''
    output.style.backgroundColor = '#faebd7';
}); 

