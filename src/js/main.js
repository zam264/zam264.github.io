let myGrid
let gridOptions

// TODO: Polling to automatically refresh values

window.onload=function(){
    // Bind to the 'Refresh' button
    document.querySelector("#add").addEventListener("click", addRow) 
    document.querySelector("#delete").addEventListener("click", deleteRow) 
    document.querySelector("#refresh").addEventListener("click", refreshValues)   
    document.querySelector("#reset").addEventListener("click", resetRows)   
    setSymbols("BTC")
    refreshValues()
}

let getSymbols = () => {
    if (typeof(Storage) !== "undefined") {
        return localStorage.getItem("symbols")
    }
    else { alert("Sorry, your browser does not support Web Storage...") }    
}

let setSymbols = (symbols) => {
    symbols = symbols.replace(/ /g,'')
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("symbols", symbols)
    }
    else { alert("Sorry, your browser does not support Web Storage...") }  
}

let resetSymbols = () => {
    // TODO: fix scenarios where the grid has NO data
    if (typeof(Storage) !== "undefined") {
        localStorage.clear()
        setSymbols("BTC")
    }
    else { alert("Sorry, your browser does not support Web Storage...") }  
}

let deleteRow = () => {
    // Get the currently selected row
    let selectedRow = gridOptions.api.getSelectedRows();
    // Make sure we have a row selected to delete, if not don't and disable the "Delete" button
    if(selectedRow.length > 0){
        setSymbols(deleteValue(getSymbols(), selectedRow[0].symbol))
        refreshValues()
    }
    else{
        document.querySelector("#delete").disabled = true
    }
}

let addRow = () => {
    // Get the new symbol from the user
    let newSymbol = prompt("Enter new symbol.")
    // Remove any whitespace
    newSymbol = newSymbol.replace(/ /g,'')
    newSymbol = newSymbol.toUpperCase()
    // TODO: add check to see if added symbol is valid
    setSymbols(addValue(getSymbols(), newSymbol))
    refreshValues()
}

let resetRows = () => {
    resetSymbols()
    refreshValues()
}

let deleteValue = (list, value, separator) => {
    separator = separator || ","
    var values = list.split(separator)
    for(var i = 0 ; i < values.length; i++) {
        if(values[i] == value) {
            values.splice(i, 1)
            return values.join(separator)
        }
    }
    return list;
}

let addValue = (list, value, separator) => {
    separator = separator || ","
    var values = list.split(separator)
    if(values.indexOf(value) == -1) {
        values.push(value)
        return values.join(separator)
    }
    return list
}


let refreshValues = async () => {
    // Get the symbols that are currently defined local storage
    let symbols = getSymbols()
    if(symbols){
        // Remove all "spaces" and split on commas
        symbols = symbols.replace(/ /g,'').split(",")
        // Get the prices for each symbol in symbols array
        symbols = await getCryptoPrices(symbols)
        // Update the crypto price object
        symbols = await restructureCryptoPrices(symbols)
    }
    // Update the crypto prices in the ag-grid
    updateCryptoPrices(symbols)
    // Reset the delete button
    document.querySelector("#delete").disabled = true
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
    // let columnDefs = Object.keys(prices[0]).map( key => {
    //     return {headerName: key.toUpperCase(), field: key, width:105}
    // })
    let columnDefs = [
        {headerName:"SYMBOL", field: "symbol", width: 105},
        {headerName:"CURRENCY", field: "currency", width: 105},
        {headerName:"PRICE", field: "price", width: 105},
    ]

    let rowData = prices

    gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        onSelectionChanged: onSelectionChanged,
        rowSelection: 'single',
    }

    var eGridDiv = document.querySelector('#myGrid')

    if(myGrid){
        myGrid.destroy()
        myGrid = new agGrid.Grid(eGridDiv, gridOptions)
    }
    else{
        myGrid = new agGrid.Grid(eGridDiv, gridOptions)
    }

    document.getElementById("refreshTime").innerHTML = "Last refresh: " + new Date().toLocaleString()
}

let onSelectionChanged = () => {
    document.querySelector("#delete").disabled = false
}

let updateWithError = async (error) => {
    let cryptoValues = document.getElementById('cryptoValues')
    cryptoValues.innerHTML = ''
    
    let cryptoDiv = document.createElement('div')
    cryptoDiv.className = 'crypto-text'
    cryptoDiv.innerHTML = error
    cryptoValues.appendChild(cryptoDiv)
}