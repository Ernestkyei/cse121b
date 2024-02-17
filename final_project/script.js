
let api =`https://v6.exchangerate-api.com/v6/${apiKey}53cd2e28426f5d97a49e23e6/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const topDropDown = document.getElementById("to-currency-select");

//create dropdown from the currencies  array
currencies.forEach((currency) =>{
    const  option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);

});


//same thing for the other dropdown
currencies.forEach((currency) =>{
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    topDropDown.add(option);

});

//setting default values
fromDropDown.value = "USD";
topDropDown.value = "AUD";

let convertCurrency = () =>{
    //references
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = topDropDown.value;


    //If amount input field is not empty
    if(amount.length != 0){
        fetch(api)
        .then(resp => resp.json())
        .then(data => {
            let fromExchangeRate = data.conversion_rates
            [fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`

        });
    }
    else{
        alert("Please fill in the amount");
    }
};

document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load",convertCurrency);

