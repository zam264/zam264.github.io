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
}

// function genBSNavBar() {
//     var navBarItems = [
//         ["index.html", "Home"],
//         ["about.html", "About"],
//         ["resume.html", "Resume"],
//         ["fizzbuzz.html", "FizzBuzz"]
//     ]
//     var numNavBarItems = navBarItems.length;
//     //TODO: construct the innerhtml using variables
//     document.getElementById("navbar").innerHTML += '<nav class="navbar navbar-inverse"><div>'
//     document.getElementById("navbar").innerHTML += '<div class="container-fluid">'
//     document.getElementById("navbar").innerHTML += '<div class="navbar-header"><a class="navbar-brand" href="indexNEW.html">Steven Zamborsky</a></div>'
//     document.getElementById("navbar").innerHTML += '<ul class="nav navbar-nav">'
//     for (var i = 0; i < numNavBarItems; i++) {
//         document.getElementById("navbar").innerHTML += '<li class="active"><a href="'+navBarItems[i][0]+'">'+navBarItems[i][1]+'</a></li>'
//     }
//     document.getElementById("navbar").innerHTML += "</ul>"
//     document.getElementById("navbar").innerHTML += "</div>"
//     document.getElementById("navbar").innerHTML += "</nav>"
//     alert(document.getElementById("navbar").innerHTML)
// }