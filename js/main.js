"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let score = 0;
let numberNow = 0;
const container = document.getElementById('main');
const emitkiScorowe = [
    "Well played 😎",
    "Nice 😀",
    "Keep it!!🤠",
    "Good job 👌"
];
const emitkiLvlUp = [
    "Express New lvl 💪",
    "Wow New lvl 🤗 ",
    "New lvl!!🤠",
    " New lvl👌"
];
const showlvl = document.getElementById('lvl');
const showTitle = document.getElementById('title');
let lvlup = 1;
const validation = (plate) => {
    let j = 0;
    for (let i = 0; i < plate.length; i++) {
        let same = (plate[i].filter((item => item > 0)));
        while (same.length === 4 || same.length === 0) {
            j++;
            for (let k = 0; k < 4; k++) {
                plate[i][k] = Math.floor(Math.random() * 2);
            }
            same = (plate[i].filter((item => item > 0)));
            if (j === 5) {
                plate[i] = [0, 1, 0, 1];
                break;
            }
        }
    }
    paint(plate);
};
const paint = (plate) => {
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
    hide();
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
    for (let i = 0; i < target; i++) {
        plate[i] = [];
        for (let k = 0; k < 4; k++) {
            plate[i][k] = Math.floor(Math.random() * 2);
        }
    }
    ///
    validation(plate);
};
const hide = () => {
    setTimeout(() => {
        for (let i = 0; i < container.children.length; i++) {
            setTimeout(() => {
                container.children[i].classList.add('hide');
            }, 100 * i);
        }
    }, 3000);
};
const unhide = (container) => {
    for (let i = 0; i < container.children.length; i++) {
        setTimeout(() => {
            container.children[i].classList.remove('hide');
        }, 100 * i);
    }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const show = (e) => __awaiter(void 0, void 0, void 0, function* () {
    const scoreTable = document.getElementById('score');
    if (e.target.className === 'zero hide') {
        e.target.classList.remove('hide');
        numberNow += 1;
        const correctt = document.getElementsByClassName('zero');
        //console.log(numberNow)
        if ((correctt.length) === numberNow) {
            showTitle.textContent = "Nice";
            numberNow = 0;
            score += 1;
            if (score % 3) {
                showTitle.textContent = emitkiScorowe[Math.floor(Math.random() * 4)];
                setTimeout(() => { losagain(lvlup); }, 2000);
            }
            else {
                lvlup += 1;
                showTitle.textContent = emitkiLvlUp[Math.floor(Math.random() * 4)];
                setTimeout(() => { losagain(lvlup); }, 2000);
                showlvl.textContent = `Lvl:${lvlup}`;
            }
        }
        else {
        }
        scoreTable.textContent = `Your score: ${score.toString()}`;
    }
    else if (e.target.className === 'one hide') {
        scoreTable.textContent = `Your score: ${score.toString()}`;
        showlvl.textContent = `Lvl:${lvlup}`;
        unhide(container);
        showTitle.textContent = "Wops..Wrong 😧";
    }
    else if (e.target.id === 'button') {
        score = 0;
        lvlup = 1;
        scoreTable.textContent = `Your score: ${score.toString()}`;
        showlvl.textContent = `Lvl:${lvlup}`;
        losagain(lvlup);
    }
});
const losagain = (lvl, mess = '') => {
    let dane = container.children;
    if (container.children) {
        for (let i = dane.length - 1; i >= 0; i--) {
            dane[i].remove();
        }
        losowanie(mess, lvl);
    }
    else {
        losowanie(mess, lvl);
    }
};
container.addEventListener('click', (e) => { show(e); });
const button = document.getElementById('button');
button.addEventListener('click', () => { losowanie('Lets try'); });
button.addEventListener('click', () => { button.textContent = "Play again"; });
button.addEventListener('click', (e) => { show(e); });
///
////
