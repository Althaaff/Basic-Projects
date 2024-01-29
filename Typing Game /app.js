const main = document.querySelector('.main');

const typeArea = document.querySelector('.typingArea');

const btn = document.querySelector('.btn');


const words = [
    "A day in the life of a Programmer",
    "What is javascript",
    "What is React",
    "What is Programming language?",
    "What's Your name?",
    "Where are you from?",
    "That is Just Random Words",
    "What is Remix.js ?",
    "New Technologies",
    "Is Programming hard?",
    "Why do u wanna became a Programmer?",
    "Which programming language u like most",
    "What is Golang? and why do u wanna learn it",
    "what is CSS",
];



const game = {
    start: 0, end: 0, user: '', arrText: "", 
}

btn.addEventListener('click', () => {
    if (btn.textContent === "Start") {
        play();
        typeArea.value = " " 
        typeArea.disabled =  false;
    } 

    else if (btn.textContent === 'Done') {
        typeArea.disabled = true;
        main.style.borderColor =  "White"
        end();
    }
});


function play() {
    let randText = Math.floor(Math.random() * words.length)
    main.textContent = words[randText];
    game.arrText = words[randText];
    main.style.borderColor = "#c8c8c8";
    btn.textContent = 'Done'
    const duration = new Date();
    game.start = duration.getTime(); /// unix timestamp
}



function end() {
    const duration = new Date();
    game.end = duration.getTime();
    const totalTime = (game.end - game.start) / 1000;
    game.user = typeArea.value;
    const correct = results();
    main.style.borderColor = "White"
    main.innerHTML = `Time: ${totalTime} Score: ${correct.score} out of ${correct.total}`
    btn.textContent = "Start";
}


function results() {
    let valueOne = game.arrText.split(' ');
    let valueTwo = game.user.split('');
    let score = 0;
    
    valueOne.forEach((word, idx) => {
      if (word === valueTwo[idx]) {
        score++
      }  
    })


    return {score, total: valueOne.length}
}


// End* //