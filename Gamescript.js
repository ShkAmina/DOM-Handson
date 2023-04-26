let randomNumber = parseInt(Math.random() *100) + 1;
console.log(randomNumber)

var limit = 100;

let box = document.getElementById('box')
let score = document.getElementById('score')
let text = document.getElementById('Text')
let number = document.getElementById('Number')
let chance = document.getElementById('chance')
let body = document.getElementById('body')

function changeme()
{
    // let  Input = document.getElementById('Number');

    if(randomNumber > parseInt(number.value))
    {
   
        text.innerHTML = 'You are too Low!';
        chance.innerText = `💯 Chance : ${--limit}`;
        chance.style.fontSize = '25px'
        number.style.color = "black";
        
    }
    else if(randomNumber < parseInt(number.value))
    {
        
        text.innerHTML = 'You are too High!';
        chance.innerText = `💯 Chance : ${--limit}`;
        chance.style.fontSize = '25px'
        number.style.color = "black";

    }
    else 
    {
       
        text.innerHTML = '🤩🤩 Hurray You Won 🤩🤩';
        chance.innerText = chance.innerHTML;
        body.style.backgroundColor = "green";
        score.innerText = ` 🥇 Highscore : ${limit}`;
        number.style.backgroundColor = "green";
        number.style.color = "white";
        score.style.fontSize  = '25px';
        box.innerText = number.value;

    }
}
let resetButton = document.querySelector("#Play");
resetButton.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() *100) + 1;
    text.innerHTML = 'Start guessing...';
    number.value = "";
    box.innerText = '?';
    score.innerText = `🥇 Highscore : 0 `;
    chance.innerText = `💯 Chances : 100`;
    body.style.backgroundColor = "#2A2F4F";
    number.style.backgroundColor = "white";
    number.style.color = "black";

   
  });