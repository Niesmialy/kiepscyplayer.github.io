const player = document.getElementById('player')

function playEp(url) {
    player.src = url
    player.controls = true
    player.loop = false
    player.muted = false
    player.load()
    player.play()
}