var c = document.getElementsByClassName("menu_mobile")[0];
var d = document.getElementsByClassName("drag")[0];
var e = document.getElementsByClassName("menu")[0].getElementsByTagName("i")[0];
c.addEventListener("click", function() {
    if (d.classList.contains("activo") == true) {
        d.classList.replace("activo", "inactivo");
        e.innerHTML = "menu";
    } else {
        d.classList.replace("inactivo", "activo");
        e.innerHTML = "close";
    }
})



/////////////////////


var slider = document.getElementsByClassName("carta")[0].getElementsByTagName("img")[0];

setInterval(function() {
    var img = ["./recursos/ima/cupcake/cupcake_1.jpg", "./recursos/ima/cupcake/cupcake_2.jpg", "./recursos/ima/cupcake/cupcake_4.jpg"];
    if (slider.getAttribute("src") == img[2]) {
        slider.setAttribute("src", img[0])

    } else if (slider.getAttribute("src") == img[0]) {
        slider.setAttribute("src", img[1])

    } else {
        slider.setAttribute("src", img[2]);

    }
}, 5000)