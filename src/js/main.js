document.addEventListener("DOMContentLoaded", function () {
    getCryptoPrices();
});

function getCryptoPrices() {
    var cryptoValues = ["BTC", 
                        "ETH", 
                        "LTC",
                        "XRP",
                        "BAT",
                        "TRX"];
    var temp = cryptoValues;
    var xhttp = new XMLHttpRequest();
    var url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoValues.join()}&tsyms=USD`;
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function (aEvt) {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                //  alert(xhttp.responseText);
                var response = JSON.parse(xhttp.responseText);
                cryptoValues.forEach(updateCryptoPrices.bind(null, response))
            }
            else
                alert("Error loading page\n");
        }
    };
    xhttp.send();
    setTimeout(getCryptoPrices, 5000);
}


function updateCryptoPrices(response, item, index){
    var responseValue = response[item].USD;
    document.getElementById(item).innerHTML = `${item} - $${responseValue}`;
    
    console.log(`item: ${item} | index: ${index} | response: ${responseValue}`);    
}