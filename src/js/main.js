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

function genBSNavBar() {
    var navBarItems = [
        ["index.html", "Home"],
        ["about.html", "About"],
        ["resume.html", "Resume"],
        ["fizzbuzz.html", "FizzBuzz"]
    ]
    var numNavBarItems = navBarItems.length;
    
    document.getElementById("navbar").innerHTML += '<nav class="navbar navbar-inverse">'
    document.getElementById("navbar").innerHTML += '<div class="container-fluid">'
    document.getElementById("navbar").innerHTML += '<div class="navbar-header"><a class="navbar-brand" href="indexNEW.html">Steven Zamborsky</a></div>'
    document.getElementById("navbar").innerHTML += '<ul class="nav navbar-nav">'
    for (var i = 0; i < numNavBarItems; i++) {
        document.getElementById("navbar").innerHTML += '<li class="active"><a href="'+navBarItems[i][0]+'">'+navBarItems[i][1]+'</a></li>'
    }
    document.getElementById("navbar").innerHTML += "</ul>"
    document.getElementById("navbar").innerHTML += "</div>"
    document.getElementById("navbar").innerHTML += "</nav>"
    alert(document.getElementById("navbar").innerHTML)
}


 /*<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header"><a class="navbar-brand" href="indexNEW.html">Steven Zamborsky</a></div>
        <ul class="nav navbar-nav">
            <li class="active"><a href="indexNEW.html">Home</a></li>
            <li>
                <a href="about.html">About me</a>
            </li>
            <li>
                <a href="resume.html">Resume</a>
            </li>
            <li>
                <a href="fizzbuzz.html">Fizzbuzz</a>
            </li>
        </ul>
    </div>
</nav> */