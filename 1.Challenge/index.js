/* Challenge 1 */

// Create the new HTML FILE
// An h1 and 5p tags  
// Server that folder and view doc in the browser

// Craete an link a  Javascript to the HTML
// Remove all p tags that have "the" in the text

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function(paragraph){
  if(paragraph.textContent.includes("The")){
    paragraph.remove();
  }
})