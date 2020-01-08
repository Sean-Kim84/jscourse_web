const notes = [
  {
    title: "Lord of Ring",
    body: "blahblahsslalal"
  },
  {
    title: "Old man and Sea",
    body: "blahblahsslalal"
  },
  {
    title: "Wolfgang",
    body: "blahblahsslalal"
  },
  {
    title: "Son of God",
    body: "blahblahsslalal"
  }
];

// document.querySelector('button').addEventListener('click', function(e){
//   console.log('Add a new todo...')

// });

// document.querySelectorAll('button')[1].addEventListener('click', function(){
//   console.log('Delete All');   
// })

document.querySelector('#create-note').addEventListener('click', function(e){
  e.target.textContent = "The button was clicked"
});

document.querySelector('#remove-all').addEventListener('click', function(e){
  // e.target.textContent = "The button was removed"
  document.querySelectorAll('.note').forEach(function(note){
    note.remove();
  })
})


/* Single */
// p
// #replace
// .item

/* Multiple */
// p#order
// button.inventory
// h1#title.application
// h1.application#title
