console.log('sejour.js')

let typeSelect = document.querySelector('#type')
let previewImg = document.querySelector('.card-img-top')
typeSelect.addEventListener('change', updateImage)

function updateImage() {

    console.log(typeSelect.value)
    previewImg.src = "./img/" + typeSelect.value + ".jpg"
}
console.error("oskour")