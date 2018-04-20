document.addEventListener("DOMContentLoaded", function () {
    var cryptoValues = ["BTC",
        "ETH",
        "LTC",
        "XRP",
        "BAT",
        "TRX"];
    getCryptoPrices(cryptoValues);
});

function getCryptoPrices(cryptoValues) {
    var xhttp = new XMLHttpRequest();
    var url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoValues.join()}&tsyms=USD`;
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onload = function (e) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                var response = JSON.parse(xhttp.responseText);
                cryptoValues.forEach(updateCryptoPrices.bind(null, response));
                setTimeout(function () {
                    getCryptoPrices(cryptoValues);
                }, 5000)
            } else {
                console.error(xhttp.statusText);
            }
        }
    };
    xhttp.onerror = function (e) {
        console.error(xhttp.statusText);
    };
    xhttp.send();
}

function updateCryptoPrices(response, item, index) {
    var responseValue = response[item].USD;
    var currentDollarAmt = document.getElementById(item).innerHTML.split('$')[1];
    responseValue = parseFloat(responseValue);
    currentDollarAmt = parseFloat(currentDollarAmt);
    var difference = responseValue - currentDollarAmt;
    difference = Math.round(difference * 100000) / 100000;
    if (difference < 0) {
        document.getElementById(item).style.color = "red";
    }
    else if (difference > 0) {
        document.getElementById(item).style.color = "greenyellow";
    }

    if (document.getElementById(item).innerHTML == "") {
        document.getElementById(item).innerHTML = `${item} - $${responseValue}`;
        document.getElementById("refreshTime").innerHTML = "Last refresh: " + new Date().toLocaleString();
    }
    else if (difference != 0) {
        document.getElementById(item).innerHTML = `${item} - $${responseValue} (${difference})`;
        document.getElementById("refreshTime").innerHTML = "Last refresh: " + new Date().toLocaleString();
    }
    console.log(`item: ${item} | index: ${index} | response: ${responseValue}`);
}