

let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById('get-meme-btn');


// API url :
let url = "https://meme-api.com/gimme/";
// Array of subreddits of your choice :
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

// Function to get random Memes :
let getMeme = () => {
    // Choose a random subreddits from the subreddits array :
    let randomSubreddits = 
        subreddits[Math.floor(Math.random()  * subreddits.
        length)];
    
    // fetch data from the API :
    fetch(url + randomSubreddits)
    .then((response) => response.json()).
    then((data) => {
        let memeImg = new Image();
        // Display only image and title after the image loads
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerHTML = data.title;
        }

        memeImg.src = data.url;
    })
}


// Call the getMeme() on button click and on window load :
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
