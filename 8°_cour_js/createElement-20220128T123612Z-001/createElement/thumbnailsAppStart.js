console.log('thumbnailsApp')

let THUMBNAILS = [
    'https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1611457962168-9679dc470c49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1611149469739-cf4647d61f07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1566573208827-3aa9eadf0ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
];

/*let element = document.createElement("img")
element.src = THUMBNAILS[0]
document.querySelector(".card-body").append(element)*/
let element = []

for (let i = 0; i < THUMBNAILS.length; i++) {
    element[i] = document.createElement("img");
    element[i].src = THUMBNAILS[i]
    element[i].classList.add("img-thumbnail")
    document.querySelector(".card-body").append(element[i]);
}