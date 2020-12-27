const eraser = document.querySelector(".erase")
const digits = document.querySelectorAll(".btn")

function keydownEvent(event) {
    console.log(event)
    document.querySelector(".display").innerHTML = event.key
}

function clickEvent(event) {
    console.log(event)
    event.target.dataset.digit === "erase" ? eraser.addEventListener("click", e => {
        document.querySelector(".display").innerHTML = "0"
    }) : document.querySelector(".display").innerHTML = event.target.dataset.digit
}

digits.forEach(function(buttons) {
    console.log(buttons)
    document.addEventListener("click", clickEvent)
})

window.addEventListener("keydown", keydownEvent)

eraser.addEventListener("click", e => {
    document.querySelector(".display").innerHTML = "0"
})