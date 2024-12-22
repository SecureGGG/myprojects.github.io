if (localStorage.getItem("score") === null) {
    localStorage.setItem("score", 0)
}

if (localStorage.getItem("HighScore") === null) {
    localStorage.setItem("HighScore", 0)
}


document.getElementById("Last-Score").innerHTML = "Score: " + localStorage.getItem("score")

