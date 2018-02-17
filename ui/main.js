console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementbyId('maintext')
element.innerHTML = 'new value';

//move the image
var img= document.getElementbyId('img')
img.onclick = function(){
    img.style.marginleft = '100px';
};