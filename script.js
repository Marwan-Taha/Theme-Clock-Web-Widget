const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', ()=>{
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    if(html.classList.contains('dark')){
        toggle.innerHTML = 'Light mode';
    } else {
        toggle.innerHTML = 'Dark mode';
    }
})

function setTime(){
    const time = new Date();
    const date = time.getDate()
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const timeEl = document.querySelector('.time');

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hours, 0 , 24 , 0, 360)}deg)`;

    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0 , 59 , 0, 360)}deg)`;

    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0 , 59 , 0, 360)}deg)`;
    

    timeEl.innerHTML = `${hours}:${minutes < 10? `0${minutes}`: minutes}`;

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return ((num-in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

setTime();

setInterval(setTime,1000);