"use strict";
let score = 0;
let numberNow = 0;
const emitkiScorowe = ["Well played 😎",
    "Nice 😀",
    "Keep it!!🤠",
    "Good job 👌"];
const emitkiLvlUp = ["Express New lvl 💪",
    "Wow New lvl 🤗 ",
    "New lvl!!🤠",
    " New lvl👌"];
const container = document.getElementById('main');
const showlvl = document.getElementById('lvl');
const showTitle = document.getElementById('title');
let lvlup = 1;
const show = (e) => {
    const scoreTable = document.getElementById('score');
    if (e.target.className === 'zero hide') {
        e.target.classList.remove('hide');
        numberNow += 1;
        const correct = document.getElementsByClassName('zero hide');
        const correctt = document.getElementsByClassName('zero');
        //console.log(numberNow)
        if ((correctt.length) === numberNow) {
            showTitle.textContent = "Nice";
            numberNow = 0;
            score += 1;
            if (score % 2) {
                console.log(emitkiScorowe[Math.floor(Math.random() * 4)]);
                showTitle.textContent = emitkiScorowe[Math.floor(Math.random() * 4)];
                setTimeout(() => { losowanie('', lvlup); }, 2000);
            }
            else {
                lvlup += 1;
                console.log(lvlup);
                showTitle.textContent = emitkiLvlUp[Math.floor(Math.random() * 4)];
                setTimeout(() => { losowanie('', lvlup); }, 2000);
                showlvl.textContent = `Lvl:${lvlup}`;
            }
        }
        else {
        }
        scoreTable.textContent = `Your score: ${score.toString()}`;
    }
    else if (e.target.className === 'one hide') {
        score = 0;
        numberNow = 0;
        lvlup = 1;
        scoreTable.textContent = `Your score: ${score.toString()}`;
        showTitle.textContent = "Upss...Wrong";
        showlvl.textContent = `Lvl:${lvlup}`;
        setTimeout(() => { losowanie('Try again', 1); }, 3000);
    }
    else if (e.target.id === 'button') {
        score = 0;
        lvlup = 1;
        scoreTable.textContent = `Your score: ${score.toString()}`;
        showlvl.textContent = `Lvl:${lvlup}`;
    }
};
const losowanie = (a = '', target = 1) => {
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
    for (let i = 0; i < target; i++) {
        plate[i] = [];
        for (let k = 0; k < 4; k++) {
            plate[i][k] = Math.floor(Math.random() * 2);
        }
    }
    for (let i = 0; i < plate.length; i++) {
        let same = (plate[i].filter((item => item > 0)));
        if (same.length === 4) {
            for (let k = 0; k < 4; k++) {
                plate[i][k] = Math.floor(Math.random() * 2);
            }
        }
        else if (same.length === 0) {
            for (let k = 0; k < 4; k++) {
                plate[i][k] = Math.floor(Math.random() * 2);
            }
        }
    }
    ///
    console.log(plate);
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
button.addEventListener('click', () => { button.textContent = "Play again"; });
button.addEventListener('click', (e) => { show(e); });
///
////
