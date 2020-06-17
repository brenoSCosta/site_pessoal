function openNav() {

    var na = document.getElementById("navigation");
    var ico = document.getElementById("threeline-icon");

    if (na.className === "navigation") {
        na.className += " menujs";
        ico.innerHTML = "&Cross;";

    } else {
        na.className = "navigation";
        ico.innerHTML = "&#9776";
    }

}