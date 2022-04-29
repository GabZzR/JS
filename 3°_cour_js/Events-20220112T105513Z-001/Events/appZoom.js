let pBouton = document.getElementById("pBouton")
let mBouton = document.getElementById("mBouton")
let monImage = document.getElementById("monImage")
let w = monImage.width

pBouton.addEventListener("click", zoomPlus)
mBouton.addEventListener("click", zoomMoins)

function zoomPlus() {
    w += 25
    monImage.style.width = w + "px";
}

function zoomMoins() {
    w -= 25
    monImage.style.width = w + "px";
}