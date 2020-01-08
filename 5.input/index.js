const notes = [{
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

document.querySelector('#create-note').addEventListener('click', function (e) {
  e.target.textContent = "The button was clicked"
});

document.querySelector('#remove-all').addEventListener('click', function (e) {
  // e.target.textContent = "The button was removed"
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove();
  })
});

document.querySelector('#search-text').addEventListener('input', function(e){ // onchage 와 input event 비교
  console.log(e.target.value);
})