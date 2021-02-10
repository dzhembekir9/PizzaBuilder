function init() {

    let totalPrice = 5;

    let salamiCounter = 0, sausageCounter = 0, oliveCounter = 0, cheeseCounter = 0, 
    cucumberCounter = 0, tomatoCounter = 0;

    const totalEl = document.querySelector('.total');
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    totalPriceHandler = (productPrice) => {
        totalPrice += productPrice;
        totalEl.innerHTML = 'Total: $' + totalPrice.toFixed(2);
    }

    // Add product
    
    addProductHandler = (productClass, productCounter, addClassName) => {
        
        let el = document.querySelector(`.${productClass}`);
        el.innerHTML = productCounter;
        
        let newProduct = document.createElement('div');
        newProduct.className = `${addClassName}`;
        let top = getRandomInt(30, 500);
        let left = getRandomInt(40, 500);
        newProduct.style.top = `${top}px`;
        newProduct.style.left = `${left}px`;
        document.querySelector('#pizza').appendChild(newProduct);
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

    // Remove product

    removeProductHandler = (productClass, productCounter, productCounterClass) => {
        let el = document.querySelector(`.${productCounterClass}`);
        el.innerHTML = productCounter;

        let containerEl = document.querySelector('.pizza-main');
        let productEl = document.querySelector(`.${productClass}`);
        if (productEl !== null) {
            containerEl.removeChild(productEl);
        }
    }

    removeSalamiHandler = () => {
        if (salamiCounter > 0) {
            salamiCounter--;
        }
        let elementClassName = document.querySelector('.addSalami').className;
        removeProductHandler(elementClassName, salamiCounter, 'salami');
        totalPriceHandler(-0.5);
    }

    removeSausageHandler = () => {
        if (sausageCounter > 0) {
            sausageCounter--;
        }
        let elementClassName = document.querySelector('.addSausage').className;
        removeProductHandler(elementClassName, sausageCounter, 'sausage');
        totalPriceHandler(-1);
    }

    removeOliveHandler = () => {
        if (oliveCounter > 0) {
            oliveCounter--;
        }
        let elementClassName = document.querySelector('.addOlive').className;
        removeProductHandler(elementClassName, oliveCounter, 'olive');
        totalPriceHandler(-0.3);
    }

    removeCheeseHandler = () => {
        if (cheeseCounter > 0) {
            cheeseCounter--;
        }
        let elementClassName = document.querySelector('.addCheese').className;
        removeProductHandler(elementClassName, cheeseCounter, 'cheese');
        totalPriceHandler(-0.7);
    }

    removeCucumberHandler = () => {
        if (cucumberCounter > 0) {
            cucumberCounter--;
        }
        let elementClassName = document.querySelector('.addCucumber').className;
        removeProductHandler(elementClassName, cucumberCounter, 'cucumber');
        totalPriceHandler(-0.1);
    }

    removeTomatoHandler = () => {
        if (tomatoCounter > 0) {
            tomatoCounter--;
        }
        let elementClassName = document.querySelector('.addTomato').className;
        removeProductHandler(elementClassName, tomatoCounter, 'tomato');
        totalPriceHandler(-0.15);
    }
}

window.onload = init;   