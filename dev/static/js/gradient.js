function Setcol() {
    var rangrad = Math.floor((Math.random() * 360) + 1);
    var elem = document.querySelector(".service");
    this.style.background="linear-gradient(" + rangrad + ", #FF0000 2%, #FFBFBF 100%)";
}


Setcol();
