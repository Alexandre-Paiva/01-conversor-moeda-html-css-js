


const url ='https://economia.awesomeapi.com.br/json/last/';
const coins ='USD-BRL,EUR-BRL';

fetch(url + coins)
    .then(function(res){
        return res.json()
})
.then(function(data){
    const dolarReal = data.USDBRL
    const euroReal = data.EURBRL

    let estaData = new Date(dolarReal.create_date)

    document.getElementById('title').innerHTML = dolarReal.name;
    document.getElementById('thisdate').innerHTML = estaData.toLocaleString();
    document.getElementById('maxvalue').innerHTML = parseFloat(dolarReal.high).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    document.getElementById('minvalue').innerHTML = parseFloat(dolarReal.low).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
});

