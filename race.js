const cars = document.querySelectorAll("[data-type]");

const getRandom = (max = 100, min = 10) => Math.floor(Math.random() * (max - min) + min);

const id = setInterval(function() {
    cars.forEach(c => {
        let prev = parseFloat(c.style.left) || 0;
        let right = c.getBoundingClientRect().right
        c.style.left = `${getRandom() + prev}px`;
        if (right >= innerWidth) {
            clearInterval(id);
            alert(c.previousSibling.previousSibling.textContent + " - Победитель!")
        }
    });
}, 1000);
