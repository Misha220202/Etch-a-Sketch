const container = document.querySelector('.container');
const start = document.querySelector('#START');
const clear = document.querySelector('#CLEAR');

function creatcanvas(x) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 1; i <= x * x; i++) {
        const item = document.createElement('div');
        item.setAttribute('class', 'blank');
        item.style.width = `${(100 / x)}%`;
        item.style.height = `${(100 / x)}%`;
        item.style.backgroundColor = 'lightblue';
        container.appendChild(item);
    }
    console.log(`canvas created: ${x} pixels! \n`)
}

function getpixel() {
    let x = prompt('Please enter your canvas pixel (1-100):');
    x = Number(x);
    if (!(Number.isInteger(x) && (x > 1 && x < 100))) {
        alert('Invalid input.');
        return getpixel();
    }
    return (x);
}

let Arraycontainer = [];

start.addEventListener('click', () => {
    let pixel = getpixel();
    // console.log(pixelS);
    creatcanvas(pixel);

    Arraycontainer = Array.from(container.children);
    let ismousedown = false;

    Arraycontainer.forEach(item => {
        item.addEventListener('mousedown', () => {
            ismousedown = true;
        });
        item.addEventListener('mousemove', () => {
            if (ismousedown == true) {
                item.style.backgroundColor = 'black';
                item.classList.remove('blank');
            };
        });
        item.addEventListener('mouseup', () => ismousedown = false)
        item.addEventListener('mouseenter', () => {
            if (ismousedown == false) item.style.backgroundColor = 'black';
        })
        item.addEventListener('mouseleave', () => {
            if (ismousedown == false && item.className == 'blank') item.style.backgroundColor = 'lightblue';
        })
    })
})

clear.addEventListener('click', () => {
    Arraycontainer.forEach(item => {
        item.style.backgroundColor = 'lightblue';
        item.setAttribute('class', 'blank');
    })
})