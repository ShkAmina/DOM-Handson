let randomNumber = parseInt(Math.random() *100) + 1;
console.log(randomNumber)

var limit = 100;
function changeme()
{
    // let  Input = document.getElementById('Number');
    let text = document.getElementById('Text')
    let chance = document.getElementById('chance')
    let Number = document.getElementById('Number')
    let body = document.getElementById('body')
    let score = document.getElementById('score')
    let box = document.getElementById('box')

    if(randomNumber > parseInt(Number.value))
    {
   
        text.innerHTML = 'You are too Low!';
        chance.innerText = `💯 Chance : ${--limit}`;
        chance.style.fontSize = '25px'
        
    }
    else if(randomNumber < parseInt(Number.value))
    {
        
        text.innerHTML = 'You are too High!';
        chance.innerText = `💯 Chance : ${--limit}`;
        chance.style.fontSize = '25px'
    }
    else 
    {
       
        text.innerHTML = '🤩🤩 Hurray You Won 🤩🤩';
        chance.innerText = chance.innerHTML;
        body.style.backgroundColor = "green";
        score.innerText = ` 🥇 Highscore : ${limit}`;
        Number.style.backgroundColor = "green";
        Number.style.color = "white";
        score.style.fontSize  = '25px';
        box.innerText = Number.value;

    }
}