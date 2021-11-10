// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var joinOpener = document.querySelector('.js-test-form-join');
var joinOverlay = document.querySelector('.popup-join');
var joinCloser = document.querySelector('.join__closer');

var orderOpener = document.querySelector('.order__start');
var orderCloser = document.querySelector('.order__closer');
var orderWrapper = document.querySelector('.order');
var orderForm = document.querySelector('.order__form');
var orderFormList = document.querySelector('.order__list');
var orderFormSubmit = document.querySelector('.order__submit');

if (joinOpener) {
    joinOpener.addEventListener('click', function() {
        event.preventDefault();
        joinOverlay.classList.add('active');
    });
};

if (joinCloser) {
    joinCloser.addEventListener('click', function() {
        event.preventDefault();
        joinOverlay.classList.remove('active');
    });
};

if (orderOpener) {
    orderOpener.addEventListener('click', function() {
        event.preventDefault();
        orderOpener.classList.add('pressed');

        setTimeout(function() {
            return orderOpener.classList.add('inactive');
        }, 250);

        setTimeout(function() {
            return orderWrapper.classList.add('prepare');;
        }, 250);

        setTimeout(function() {
            return orderWrapper.classList.remove('inactive');;
        }, 250);

        setTimeout(function() {
            return orderWrapper.classList.add('visible');;
        }, 250);

        setTimeout(function() {
            return orderFormList.classList.add('visible');;
        }, 500);
    });
};

if (orderCloser) {
    orderCloser.addEventListener('click', function() {
        event.preventDefault();
        orderFormList.classList.remove('visible');

        setTimeout(function() {
            return orderWrapper.classList.remove('visible');
        }, 250);

        setTimeout(function() {
            return orderWrapper.classList.remove('prepare');
        }, 250);

        setTimeout(function() {
            return orderWrapper.classList.add('inactive');
        }, 250);

        setTimeout(function() {
            return orderWrapper.classList.remove('prepare');;
        }, 250);

        setTimeout(function() {
            return orderOpener.classList.remove('inactive');
        }, 250);

        setTimeout(function() {
            return orderOpener.classList.remove('pressed');
        }, 250);
    });
};
