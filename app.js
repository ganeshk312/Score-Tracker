const displays = document.querySelectorAll("span");
const buttons = document.querySelectorAll("button");
let score = [0,0];
let win = 5;

for(let i=0;i<2;i++){
    buttons[i].addEventListener('click',()=>{
        score[i]++;
        displays[i].innerText=`${score[i]}`;
        if(score[i] == win){
            scoreReached(i);
        }
    })
}

buttons[2].addEventListener('click',()=>{
    score=[0,0];
    displays[0].innerText='0';
    displays[1].innerText='0';
    buttons[0].disabled=false;
    buttons[1].disabled=false;
})


function scoreReached(i){
    console.log(`Player ${i+1} won!!!`);
    buttons[0].disabled=true;
    buttons[1].disabled=true;
}