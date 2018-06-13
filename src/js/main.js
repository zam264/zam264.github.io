// TODO: Polling to automatically refresh values
// TODO: Allow user to enter CSV string of values to get

let cryptoValues = ["BTC","ETH","LTC","XRP","BAT","TRX"];

window.onload=function(){
    document.querySelector("#refresh").addEventListener("click", refreshValues)   
}

let refreshValues = async () => {
    let prices = await getCryptoPrices(cryptoValues)
    updateCryptoPrices(prices)
}

let getCryptoPrices = async (cryptoSymbols) => {
    let url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoSymbols.join()}&tsyms=USD`;
    let prices = await fetch(url)
    prices = await prices.json()
    return prices
}

let updateCryptoPrices = async (prices) => {
    let pricesArray = []
    Object.keys(prices).forEach( key => {
        let newPrice = {}
        newPrice[key] = prices[key]
        pricesArray.push(newPrice)
    })
    prices = pricesArray

    prices.forEach(price => {
        let symbol = Object.keys(price)[0]
        let currency = Object.keys(Object.values(price)[0])[0]
        let value = Object.values(Object.values(price)[0])[0]
        document.getElementById(symbol).innerHTML = symbol + " - " + currency + " : " + value
    });
}

// function updateCryptoPrices(response, item, index) {
//     var responseValue = response[item].USD;
//     var currentDollarAmt = document.getElementById(item).innerHTML.split('$')[1];
//     responseValue = parseFloat(responseValue);
//     currentDollarAmt = parseFloat(currentDollarAmt);
//     var difference = responseValue - currentDollarAmt;
//     difference = Math.round(difference * 100000) / 100000;
//     if (difference < 0) {
//         document.getElementById(item).style.color = "red";
//     }
//     else if (difference > 0) {
//         document.getElementById(item).style.color = "greenyellow";
//     }

//     if (document.getElementById(item).innerHTML == "") {
//         document.getElementById(item).innerHTML = `${item} - $${responseValue}`;
//         document.getElementById("refreshTime").innerHTML = "Last refresh: " + new Date().toLocaleString();
//     }
//     else if (difference != 0) {
//         document.getElementById(item).innerHTML = `${item} - $${responseValue} (${difference})`;
//         document.getElementById("refreshTime").innerHTML = "Last refresh: " + new Date().toLocaleString();
//     }
//     console.log(`item: ${item} | index: ${index} | response: ${responseValue}`);
// }
