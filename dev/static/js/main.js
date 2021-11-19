var upperItem = document.getElementsByClassName('week__item');
var elNodes = document.querySelectorAll(".week__item");

for (var i = 0; i < upperItem.length; i++) {
    var elem = upperItem[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        this.classList.add("opened");
    });
}

var eventItem = document.getElementsByClassName('event__item');
var evNodes = document.querySelectorAll(".event__item");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

for (var i = 0; i < eventItem.length; i++) {
    var elem2 = eventItem[i];
    var elem2time = elem2.getAttribute('data-time');

    if (today == elem2time) {
        elem2.classList.add("active");
    };

    elem2.addEventListener("click", function() {
        event.preventDefault();
        this.classList.toggle("active");
    });
}
