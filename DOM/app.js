/*Объектная Модель Документа (DOM) – это программный интерфейс (API) для HTML и XML документов. DOM предоставляет структурированное представление документа и определяет то, как эта структура может быть доступна из программ, которые могут изменять содержимое, стиль и структуру документа. */

const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');
// const h1 = document.getElementsByTagName('h1');
//возвращает список всех элементов "h1" в документе
// console.log(h1);
// console.dir(h1);
// console.dir(div);
// console.log(titles);
// console.dir(titles);
// console.log(Array.from(titles));
// console.log([...titles]);

console.log(div.parentElement); //возвращает прямого родителя
const link = div.querySelector('.link');
console.log(link);
console.log(link.parentElement);
console.log(link.closest('.content')); //ближайщий родитель с указанным селектором 

//Attributes

div.classList.add('article', 'custom'); //добавление новых классов

div.classList.remove('article'); //удаление
div.classList.contains('custom'); //return true or false
//.toggle - 
console.log(div.classList.toggle('toggle')); //.toggle adds the class if it doesn't exist and returns true
console.log(div.classList.toggle('toggle')); // when called again, removes the class and returns false

console.log(link.href); //http://127.0.0.1:5500/index.html#

div.setAttribute('id', 'myId');  //accepts the attribute name and its values
console.log(div.id); //'myId'
div.id = 'yourId';  //changing the value of attribute
console.log(div.id);

(div.getAttribute('id'));


//The data-* global attributes form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation by scripts.
div.dataset.myatter;
 

// manipulations with DOM

const title = document.querySelector('h1');
console.log(title);

// title.innerHTML = ''; //content removal
title.innerHTML = '<span>some text</span>'; //adds tag 'span' 

// title.textContent = 'new text'; //changes the value in the 'title'

// title.appendChild('div');

title.insertAdjacentHTML("beforebegin", "<h2> title h2 </h2");
//adds tag as String

// title.insertAdjacentElement(); //the same as the previous method

// creating element

const span = document.createElement('span');

span.textContent = 'span text';
span.classList.add('myClass');
//element doesn't exist in the page layout
console.log(span);
//adding to the page layout
// title.appendChild(span);

// div.appendChild(span);
//deletes 'span' from 'title' and adds in the end of 'div'
//an element can only be in a single instance.
//DOM operations are synchronous operations


const fragment = document.createDocumentFragment();
const colors = ['red', 'white', 'blue', 'orange'];
colors.forEach(color => {
  const item = document.createElement('div');
  item.classList.add(`bg-${color}`);
  item.style.background = color;
  item.textContent = color;
  fragment.appendChild(item);
});
document.body.appendChild(fragment);

// Removing elements

// link.remove();
// title.parentElement.removeChild(title);