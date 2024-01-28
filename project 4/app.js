// img-wrapper :
let images = document.querySelectorAll('img');
// wrapper :
let wrapper = document.getElementById('wrapper');
// imgWrapper :
let imgWrapper = document.getElementById('fullImg');
// close :
let close = document.querySelector('span');



images.forEach((img, index) => {
     img.addEventListener('click', () => {
        openModal(`images/img-${index}.jpg`);  // img-[index number] img-1 is 0. img-2 is 1...etc... 
     });
})


close.addEventListener("click", () => {
    wrapper.style.display = "none"
})


function openModal(pic) {
   wrapper.style.display = "flex";
   imgWrapper.src = pic;       // src is img URL  source above thats y that src //
}
















// Testing purpose :
// console.log(images);
// console.log(wrapper);
// console.log(imgWrapper);
// console.log(close);

