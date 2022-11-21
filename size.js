function updateSize() {
    var winheight = window.innerHeight
    document.getElementById('listaOdcinkow').height = winheight - 30
    document.getElementById('player').height = winheight - 30
}

updateSize()
window.onresize = updateSize