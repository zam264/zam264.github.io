// TODO: Polling to automatically refresh values

window.onload=function(){
    document.querySelector("#refresh").addEventListener("click", refreshValues)   
    refreshValues()
}

let refreshValues = async () => {
    let symbols = document.getElementById('symbols').value
    symbols = symbols.split(",")

    let prices = await getCryptoPrices(symbols)
    // if(prices.Response )
    prices = await restructureCryptoPrices(prices)
    updateCryptoPrices(prices)
}

let getCryptoPrices = async (cryptoSymbols) => {
    let url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoSymbols.join()}&tsyms=USD`;
    let prices = await fetch(url)
    if(prices.status != 200){
        updateWithError("Error: Non 200 response from CryptoCompare")
        window.stop();
    }
    prices = await prices.json()
    if(prices.Response == "Error"){
        updateWithError("Error: Bad JSON from CryptoCompare")
        throw new Error()
    }
    return prices
}

let restructureCryptoPrices = async (prices) => {
    // Put each crypto into an array
    let pricesArray = []
    Object.keys(prices).forEach( key => {
        let newPrice = {}
        newPrice[key] = prices[key]
        pricesArray.push(newPrice)
    })
    prices = pricesArray
    
    // Restructure the JSON
    prices = prices.map(price => {
        let newPrice = {}
        newPrice.symbol= Object.keys(price)[0]
        newPrice.currency = Object.keys(Object.values(price)[0])[0]
        newPrice.price = Object.values(Object.values(price)[0])[0]
        return newPrice
    });

    return prices
}

let updateCryptoPrices = async (prices) => {
    let cryptoValues = document.getElementById('cryptoValues')
    cryptoValues.innerHTML = ''
    
    prices.forEach(price => {
        let cryptoDiv = document.createElement('div')
        cryptoDiv.id = price.symbol
        cryptoDiv.className = 'crypto-text'
        cryptoDiv.innerHTML = price.symbol + " - " + price.currency + " : " + price.price
        cryptoValues.appendChild(cryptoDiv)
    })

    document.getElementById("refreshTime").innerHTML = "Last refresh: " + new Date().toLocaleString();
}

let updateWithError = async (error) => {
    let cryptoValues = document.getElementById('cryptoValues')
    cryptoValues.innerHTML = ''
    
    let cryptoDiv = document.createElement('div')
    cryptoDiv.className = 'crypto-text'
    cryptoDiv.innerHTML = error
    cryptoValues.appendChild(cryptoDiv)
}