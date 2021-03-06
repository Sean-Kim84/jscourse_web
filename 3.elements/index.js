// Add new element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = "This is a new text element from Javascript";
// document.querySelector('body').appendChild(newParagraph);



/* Challenge area */

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

const todos = [{
    text: 'Order cat food',
    completed: false
  },
  {
    text: 'Hello I\'\ Sean',
    completed: true
  },
  {
    text: 'Cleaning the room',
    completed: false
  }
];

const incompleteTodos = todos.filter(function(todo) {
  return !todo.completed
});

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function(todo, index) {
  const p = document.createElement('p');
  p.textContent = `${index +1}. ${todo.text}`
  document.querySelector('body').appendChild(p);
});
