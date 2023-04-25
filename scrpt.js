//Que - 1
const Text = document.getElementById('text')
console.log(Text);

//Que - 2
const h1 = document.getElementsByTagName('h1')
console.log(h1[0]);

//Que - 3
const Box = document.getElementsByClassName("box")
console.log(Box[0]);

//Que - 4
let text = document.getElementById('change');
text.addEventListener("click",function(){
    text.innerText = "Hello World";
})
//Que - 5
function ChangeText()
{
    let Heading = document.getElementById('h1')
    Heading.innerText = 'Welcome to Elevation academy'
}
//Que - 6

let color = document.getElementById('color');
color.addEventListener("click",function(){
    color.style.color = 'red';
})

//Que - 7
function clickme()
{
    let changeDiamension = document.getElementById('changeDiamension')
    changeDiamension.style.flexDirection = "column"
}
//Que - 9

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + " : " 
            + min + " : " + sec  +  " : " + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();