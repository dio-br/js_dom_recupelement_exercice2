// 1
let myBody = document.getElementsByTagName('body');
console.log(myBody);

// 2
let firstChild = myBody[0].firstChild;
console.log(firstChild);

// 3
let lastChild = myBody[0].lastChild;
console.log(lastChild);

// 4
let exo4 = document.getElementsByTagName('div')[0];
let children = exo4.childNodes;
console.log(children);

// 5
let liste = document.getElementsByTagName('li')[0];
let nextSibling = liste.nextElementSibling;
console.log(nextSibling);

// 6
let liste2 = document.getElementsByTagName('li')[1];
let preSibling = liste2.previousElementSibling;
console.log(preSibling)



//// 
// get elelemts by tag name

//1
// let myBody = document.getElementsByTagName('body')[0]
let myBody = document.body
console.log(myBody);

//2
let firstElementBody = myBody.firstElementChild
console.log(firstElementBody);

//3
let lastElementBody = myBody.lastElementChild
console.log(lastElementBody);

//4
let myDiv = document.getElementsByTagName('div')[0]
let exo4 = myDiv.children 
console.log(exo4);

//5
let firstLi = document.getElementsByTagName('li')[0]
let suivant = firstLi.nextElementSibling
console.log(suivant);

//6
let precendant = suivant.previousElementSibling
console.log(precendant);