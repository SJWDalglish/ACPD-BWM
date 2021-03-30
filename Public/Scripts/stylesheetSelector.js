function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");
    var style3 = document.getElementById("stylesheet3");

    style1.onclick = function() {swapStyleSheet("Styles/main.css");};
    style2.onclick = function() {swapStyleSheet("Styles/flat.css");};
    style3.onclick = function() {swapStyleSheet("Styles/flatPhoto.css");};
}

window.onload = initate;