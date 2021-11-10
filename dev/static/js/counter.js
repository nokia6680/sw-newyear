function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById('timelist');
  
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    var daysNum = document.getElementById('daysNum');
    var hoursNum = document.getElementById('hoursNum');
    var minutesNum = document.getElementById('minutesNum');
    var secondsNum = document.getElementById('secondsNum');

    function getLast(number, titles) {
      var cases = [2, 0, 1, 1, 1, 2];
      return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5?number%10:5)]];
    }

    daysSpan.innerHTML = t.days;
    document.getElementById('daysNum').innerHTML = getLast(t.days, ['день', 'дня', 'дней']);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    document.getElementById('hoursNum').innerHTML = getLast(t.hours, ['час', 'часа', 'часов']);

    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    document.getElementById('minutesNum').innerHTML = getLast(t.minutes, ['минута', 'минуты', 'минут']);

    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    document.getElementById('secondsNum').innerHTML = getLast(t.seconds, ['секунда', 'секунды', 'секунд']);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "December 31 2021 23:59:59 GMT+0200";
initializeClock('timelist', deadline);
