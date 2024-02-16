let counterValue = 0;
const counterDisplay = document.getElementById("counter");

function updateCounter() {
    counterDisplay.innerText = counterValue;
}

function increment() {
    counterValue++;
    updateCounter();
}

function decrement() {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
}

document.getElementById("reset-btn").addEventListener("click", function() {
    counterValue = 0;
    updateCounter();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        increment();
    } else if (event.key === "ArrowDown") {
        decrement();
    }
});
