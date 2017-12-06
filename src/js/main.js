function genNavBar() {
    var navBarItems = [
        ["index.html", "Home"],
        ["about.html", "About"],
        ["resume.html", "Resume"],
        ["fizzbuzz.html", "FizzBuzz"]
    ]
    var numNavBarItems = navBarItems.length;

    //<button type="button" class="element headerButtons" onclick="location.href='about.html'">About</button>

    for (var i = 0; i < numNavBarItems; i++) {
        document.getElementById("header").innerHTML += "<button type=\"button\" class=\"element headerButtons\" onclick=\"location.href='" + navBarItems[i][0] + "'\">" + navBarItems[i][1] + "</button>"


        //document.getElementById("header").innerHTML += "<td>" + "<a href=" + navBarItems[i][0] + " id='navLink'>" + navBarItems[i][1] + "</a></td>";
    }
}