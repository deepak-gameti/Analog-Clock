//make all the variables here
const hour = document.querySelector("#hour");
const minut = document.querySelector("#minute");
const second = document.querySelector("#second");

//this is the main function
setInterval(() => {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let hrotate = h * 30 + m/2;
    let mrotate = m * 6;
    let srotate = s * 6;

    hour.style.transform = `rotate(${hrotate}deg)`
    minut.style.transform = `rotate(${mrotate}deg)`
    second.style.transform = `rotate(${srotate}deg)`
}, 1000);