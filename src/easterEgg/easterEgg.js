import "./easterEgg.scss";
import album from "../static/img/album.jpg";
import meme1 from "../static/img/meme1.png";
import meme2 from "../static/img/meme2.png";
import meme3 from "../static/img/meme3.jpg";
let slide1;
let slide2;
let slide3;
let slide4;
let counter;
let leftButton;
let rightButton;
let easterEgg = [];
let isOpen = false;

export function addEasterEgg(){    
    document.addEventListener('keydown', event => {
        easterEgg.push(event.key);
        if(easterEgg.length > 4){
            easterEgg.shift();
        };
        console.log(counter);
        if(easterEgg[0] == 2 && easterEgg[1] == 0 && easterEgg[2] == 1 && easterEgg[3] == 1){
            openModal();
            changeSlides();
            };
        if(event.key == "Escape") {
            if(isOpen) offModal();
        }
        if(event.key == "ArrowRight" && counter < 3) {
            if(isOpen) goRight();
        }
        if(event.key == "ArrowLeft" && counter > 0) {
            if(isOpen) goLeft();
        }
    });  
};
function openModal(){
    counter = 0;
    if(!isOpen){
        isOpen = true;
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML =`
            <div class="slider modal__content">
                <div class="slider">
                    <button id='leftButton' class='leftButton button'>&lt</button>
                    <div id='slide1' class="hidden">
                        <h2>Secret Codes and Battleships!</h2>
                        <div class="slide">
                            <img src="${album}"/>   
                        </div>
                        <h3>Author: Darren Hayes<br>Released: 21 October 2011</h3>
                    </div>
                    <div id='slide2' class="hidden slide">
                        <img class="zdj" src="${meme1}"></img>
                    </div>
                    <div id='slide3' class="hidden slide">
                        <img class="zdj" src="${meme2}"></img>
                    </div>
                    <div id='slide4' class="hidden slide">
                        <img class="zdj" src="${meme3}"></img>
                    </div>
                    <button id ='rightButton' class='rightButton button'>></button>
                </div>
            <a href="" class="return" onclick="offModal()">Return</a>
            </div>
        `;

        document.body.prepend(modal);
        
        
    }
    slide1 = document.getElementById('slide1');
    slide2 = document.getElementById('slide2');
    slide3 = document.getElementById('slide3');
    slide4 = document.getElementById('slide4');
    leftButton = document.getElementById('leftButton');
    rightButton = document.getElementById('rightButton');
};
function changeSlides(){
    let rightKey = document.querySelector('.rightButton');
    let leftKey = document.querySelector('.leftButton');
    rightKey.addEventListener('click', goRight);
    leftKey.addEventListener('click', goLeft);
    whatSlide();
};

function goRight(){
    counter++;
    if (counter == 3){
        let rightBtn = document.querySelector('.rightButton');
        rightBtn.disabled = true;
    }
    if (counter > 0){
        let leftBtn = document.querySelector('.leftButton');
        leftBtn.disabled = false;
    };
    hideAll();
    whatSlide();
};
function goLeft(){
    counter--;
    if (counter == 0){
        let leftBtn = document.querySelector('.leftButton');
        leftBtn.disabled = true;
    }
    if (counter < 3){
        let rightBtn = document.querySelector('.rightButton');
        rightBtn.disabled = false;
    };

    hideAll();
    whatSlide();
}
function whatSlide(){
    switch(counter%4){
        case 0:
            slide1.classList.remove('hidden');
            leftButton.classList.add('hidden2');
            break;
        case 1:
            slide2.classList.remove('hidden');
            leftButton.classList.remove('hidden2');
            break;
        case 2:
            slide3.classList.remove('hidden');
            rightButton.classList.remove('hidden2');
            break;
        case 3:
            slide4.classList.remove('hidden');
            rightButton.classList.add('hidden2');
            break;
        
    };
};
function hideAll(){
    slide1.classList.add('hidden');
    slide2.classList.add('hidden');
    slide3.classList.add('hidden');
    slide4.classList.add('hidden');
};
function offModal(){
    let getModal;
    getModal = document.body.firstChild;
    getModal.innerHTML = "";
    getModal.remove();
    isOpen = false;
};