// var fizzBuzzBtn = document.getElementById("fizzBuzzBtn");
// if (fizzBuzzBtn) {
//     fizzBuzzBtn.addEventListener("click", test);
// }
function initialize() {
    document.getElementById("fizzBuzzBtn").addEventListener("click", getLimit);
}

function getLimit() {
    var limit = document.getElementById("limit").value;
    if (!limit) {
        alert("Please enter a limit.");
    }
    else {
        fizzBuzz(limit);
    }
}

function fizzBuzz(limit) {
    if (document.getElementById("fizzBuzz").innerHTML) {
        document.getElementById("fizzBuzz").innerHTML = "";
    }
    for (var i = 1; i <= limit; i++) {
        if (i % 15 == 0) {
            document.getElementById("fizzBuzz").innerHTML += (i + " FizzBuzz" + "<br>");
        }
        else if (i % 3 == 0) {
            document.getElementById("fizzBuzz").innerHTML += (i + " Fizz" + "<br>");
        }
        else if (i % 5 == 0) {
            document.getElementById("fizzBuzz").innerHTML += (i + " Buzz" + "<br>");
        }
        else {
            document.getElementById("fizzBuzz").innerHTML += (i) + "<br>";
        }
    }
}