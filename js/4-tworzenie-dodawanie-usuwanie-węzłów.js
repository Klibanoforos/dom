'use strict';


//dorywamy się do elementu


var istniejacyWezel = document.getElementById('parFirst').children[3];

console.log(document.getElementById('parFirst').children);

console.log(istniejacyWezel);


//tworzymy nowy element - paragraf

var newElement = document.createElement('p');


//tworzymy nowe dziecko temu paragrafu = tekst "To jest nowy paragraf"

var newElementContent = document.createTextNode('To jest nowy paragraf');


//dodajemy dziecko do tego paragrafu

newElement.appendChild(newElementContent);

console.log(newElement);


//dodajemy nowy paragraf do wskazanego wcześniej elementu

istniejacyWezel.appendChild(newElement);


//usuwamy ten paragraf

istniejacyWezel.removeChild(newElement);
