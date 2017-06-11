'use strict';


//tworzymy zmienną z drugiego linka

var secondLink = document.getElementsByTagName('a')[1];

console.log(secondLink);


//tworzymy funkcję, która zapobiega domyślnej akcji, czyli przejścia do strony

function alarm(e) {
    e.preventDefault();


    //    piszemy, że w konsoli ma się pojawić komunikat po kliknięciu

    console.log('kliknieto w link')


    //    sprawdzamy typ eventu

    console.log(e.type);
}


//zapisujemy, że funkcja uruchomi się na kliku

secondLink.onclick = alarm;


//tworzymy zmienną z trzeciego linka

var thirdLink = document.getElementsByTagName('a')[2];


//wywołujemy na nim funkcję alarm po kliknięciu

thirdLink.addEventListener('click', alarm);


//tworzymy zmienną z nagłówka

var mainHeader = document.getElementById('main-header');


//tworzymy funkcję

function resize(e) {

    //    po najechaniu kursorem

    if (e.type == 'mouseover') {

        //        zwiększy się font

        mainHeader.style.fontSize = "70px";

        //        a w innych przpadkach

    } else {

        //        font jest standardowy

        mainHeader.style.fontSize = "inherit";
    }
}


//piszemy, że funkcja ma się zadziać po najechaniu kursorem i po zjechaniu

/*
mainHeader.onmouseover = resize;

mainHeader.onmouseout = resize;
*/


/*zatrzymanie propagacji*/

//tworzymy funkcję dla hedera

function klikHeader() {
    console.log("kliknąłeś w heder");
}


//podpinamy tę funkcję na klik

document.getElementsByTagName('header')[0].onclick = klikHeader;


//tworzymy funkcję dla h1

function klikH1(e) {
    
    //żeby zablokować uruchomienie obu funkcji
    e.stopPropagation();
    
    console.log("kliknąłeś w h1");
}


//podpinamy funkcję dla h zagnieżdżonego h1 na klik

document.getElementsByTagName('h1')[0].onclick = klikH1;



