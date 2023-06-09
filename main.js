const zones = ['America/New_York','Europe/Dublin','Europe/Zurich','Asia/Singapore',
    'Asia/Tokyo', 'Asia/Dubai']
const number_sec = (Math.random() * (11.8 - 5) + 5) * 1000;
const mainfield = document.querySelector('.main');
const sorry = document.querySelector('.main__info');
const loading = document.querySelector('.loading')

setTimeout(() => {
    mainfield.classList.add('fullscreen')
    sorry.style.display='block'; 
}, number_sec + 400);

let i = 0;
const intervalId = setInterval(() => {
    console.log(i, number_sec, (number_sec - i) / 1000);
    if (i < number_sec) {
        const spinner = document.createElement('div')
        spinner.classList.add('loading-spinner')
        loading.append(spinner)
        i+=1000;
    } else {
        clearInterval(intervalId);
    }
}, 1000)

const spinners = document.querySelector('.loading').children

setTimeout(() => {
    [...spinners].forEach((el, index) => {
        (index < zones.length - 1) ? el.style.display = 'none' : el.remove();
    })
}, number_sec)

function clock(id) {
    const divclock = document.createElement('div')
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "120");
    svg.setAttribute("height", "120");
    svg.setAttribute("viewBox", "0 0 120 120");
    svg.id=id

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "60");
    circle.setAttribute("cy", "60");
    circle.setAttribute("r", "40");
    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke", "#CE9704");
    circle.setAttribute("stroke-width", "3");
    svg.appendChild(circle);

    const hourHand = document.createElementNS("http://www.w3.org/2000/svg", "line");
    hourHand.setAttribute("x1", "60");
    hourHand.setAttribute("y1", "60");
    hourHand.setAttribute("x2", "60");
    hourHand.setAttribute("y2", "40");
    hourHand.setAttribute("stroke", "black");
    hourHand.setAttribute("stroke-width", "3");
    hourHand.id = `hour-${id}`
    svg.appendChild(hourHand);

    const minuteHand = document.createElementNS("http://www.w3.org/2000/svg", "line");
    minuteHand.setAttribute("x1", "60");
    minuteHand.setAttribute("y1", "60");
    minuteHand.setAttribute("x2", "60");
    minuteHand.setAttribute("y2", "30");
    minuteHand.setAttribute("stroke", "black");
    minuteHand.setAttribute("stroke-width", "2");
    minuteHand.id = `minute-${id}`
    svg.appendChild(minuteHand);

    const secundeHand = document.createElementNS("http://www.w3.org/2000/svg", "line");
    secundeHand.setAttribute("x1", "60");
    secundeHand.setAttribute("y1", "60");
    secundeHand.setAttribute("x2", "60");
    secundeHand.setAttribute("y2", "25");
    secundeHand.setAttribute("stroke", "#CE9704");
    secundeHand.setAttribute("stroke-width", "2");
    secundeHand.id = `secunde-${id}`
    svg.appendChild(secundeHand);

    const name = document.createElement('p')
    name.textContent = zones[id].split('/')[1].split('_').join(' ')
    divclock.append( svg, name)
    divclock.className = 'clock'
    return divclock
}

function updateHands() {
    const names = ['America/New_York', 'Europe/Dublin', 'Europe/Zurich','Asia/Singapore', 
        'Asia/Tokyo','Asia/Dubai'];
    for (let id in names) {
        const zoneTime = new Date().toLocaleString("en-US", { timeZone: names[id] });
        const [hours, minutes, seconds] = zoneTime.split(" ")[1].split(":");
        const hourHand = document.getElementById(`hour-${id}`);
        const hourAngle = (hours % 12) / 12 * 360 + minutes / 60 * 30;
        hourHand.setAttribute("transform", `rotate(${hourAngle} 60 60)`);
        const minuteHand = document.getElementById(`minute-${id}`);
        const minuteAngle = minutes / 60 * 360;
        minuteHand.setAttribute("transform", `rotate(${minuteAngle} 60 60)`);
        const secundeHand = document.getElementById(`secunde-${id}`);
        const secundeAngle = seconds*6;
        secundeHand.setAttribute("transform", `rotate(${secundeAngle} 60 60)`);
    }
}


setTimeout(() => {
    let j = 0;   
    loading.classList.add('grid_change')  
    const intId = setInterval(() => {
        if (j < zones.length) {
            document.querySelector('.loading').replaceChild(clock(j), spinners[j])
            j++
        } else {
            clearInterval(intId)
        }
    }, 600);
    setInterval(updateHands, 1000)
}, number_sec + 500)
    
const togo = document.querySelector('.main')
const forward = document.querySelector('.principals-button')
forward.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo(0, 0)
})

const button_reload = document.querySelectorAll('.ikons')
button_reload.forEach(el=> el.addEventListener('click', 
    () => {
        window.scrollTo(0, 0)
        window.location.reload()
    }))