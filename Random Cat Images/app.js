const url = "https://api.thecatapi.com/v1/images/search";  // api url


const section = document.querySelector('.container');
const button = document.querySelector('.btn');

button.addEventListener('click', getRandomCats);


randomCatPhoto = (json) => {
    let photo = json[0].url;
    section.classList.add('cats');
    let image = document.createElement('img');
    image.src = photo;
    image.classList.add('random_cats');
    image.alt = photo;
    section.appendChild(image);
};




async function getRandomCats() {
    section.innerHTML = " ";
    try {
       const response = await fetch(url);
       const json = await response.json();
       console.log("JSON:", json);
       return randomCatPhoto(json);
    }catch {
        console.log('This is Error..!');
    }
}



