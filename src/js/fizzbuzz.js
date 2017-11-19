function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
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