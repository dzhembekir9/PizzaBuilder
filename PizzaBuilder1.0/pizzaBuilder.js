function init() {

    let totalPrice = 5;

    let salamiCounter = 0, sausageCounter = 0, oliveCounter = 0, cheeseCounter = 0, 
    cucumberCounter = 0, tomatoCounter = 0;

    const totalEl = document.querySelector('.total');

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    totalPriceHandler = (productPrice) => {
        totalPrice += productPrice;
        totalEl.innerHTML = 'Total: $' + totalPrice.toFixed(2);
    }

    addProductHandler = (productClass, productCounter, addClassName) => {

        let el = document.querySelector(`.${productClass}`);
        el.innerHTML = productCounter;

        let newProduct = document.createElement('div');
        newProduct.className = `${addClassName}`;
        let top = getRandomInt(30, 500);
        let left = getRandomInt(40, 500);
        newProduct.style.top = `${top}px`;
        newProduct.style.left = `${left}px`;
        document.getElementById('pizza').appendChild(newProduct);
    }


    addSalamiHandler = () => {
        if (salamiCounter < 10) {
            salamiCounter++;

            addProductHandler('salami', salamiCounter, 'addSalami');
            totalPriceHandler(0.5);
        }
    }
    addSausageHandler = () => {
        if (sausageCounter < 10) {
            sausageCounter++;

            addProductHandler('sausage', sausageCounter, 'addSausage');
            totalPriceHandler(1);
        }
    }
    addOliveHandler = () => {
        if (oliveCounter < 10) {
            oliveCounter++;

            addProductHandler('olive', oliveCounter, 'addOlive');
            totalPriceHandler(0.3);
        }

    }
    addCheeseHandler = () => {
        if (cheeseCounter < 10) {
            cheeseCounter++;

            addProductHandler('cheese', cheeseCounter, 'addCheese');
            totalPriceHandler(0.7);
        }

    }
    addCucumberHandler = () => {
        if (cucumberCounter < 10) {
            cucumberCounter++;

            addProductHandler('cucumber', cucumberCounter, 'addCucumber');
            totalPriceHandler(0.1);
        }
    }
    addTomatoHandler = () => {
        if (tomatoCounter < 10) {
            tomatoCounter++;

            addProductHandler('tomato', tomatoCounter, 'addTomato');
            totalPriceHandler(0.15);
        }

    }
}

window.onload = init;   