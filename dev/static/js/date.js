var weekOverlay = document.querySelector('.event');

var weekDayFirst = document.querySelector('.first');
var weekDaySecond = document.querySelector('.second');
var weekDayThird = document.querySelector('.third');
var weekDayFour = document.querySelector('.fourth');
var weekDayFive = document.querySelector('.fifth');
var weekDaySix = document.querySelector('.sixth');
var weekDaySeven = document.querySelector('.seventh');

const curDate = new Date().getTime();

let isActive;

const nov15 = new Date(2021, 10, 15).getTime();
const nov16 = new Date(2021, 10, 16).getTime();
const nov17 = new Date(2021, 10, 17).getTime();
const nov18 = new Date(2021, 10, 18).getTime();
const nov19 = new Date(2021, 10, 19).getTime();
const nov20 = new Date(2021, 10, 20).getTime();
const nov21 = new Date(2021, 10, 21).getTime();

console.log(curDate);

if (weekDayFirst) {
    //if (curDate >= nov15 && curDate < nov16) {
    //    weekDayFirst.classList.add('active');
    //}

    weekDayFirst.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.toggle('firstPressed');
        weekDayFirst.classList.toggle('active');
    });
};

if (weekDaySecond) {
    if (curDate >= nov16 && curDate < nov17) {
        weekDaySecond.classList.add('active');
        weekOverlay.classList.toggle('tue');
    }

    weekDaySecond.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.toggle('secondPressed');
        weekDaySecond.classList.toggle('active');
    });
};


if (weekDayThird) {
    if (curDate >= nov17 && curDate < nov18) {
        weekDayThird.classList.add('active');
    }
    weekDayThird.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.toggle('thirdPressed');
        weekDayThird.classList.toggle('active');
    });
};

if (weekDayFour) {
    if (curDate >= nov18 && curDate < nov19) {
        weekDayFour.classList.add('active');
    }

    weekDayFour.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.toggle('fourPressed');
        weekDayFour.classList.toggle('active');
    });
};

if (weekDayFive) {
    //if (curDate >= nov19 && curDate < nov20) {
    //    weekDayFive.classList.add('active');
    //    weekOverlay.classList.add('fri');
    //}

    weekDayFive.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.remove('fri');
        weekOverlay.classList.toggle('fivePressed');
        weekDayFive.classList.toggle('active');
    });
};

if (weekDaySix) {
    if (curDate >= nov20 && curDate < nov21) {
        weekDaySix.classList.add('active');
    }

    weekDaySix.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.toggle('sixPressed');
        weekDaySix.classList.toggle('active');
    });
};

if (weekDaySeven) {
    if (curDate >= nov21 && curDate < nov22) {
        weekDaySeven.classList.add('active');
    }

    weekDaySeven.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.toggle('sevenPressed');
        weekDaySeven.classList.toggle('active');
    });
};
