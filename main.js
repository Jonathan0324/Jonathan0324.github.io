var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myVariable = 'Bob';
myVariable = 'Steve';

/*
    Everything in between is a comment.
*/

//This is a comment

//var iceCream = 'chocolate';
//if (iceCream === 'chocolate') {
//    alert('Yay, I love chocolate ice cream!');    
//} else {
//    alert('Awwww, but chocolate is my favorite...');    
//}
//
//function multiply(num1, num2) {
//    var result = num1 * num2;
//    return result;
//}
//
//alert(multiply(3, 10));
//
//document.querySelector('html').onclick = function(){
//    alert('Ouch! stop poking me!');
//}

var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/A320.jpg') {
        myImage.setAttribute('src','images/A320neo.jpg');
    } else {
        if(mySrc === 'images/A320neo.jpg') {
            myImage.setAttribute('src','images/AirChina-A320.jpg');
        } else {
            myImage.setAttribute('src','images/A320.jpg');
        }
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}

