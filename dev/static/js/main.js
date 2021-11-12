var upperItem = document.getElementsByClassName('week__item');
var elNodes = document.querySelectorAll(".week__item");

for (var i = 0; i < upperItem.length; i++) {
    var elem = upperItem[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        this.classList.add("opened");
    });
}

var weekOverlay = document.querySelector('.event');

var weekDayFirst = document.querySelector('.first');
var weekDaySecond = document.querySelector('.second');
var weekDayThird = document.querySelector('.third');
var weekDayFour = document.querySelector('.fourth');
var weekDayFive = document.querySelector('.fifth');
var weekDaySix = document.querySelector('.sixth');
var weekDaySeven = document.querySelector('.seventh');

if (weekDaySecond) {
    weekDaySecond.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.add('secondPressed');

        setTimeout(function() {
            return weekDaySecond.classList.add('active');
        }, 500);
    });
};




if (weekDayThird) {
    weekDayThird.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.remove('secondPressed');
        weekOverlay.classList.add('thirdPressed');

        setTimeout(function() {
            return weekDayThird.classList.add('active');
        }, 500);
    });
};

if (weekDayFour) {
    weekDayFour.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.remove('secondPressed');
        weekOverlay.classList.remove('thirdPressed');
        weekOverlay.classList.add('fourPressed');

        setTimeout(function() {
            return weekDayFour.classList.add('active');
        }, 500);
    });
};

if (weekDayFive) {
    weekDayFive.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.remove('secondPressed');
        weekOverlay.classList.remove('thirdPressed');
        weekOverlay.classList.remove('fourPressed');
        weekOverlay.classList.add('fivePressed');

        setTimeout(function() {
            return weekDayFive.classList.add('active');
        }, 500);
    });
};

if (weekDaySix) {
    weekDaySix.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.remove('secondPressed');
        weekOverlay.classList.remove('thirdPressed');
        weekOverlay.classList.remove('fourPressed');
        weekOverlay.classList.remove('fivePressed');
        weekOverlay.classList.add('sixPressed');

        setTimeout(function() {
            return weekDaySix.classList.add('active');
        }, 500);
    });
};

if (weekDaySeven) {
    weekDaySeven.addEventListener('click', function() {
        event.preventDefault();
        weekOverlay.classList.remove('secondPressed');
        weekOverlay.classList.remove('thirdPressed');
        weekOverlay.classList.remove('fourPressed');
        weekOverlay.classList.remove('fivePressed');
        weekOverlay.classList.remove('sixPressed');
        weekOverlay.classList.add('sevenPressed');
        setTimeout(function() {
            return weekDaySeven.classList.add('active');
        }, 500);
    });
};
