function genNavBar() {
    var navBarItems = [
        ["index.html", "Home"],
        ["about.html", "About"],
        ["resume.html", "Resume"],
        ["fizzbuzz.html", "FizzBuzz"],
        ["template.html", "Template"]
    ]
    var numNavBarItems = navBarItems.length;
    document.getElementById("navTable").innerHTML += "<tr id='navBar'></tr>";
    for (var i = 0; i < numNavBarItems; i++) {
        document.getElementById("navBar").innerHTML += "<td>" + "<a href=" + navBarItems[i][0] + ">" + navBarItems[i][1] + "</a></td>";
    }
}