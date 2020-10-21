const addLiElement = () => {
  let ul = document.querySelector('#items');
  console.log(ul);

  let allLi = document.querySelectorAll('li');
  console.log(allLi);

  let newLi = document.createElement('li');
  newLi.setAttribute('class', 'item');

  let itemNr = allLi.length + 1;
  console.log(itemNr);

  newLi.innerText = `item ${itemNr}`;
  ul.appendChild(newLi);


}

const button = document.querySelector('button');
console.log(button);

button.addEventListener('click', addLiElement);