// Event delegation is a technique where event listener is attached to parent element instead of multiple child elements in javascript
// When an event happens on child element, it bubbles up to parent element and then parent element listener handles the event

// HTML:
// <div id="button-container">
//   <button>Button 1</button>
//   <button>Button 2</button>
// </div>
// <button id="add-button">Add Button</button>

const buttonContainer = document.getElementById('button-container');
const addButton = document.getElementById('add-button');

buttonContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log(`Clicked on ${event.target.textContent}`);
  }
});

addButton.addEventListener('click', () => {
  const newButton = document.createElement('button');
  newButton.textContent = `Button ${buttonContainer.children.length + 1}`;
  buttonContainer.appendChild(newButton);
});
