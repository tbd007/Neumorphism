var carousel = document.querySelector('.carousel'),
    figure = carousel.querySelector('figure'),
    nav = carousel.querySelector('nav'),
    numImages = figure.childElementCount,
    theta =  2 * Math.PI / numImages,
    currImage = 0
;


    
nav.addEventListener('click', onClick, true);


function onClick(e) {
    e.stopPropagation();
    
    var t = e.target;
    if (t.tagName.toUpperCase() != 'BUTTON')
        return;
    
    if (t.classList.contains('next')) {
        currImage++;
    }
    else {
        currImage--;
    }
    
    figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}

var carousel2 = document.querySelector('.carousel2'),
    figure2 = carousel2.querySelector('figure'),
    nav2 = carousel2.querySelector('nav'),
    numImages = figure2.childElementCount,
    theta =  2 * Math.PI / numImages,
    currImage = 0
;

    
nav2.addEventListener('click', onClicks, true);


function onClicks(e) {
    e.stopPropagation();
    
    var t = e.target;
    if (t.tagName.toUpperCase() != 'BUTTON')
        return;
    
    if (t.classList.contains('next')) {
        currImage++;
    }
    else {
        currImage--;
    }
    
    figure2.style.transform = `rotateY(${currImage * -theta}rad)`;
}

var pause = document.querySelector('#pause');
var play = document.querySelector('#play');
var pause2 = document.querySelector('#pause2');
var play2 = document.querySelector('#play2');
var paused = document.querySelector('#track');

var innerC = document.querySelector('.innerCircle');
var outerC = document.querySelector('.outerCircle');
var innerC2 = document.querySelector('.innerCircle2');
var outerC2 = document.querySelector('.outerCircle2');
var paused2 = document.querySelector('#track2');

var audio = new Audio('audio.mp3');
var audio2 = new Audio('audio2.mp3');

var icon = document.querySelector('.icon');
var icon2 = document.querySelector('.icon2');

pause.addEventListener('click', event =>{
   innerC.classList.add('hide');
   outerC.classList.add('hide');
   audio.pause();
   paused.classList.add('paused');
   icon.classList.remove('animicon');
});

play.addEventListener('click',e =>{
    innerC.style.visibility='visible';
    outerC.style.visibility='visible';
    icon.classList.add('animicon');
    innerC.classList.remove('hide');
    outerC.classList.remove('hide');
    artist.innerHTML='Lil Nas X feat. Billy Ray Cyrus';
    paused.innerHTML='Old Town Road';
    audio.play();
})

pause2.addEventListener('click', event =>{
    
    innerC2.classList.add('hide');
    outerC2.classList.add('hide');
    paused2.classList.add('paused');
    icon2.classList.remove('animicon');
    audio2.pause();
 });

play2.addEventListener('click',e =>{
    innerC2.style.visibility='visible';
    outerC2.style.visibility='visible';
    innerC2.classList.remove('hide');
    outerC2.classList.remove('hide');
    icon2.classList.add('animicon');
    artist2.innerHTML='FKA Twigs';
    paused2.innerHTML='Video Girl';
    audio2.play();
    
 });



var fig2 = document.getElementsByClassName('figure2');
var artist2 = document.querySelector("#artist2");
var artist = document.querySelector('#artist');
/*$('img').click(function(e) {
    e.stopPropagation();
   let art=e.target.getAttribute('alt');
   let newTrack=e.target.getAttribute('name');
   let music=e.target.getAttribute('value');
   paused2.innerHTML=newTrack;
   artist2.innerHTML=art; 
   audio2.pause();
   audio2=new Audio(music);
   audio2.play();
   
});*/



