/**
 * option 1: directly set on the HTML element
 *   <button onclick="console.log(4)">Click Me</button> * 
 * 
 * option 2: add onclick function on the html element 
 * IMPORTANT: we will use this 
 * <button id="make-green">Make Green</button>
 * 
 */

console.log('this is event js')

// option 2
function makeRed(){
    document.body.style.backgroundColor= 'red';
}

//option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//Option: 4
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'

}

//Option: Final
// IMPORTANT: We will use4 this sometime
document.getElementById('make')
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor = 'green';
});

//Option: Final
// IMPORTANT: We will use4 this sometime
// document.getElementById('make-goldenrod').addEventListener('click',function(){})
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod'
})






