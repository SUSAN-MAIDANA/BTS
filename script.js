function mostrarBio(nombre, bio, imagen){
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-title").innerText = nombre;
    document.getElementById("modal-text").innerText = bio;
    document.getElementById("modal-img").src = imagen;
}

function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event){
    let modal = document.getElementById("modal");
    if(event.target == modal){
        modal.style.display = "none";
    }
}