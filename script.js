const labels = ["Pear","Apple","Exotic"]

const sodaElement = document.getElementById("soda");
const titleText = document.querySelector(".title");
const fruits = document.querySelector(".fruits");

let currentPosition = 0

function update() {
    titleText.classList.remove("title");
    fruits.classList.remove("fruits");

    // trigger a DOM reflow
    void titleText.offsetWidth;
    void fruits.offsetWidth;

    titleText.classList.add("title");
    fruits.classList.add("fruits");

    titleText.innerText = labels[currentPosition % 3]
    document.body.id = "p" + currentPosition
}

function next() {
    if (currentPosition < 3) currentPosition++
    document.body.style.setProperty("--position", currentPosition)

    update()
}

function prev() {
    if (currentPosition > 0) currentPosition--
    document.body.style.setProperty("--position", currentPosition)

    update()
}

update()