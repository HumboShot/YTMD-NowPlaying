function loadFromHost() {
    window.setInterval(function() {
        console.log('get')
        var url = "http://localhost:9863/query"

        var xhr = new XMLHttpRequest()
        xhr.open("GET", url)
        xhr.responseType = "text"
        xhr.addEventListener("load", updatePage)
        xhr.send();
    }, 1000)
}

function updatePage() {
    var response = JSON.parse(this.responseText)
    document.getElementById("song-title").textContent = response.track.title
    document.getElementById("song-artist").textContent = response.track.author
    document.getElementById("song-cover").src = response.track.cover
}