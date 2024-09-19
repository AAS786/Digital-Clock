const hour = document.getElementById('hour');
const minute = document.getElementById('minutes');  // Corrected from 'minute' to 'minutes'
const second = document.getElementById('seconds');  // Corrected from 'second' to 'seconds'
const day = document.getElementById('day');

var monthName = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'
];

const clock = setInterval(function time() {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    day.innerHTML = `${d} ${monthName[m]} ${y}`;

    hour.textContent = h.toString().padStart(2, '0');   // Padding with zero for single digit
    minute.innerText = min.toString().padStart(2, '0'); // Padding with zero for single digit
    second.innerText = sec.toString().padStart(2, '0'); // Padding with zero for single digit
});
