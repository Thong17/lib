let text = document.querySelector('.fancy');
let strText = text.textContent;


const splitText = strText.split("");
text.textContent = "";
console.log(splitText);
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>"+ splitText[i] +"</span>";
    
}

let char = 0;
let timer = setInterval(onTick, 5000);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    console.log(char)
    char++
    if(char===splitText.length){
        complete();
        return;
    }

}
function complete(){
    clearInterval(timer);
    timer=null;
}