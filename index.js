// DOM references
const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

// Show a value in the message
myMessage.innerText = 'This is a message in the DOM!'

const theMesaageButton = document.querySelector('.theMessageButton');
theMesaageButton.addEventListener('click', function () {
     setTimeout(function () {
        myMessage.innerText = 'This is a message in the DOM!'
     }, 3000);
});


// Show a message when a button is clicked
const theMessageButton = document.querySelector('.theMessageButton');
const clearMesaageButton = document.querySelector('.clearMessageButton');
clearMesaageButton.addEventListener('click', function () {
    myMessage.innerText = '';
});

// Enter and show a value
const inputBox = document.querySelector('.theInputValue');
theMesaageButton.addEventListener('click', function () {
    myMessage.innerText = inputBox.value;
});

// Adding web page styling with JavaScript
myMessage.addEventListener('click', function () {
    myMessage.classList.toggle('darkmode');
});


// Create a new DOM element
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector('.fruits');
for(let i=0;i<fruits.length;i++){
    // get fruits from the list
    const fruit = fruits[i];

     // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}

// Add extra features
const fruitInput = document.querySelector('.fruitInput');
const addFruitButton = document.querySelector('.addFruitButton');

addFruitButton.addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = fruitInput.value;
    fruitList.appendChild(li);
})