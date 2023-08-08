function counter(){
    //Creating Vriables
    const future = new Date('august 18, 2023 00:00').getTime();
    const today = new Date().getTime();
    const gap = future - today;
    //Switching time to ms
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    //Starting the process
    const dayTime  = Math.floor((gap / day));
    const hourTime  = Math.floor((gap % day) / hour);
    const minuteTime = Math.floor((gap % hour) / minute)
    const secondTime = Math.floor((gap % minute) / second);
    //Adding variables to the time
    const dayNumber = document.querySelector('.day-number');
    const hourNumber = document.querySelector('.hour-number');
    const minuteNumber = document.querySelector('.minute-number');
    const secondNumber = document.querySelector('.second-number');
    dayNumber.innerHTML = zeros(dayTime);
    hourNumber.innerHTML = zeros(hourTime);
    minuteNumber.innerHTML = zeros(minuteTime);
    secondNumber.innerHTML = zeros(secondTime);
}
setInterval(counter,1000)
function zeros(zero){
    zero = (zero < 10) ? `0${zero}` : zero;
    return zero;
}