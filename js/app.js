// alert ('Bienvenidos a mi CV')


function showBlock(buttonId) {
    // tomo todos los otros bloques
    var blocksToHide = document.getElementsByClassName('block');

    // los oculto
    for (var i = 0; i < blocksToHide.length; ++i) {
        var block = blocksToHide[i];
        block.style.display = "none";
    }

    // muestro el que quiero mostrar
    document.getElementById(`block${buttonId}`).style.display = "block";
}


