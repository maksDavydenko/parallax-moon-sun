const bg = document.querySelector('.bg');
const moon = document.querySelector('.moon');
const mountain = document.querySelector('.mountain');
const mountainDay = document.querySelector('.mountain_day');
const road = document.querySelector('.road');
const text = document.querySelector('.text');
const sun = document.querySelector('.sun');
const textDay = document.querySelector('.text_day')
const deviceWidth = document.body.clientWidth;
console.log(deviceWidth);
window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
    sun.style.left =  value * 0.5 + 'px';
    sun.style.top = -value * 0.3 + 'px';
    mountainDay.style.top = (-value * 0.15) + 'px';
    textDay.style.top = -value * 0.2 + 'px'
})
