const body = document.querySelector('body');
body.setAttribute('class', 'body');

const xLine = document.createElement('div');
xLine.setAttribute ('class', 'x-line');
document.body.appendChild(xLine);

const yLine = document.createElement('div');
yLine.setAttribute ('class', 'y-line');
document.body.appendChild(yLine);

function moveAt(pageX, pageY) {
    xLine.style.top = pageY + 'px';
    yLine.style.left = pageX + 'px';
}

function onMauseMove(event) {
    console.log(event.pageX)
    moveAt(event.pageX, event.pageY);
}

document.addEventListener('mousemove', onMauseMove)
