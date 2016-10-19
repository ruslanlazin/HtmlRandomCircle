document.getElementById("addCircle").onclick = addCircle;


function getRandomXPosition(circle, radius) {
    circle.style.top = Math.floor(Math.random() * (window.innerHeight - 2 * radius)) + 'px';
}
function addCircle() {
    var container = document.getElementById('container');
    var circle = document.createElement('div');
    var radius = getRandomRadius();

    circle.className = "circle";
    circle.style.width = 2 * radius + 'px';
    circle.style.height = 2 * radius + 'px';
    circle.style.borderRadius = radius + 'px';
    circle.style.background = getRandomColor();
    circle.style.position = 'absolute';
    circle.style.left = getRandomXPosition(radius);
    circle.style.top = getRandomYPosition(radius);

    container.appendChild(circle);
}


function getRandomRadius() {
    var MIN_RADIUS = 5;
    var MAX_RADIUS = 50;
    return Math.floor(Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS);
}


function getRandomColor() {
    return '#' + Math.floor((1 << 24) * Math.random()).toString(16);
}


function getRandomXPosition(radius) {
    return Math.floor(Math.random() * (window.innerWidth - 2 * radius)) + 'px';
}


function getRandomYPosition(radius) {
    return Math.floor(Math.random() * (window.innerHeight - 2 * radius)) + 'px';
}