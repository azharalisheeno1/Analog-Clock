let hr = document.getElementById("hour");
let min = document.getElementById("mins");
let sec = document.getElementById("seconds");

function displaytime(){
    let date = new Date();
    //getting hour, mins, seconds from date method
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    hr.style.transform = `rotate(${mRotation}deg)`;
    hr.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displaytime, 1000);