document.addEventListener("DOMContentLoaded", function () {
    getCryptoPrices();
});

function getCryptoPrices() {
    var xhttp = new XMLHttpRequest();
    var url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD';
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function (aEvt) {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                //  alert(xhttp.responseText);
                var response = JSON.parse(xhttp.responseText);
                document.getElementById("BTC").innerHTML = "BTC - $" + response.BTC.USD;
                document.getElementById("ETH").innerHTML = "ETH - $" + response.ETH.USD;
                document.getElementById("LTC").innerHTML = "LTC - $" + response.LTC.USD;
            }
            else
                alert("Error loading page\n");
        }
    };
    xhttp.send();
    setTimeout(getCryptoPrices, 5000);
}
