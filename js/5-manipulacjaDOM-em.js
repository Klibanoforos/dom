'use strict';


//tworzymy zmienną z elementu

var mainHeader = document.getElementById('main-header');

console.log(mainHeader);


//dodajemy treść do nagłówka

mainHeader.innerHTML = "Treść nagłówka";


//tworzymy zmienną z pierwszego linka

var link = document.getElementsByClassName('link')[0];

console.log(link);


//zmieniamy cel pierwszego linka

link.href = "http://akademia108.pl";


//dodajemy klasę pierwszego linka

link.className = "nowa-klasa";


//zmieniamy tekst linka

link.text = "ddd";


//zmieniamy kolor nagłówka

mainHeader.style.color = "#11aa22";