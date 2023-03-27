const spinners = document.querySelector('.loading').children
const zones = ['America/New_York','Europe/Dublin','Asia/Singapore','Europe/Zurich',
    'Asia/Tokyo']
const number_sec = (Math.random() * (11.8 - 5) + 5) * 1000;

const sorry = document.querySelector('.main__info');
setTimeout(() => {
    sorry.style.display='block'; 
    [...spinners].forEach
}, number_sec + 400);


let i = 0;
const intervalId = setInterval(() => {
    if (i < spinners.length) {
        spinners[i].classList.add('glow')
        i++;
    } else {
        clearInterval(intervalId);
    }
}, 1000)



setTimeout(() => {
    [...spinners].forEach(el => {
        el.style.display = 'none';
    })
}, number_sec)

setTimeout(() => {
    [...spinners].forEach((el) => {
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.margin = '4vw';
        
        el.style.display = 'block';
        el.animationDuration = '1s';

    })
}, number_sec + 700)

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
    const names = ['America/New_York', 'Europe/Dublin', 'Asia/Singapore', 'Europe/Zurich',
        'Asia/Tokyo'];
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
    const intId = setInterval(() => {
        if (j < zones.length) {
            document.querySelector('.loading').replaceChild(clock(j), spinners[j])
            spinners[spinners.length-j-1].style.animationDuration = `${1/j}s`
            j++
        } else {
            clearInterval(intId)
        }
    }, 1100);
    setInterval(updateHands, 1000)
}, number_sec + 1100)

const togo = document.querySelector('.main')
const forward = document.querySelector('.principals-button')
forward.addEventListener('click', (e) => {
    e.preventDefault()
    togo.scrollIntoView({ block: "center", behavior: 'smooth' })
})

const button_reload = document.querySelectorAll('.ikons')
button_reload.forEach(el=> el.addEventListener('click', 
    () => {
        togo.scrollIntoView({block: "center", behavior: "smooth"})
        window.location.reload()
    }))