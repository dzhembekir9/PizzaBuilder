function init() {

    let totalPrice = 5;

    let salamiCounter = 0;
    let sausageCounter = 0;
    let oliveCounter = 0;
    let cheeseCounter = 0;
    let cucumberCounter = 0;
    let tomatoCounter = 0;

    const totalEl = document.getElementById('total');

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

    addSalamiHandler = () => {
        if (salamiCounter < 10) {
            salamiCounter++;

            let el = document.getElementById("1");
            el.innerHTML = salamiCounter;

            let newProduct = document.createElement('div');
            newProduct.className = "addSalami";
            let top = getRandomInt(30, 500);
            let left = getRandomInt(40, 500);
            newProduct.style.top = `${top}px`;
            newProduct.style.left = `${left}px`;
            document.getElementById('pizza').appendChild(newProduct);

            totalPrice += 0.5;
            totalEl.innerHTML = 'Total: $' + totalPrice.toFixed(2);
        }
    }
    addSausageHandler = () => {
        if (sausageCounter < 10) {
            sausageCounter++;
            
            let el = document.getElementById("2");
            el.innerHTML = sausageCounter;

            let newProduct = document.createElement('div');
            newProduct.className = "addSausage";
            let top = getRandomInt(30, 500);
            let left = getRandomInt(40, 500);
            newProduct.style.top = `${top}px`;
            newProduct.style.left = `${left}px`;
            document.getElementById('pizza').appendChild(newProduct);

            totalPrice += 1;
            totalEl.innerHTML = 'Total: $' + totalPrice.toFixed(2);
        }
    }
    addOliveHandler = () => {
        if (oliveCounter < 10) {
            oliveCounter++;

            let el = document.getElementById("3");
            el.innerHTML = oliveCounter;

            let newProduct = document.createElement('div');
            newProduct.className = "addOlive";
            let top = getRandomInt(30, 500);
            let left = getRandomInt(40, 500);
            newProduct.style.top = `${top}px`;
            newProduct.style.left = `${left}px`;
            document.getElementById('pizza').appendChild(newProduct);

            totalPrice += 0.3;
            totalEl.innerHTML = 'Total: $' + totalPrice.toFixed(2);
        }

    }
    addCheeseHandler = () => {
        if (cheeseCounter < 10) {
            cheeseCounter++;

            let el = document.getElementById("4");
            el.innerHTML = cheeseCounter;

            let newProduct = document.createElement('div');
            newProduct.className = "addCheese";
            let top = getRandomInt(30, 500);
            let left = getRandomInt(40, 500);
            newProduct.style.top = `${top}px`;
            newProduct.style.left = `${left}px`;
            document.getElementById('pizza').appendChild(newProduct);

            totalPrice += 0.7;
            totalEl.innerHTML = 'Total: $' + totalPrice.toFixed(2);
        }

    }
    addCucumberHandler = () => {
        if (cucumberCounter < 10) {
            cucumberCounter++;

            let el = document.getElementById("5");
            el.innerHTML = cucumberCounter;

            let newProduct = document.createElement('div');
            newProduct.className = "addCucumber";
            let top = getRandomInt(30, 500);
            let left = getRandomInt(40, 500);
            newProduct.style.top = `${top}px`;
            newProduct.style.left = `${left}px`;
            document.getElementById('pizza').appendChild(newProduct);

            totalPrice += 0.1;
            totalEl.innerHTML = 'Total: $' + totalPrice.toFixed(2);
        }
    }
    addTomatoHandler = () => {
        if (tomatoCounter < 10) {
            tomatoCounter++;

            let el = document.getElementById("6");
            el.innerHTML = tomatoCounter;

            let newProduct = document.createElement('div');
            newProduct.className = "addTomato";
            let top = getRandomInt(30, 500);
            let left = getRandomInt(40, 500);
            newProduct.style.top = `${top}px`;
            newProduct.style.left = `${left}px`;
            document.getElementById('pizza').appendChild(newProduct);

            totalPrice += 0.15;
            totalEl.innerHTML = 'Total: $' + totalPrice.toFixed(2);
        }

    }
}

window.onload = init;   