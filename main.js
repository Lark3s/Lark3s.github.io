confirm("UPOZORENJE: Ovaj web sajt je napravljen kao lični projekat za ispit na fakultetu, nije namenjen za bilo koju vrstu komercijalne upotrebe.");

var slajdIndeks = 1;
prikaziSlajdove(slajdIndeks);

function pomeri(n) {
    prikaziSlajdove(slajdIndeks += n);
}

function trenutanSlajd(n) {
    prikaziSlajdove(slajdIndeks = n);
}

function prikaziSlajdove(n) {
  var i;
  var slajdovi = document.getElementsByClassName("slajd");
  var tacke = document.getElementsByClassName("tacka");
  if (n > slajdovi.length) {slajdIndeks = 1}
  if (n < 1) {slajdIndeks = slajdovi.length}
  for (i = 0; i < slajdovi.length; i++) {
      slajdovi[i].style.display = "none";
  }
  for (i = 0; i < tacke.length; i++) {
      tacke[i].className = tacke[i].className.replace(" aktivan", "");
  }
  slajdovi[slajdIndeks-1].style.display = "block";
  tacke[slajdIndeks-1].className += " aktivan";
}

function promenaPozadine(n) {
    switch(n) {
        case 1: document.getElementById("usluge-holder").style.cssText = "background: url(images/restoran.jpg); background-size: cover; background-position: center;"; break;
        case 2: document.getElementById("usluge-holder").style.cssText = "background: url(images/bazen2.jpg); background-size: cover; background-position: center;"; break;
        case 3: document.getElementById("usluge-holder").style.cssText = "background: url(images/konfsala.jpg); background-size: cover; background-position: center;"; break;
        case 4: document.getElementById("usluge-holder").style.cssText = "background: url(images/247.jpg); background-size: cover; background-position: center;"; break;
        case 5: document.getElementById("usluge-holder").style.cssText = "background: url(images/mladenci.jpg); background-size: cover; background-position: center;"; break;
    }
}
