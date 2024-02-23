const container = document.querySelector('#container');
const clear = document.querySelector('#CLEAR');

function creatcanvas(x) {
    for (let i = 1; i <= x * x; i++) {
        const item = document.createElement('div');
        item.setAttribute('class', 'pixel');
        item.style.width = `${(100 / x)}%`;
        item.style.height = `${(100 / x)}%`;
        item.style.backgroundColor = 'lightblue';
        container.appendChild(item);
    }
}
creatcanvas(25);

const Arraycontainer = Array.from(container.children);

let ismousedown = false;
Arraycontainer.forEach(item => {
    ismousedown = 'false';
    item.addEventListener('mousedown', () => {
        ismousedown = 'true';
        console.log(ismousedown);
    });
    item.addEventListener('mousemove', () => {
        if (ismousedown == 'true') item.style.backgroundColor = 'black';
    });
    item.addEventListener('mouseup', () => ismousedown = 'false')
})

clear.addEventListener('click', () => {
    Arraycontainer.forEach(item => item.style.backgroundColor = 'lightblue')
})




