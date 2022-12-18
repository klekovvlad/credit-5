const today = document.querySelectorAll('.today');
let date = new Date();
const optionsDate = {
    month: 'long',
    day: 'numeric',
};
today.forEach(el => {
    el.innerHTML = date.toLocaleString("ru", optionsDate);
});
const timer = document.querySelectorAll('.timer');
const timerMin = document.querySelector('.timer-min');
const timerSec = document.querySelector('.timer-sec');
let endTime = 900;
function timeUpdate() {
    let min = Math.floor(endTime / 60);
    let sec =  endTime % 60;
    if(sec < 10) {
        sec = '0' + sec;
    }
    if(min < 10) {
        min = '0' + min;
    }
    timerMin.innerHTML = min;
    timerSec.innerHTML = sec;
    timer.forEach(el => {
        el.dataset.text = 'До конца акции';
    });
    endTime--;
    if(timerMin.innerHTML === '00' && timerSec.innerHTML === '00'){
        clearInterval(timerInterval);
    }
}
timeUpdate();
let timerInterval = setInterval(timeUpdate,1000);
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.add('header-active');
    if (window.scrollY === 0) {
        header.classList.remove('header-active');
    }
})