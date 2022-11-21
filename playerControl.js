const player = document.getElementById('player')

function playEp(url) {
    player.src = url
    player.load()
    player.play()
}