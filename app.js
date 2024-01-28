let indecator = document.querySelector('.scroll-indicator .progress');
let scrollHeight  = document.documentElement.scrollHeight - document.documentElement.clientHeight;


window.addEventListener('scroll', scroll);  // "window is == this" u can add this also //


function scroll(){
   let scrollTop = document.documentElement.scrollTop;
   let scrolled  = (scrollTop / scrollHeight) * 1340;
   indecator.style.width = `${scrolled}%`;
}

