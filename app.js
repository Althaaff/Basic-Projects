const p = document.getElementById('p');
const searchBtn = document.getElementById('searchBtn');


searchBtn.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    

    if (input !== " ") {  // input !== " " it means if  input field is not have any value then inside code regExp code will excute //
        let regExp = new RegExp(input, 'gi')
        p.innerHTML = p.textContent.replace(regExp, "<mark>$&</mark>");
    }
});





// Here replaced the fox into cat using replace():
// const sentence = "The quick brown fox jumps over the lazy dog."
// const replaceSentence = sentence.replace(/fox/, "cat");
// console.log(replaceSentence);


// Here search the index position of the string :
// const sentence = "The Quick brown fox jumps over the lazy Dog";
// const position = sentence.search(/fox/);

// console.log(position);    //output is 16 .



// now using new keyword for RegExp :
// const pattern = new RegExp("hello");

// const text = "hello, world!";

// if(pattern.test(text)) {
//     console.log("Pattern found!");
// }
// else {
//     console.log("Pattern not Found!");
// }

// g for globally all "n" in the string will  replace :
// if  without g it will come only first n will come :
// if u adds i then N also will come : 
// const text = "apple orange apple banaNa";
// const pattern = /n/gi;

// const result = text.replace(pattern, "<mark>$&</mark>");

// console.log(result);
// Output: "<mark>apple</mark> orange apple banana"

// Understood //


