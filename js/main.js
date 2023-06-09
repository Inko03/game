"use strict";
let score = 0;
let numberNow = 0;
const container = document.getElementById('main');
const showTitle = document.getElementById('title');
const show = (e) => {
    const scoreTable = document.getElementById('score');
    if (e.target.className === 'zero hide') {
        e.target.classList.remove('hide');
        score += 1;
        numberNow += 1;
        const correct = document.getElementsByClassName('zero hide');
        const correctt = document.getElementsByClassName('zero');
        console.log(correctt.length);
        //console.log(numberNow)
        if ((correctt.length) === numberNow) {
            numberNow = 0;
            showTitle.textContent = "Correct!!";
            setTimeout(() => { losowanie(); }, 2000);
        }
        scoreTable.textContent = `Your score: ${score.toString()}`;
    }
    else if (e.target.className === 'one hide') {
        score = 0;
        numberNow = 0;
        scoreTable.textContent = `Your score: ${score.toString()}`;
        showTitle.textContent = "Upss...Wrong";
        setTimeout(() => { losowanie('Try again'); }, 3000);
    }
    else {
        score = 0;
        scoreTable.textContent = `Your score: ${score.toString()}`;
        console.log(e.target);
    }
};
const losowanie = (a = '') => {
    let plate = [];
    showTitle.textContent = a;
    numberNow = 0;
    const nameTitle = document.getElementById('main');
    const p = document.getElementById('p');
    const scoreTable = document.getElementById('score');
    scoreTable.textContent = `Your score: ${score.toString()}`;
    showTitle.textContent = "Let's paly";
    if (nameTitle) {
        nameTitle.remove();
        const newDiv = document.createElement('div');
        newDiv.id = 'main';
        p.appendChild(newDiv);
    }
    else {
        const newDiv = document.createElement('div');
        newDiv.id = 'main';
        p.appendChild(newDiv);
    }
    for (let i = 0; i < 2; i++) {
        plate[i] = [];
        for (let k = 0; k < 8; k++) {
            plate[i][k] = Math.floor(Math.random() * 2);
        }
    }
    ////
    const container = document.getElementById('main');
    ////
    for (let i = 0; i < plate.length; i++) {
        for (let k = 0; k < plate[0].length; k++) {
            if (plate[i][k] === 1) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('zero');
                container.appendChild(newDiv);
            }
            else {
                const newDiv = document.createElement('div');
                newDiv.classList.add('one');
                container.appendChild(newDiv);
            }
        }
    }
    container.addEventListener('click', (e) => { show(e); });
    ///
    const side = document.getElementsByClassName('one');
    setTimeout(() => {
        for (let i = 0; i < container.children.length; i++) {
            setTimeout(() => {
                container.children[i].classList.add('hide');
            }, 100 * i);
        }
    }, 3000);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const button = document.getElementById('button');
button.addEventListener('click', () => { losowanie('Lets try'); });
button.addEventListener('click', (e) => { show(e); });
///
////
