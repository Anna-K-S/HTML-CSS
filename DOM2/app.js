//Events
// const btn = document.querySelector('button');
// const link = document.querySelector('a');
// btn.onclick = function() {
//   console.log('click');
// };

// btn.addEventListener('click', function(e){
//   console.log(e);
// } );

// btn.addEventListener('click', (e) => {
//   console.log(this);
//   console.log(e);
// }); //'this' в стрелочной функ указывает на сам объект 

// function clickhandler (e){
//   console.log(this);
//   e.preventDefault();
//   console.log('click');
// }

// link.addEventListener('click',clickhandler);
//The defaultPrevented read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.


// link.removeEventListener('click', clickhandler);
// const container = document.querySelector('.container');
// btn.addEventListener('click', (e) => {
//   const div = document.createElement('div');
//   const nestedBtn = document.createElement('button');
//   div.textContent = Math.random();
//   nestedBtn.textContent = 'button';
//   div.appendChild(nestedBtn);
//   container.appendChild(div);
// });

// container.addEventListener('click', (e) => {
//   if(e.target.tagName === 'BUTTON') {
//     console.log('button clicked');
//   };
// }); //отслеживание события на динамически добавленном элементе 

const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');
const body = document.querySelector('body');

btn.addEventListener('click', e => {
  console.log('click btn');
});

wrap.addEventListener('click', e => {
  console.log('click wrap');
}, true);

body.addEventListener('click body', e => {
  console.log('click body');
}, true);

