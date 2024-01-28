const container = document.getElementById('content');
let baseURL = "https://source.unsplash.com/random/"
const rows = 7;


for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${baseURL}${randomSize()}`
    container.appendChild(img);
}




// math functionality functions() :
function randomSize() {
  return `${randomNumber()}x${randomNumber()}`;
}

function randomNumber() {
    return Math.floor(Math.random() * 10) * 300;
}
