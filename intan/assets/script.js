const texts = ['Highest quality of raw materials (immunity boosting, color, gut cleanse) ', 'No artificial dyes', ' Patented unique bottle for one-hand easy handling and quantity optimized', 'Made with the most intensive pioneering technology and integrated RnD over years', 'ALL ethically (small farmers supported) and sustainably sourced traceability of materials'];
let word = 0; 
let letterIndex = 0; 
let currentText = ''; 
let letter = ''; 

(function type() {

  if (word == texts.length) {
    word = 0;
  }
 
  currentText = texts[word];
  letter = currentText.slice(0, ++letterIndex);
  document.querySelector('#typing').textContent = letter;

  if (letter.length == currentText.length) {
    word++;
    letterIndex = 0;
  }
  
  setTimeout(type, 90);
})();