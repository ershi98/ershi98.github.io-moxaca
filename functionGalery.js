document.getElementById("mostrar-mas").addEventListener("click", function(){
    var imagenesOcultas = document.getElementsByClassName("col-lg-4 d-none");
    for (var i = 0; i < imagenesOcultas.length; i++) {
        imagenesOcultas[i].classList.remove("d-none");
    }
});