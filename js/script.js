// Constante para capturar os dados do formulário.
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');


function handleSubmit(e) {
    e.preventDefault();
        if(!inputValue.value || inputValue.value <= 0 ) {
            alert('Informe um valor correto!');
            return;
        } else if(!selectedCurrency.value || selectedCurrency.value <= 0) {
            alert('Escolha uma moeda!');
            return;
        }
    converter();
    getCurrency(currency);
};

function converter(){
    if(selectedCurrency.value === 'eur') {
        valueConverted = inputValue.value / 6.22;
        result.innerHTML = valueFormartter('pt-BR', 'EUR');
    } else if(selectedCurrency.value === 'dol') {
        valueConverted = inputValue.value / 5.37;
        result.innerHTML = valueFormartter('en-US', 'USD');
    }

    inputValue.value = '';
    selectedCurrency.value = '';

};

function valueFormartter(locale, currency) {
    const value = valueConverted.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`});
    return `${value}`;
};

