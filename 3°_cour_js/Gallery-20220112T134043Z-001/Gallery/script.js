let iImage = 1;
let maxImage = 10;
let btnPrev = document.getElementById("btnPrev");
let btnNext = document.getElementById("btnNext");
let imageSelect = document.getElementById("monImage");

btnPrev.addEventListener("click", prevImage);
btnNext.addEventListener("click", nextImage);

function prevImage() {
    iImage--;
    if (iImage == 0) {
        iImage = maxImage;
    }
    imageSelect.src = "Sequence" + iImage + ".jpg";
}

function nextImage() {
    iImage++;
    if (iImage > maxImage) {
        iImage = 1;
    }
    imageSelect.src = "Sequence" + iImage + ".jpg";
}
setInterval(nextImage, 3000);