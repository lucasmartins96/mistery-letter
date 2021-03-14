function eraseLetter() {
  const letterContainer = document.getElementById('carta-gerada');
  letterContainer.innerText = '';
}
/*
* Recorri ao seguinte site pro entendimento da função test().
* Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method
*/

function isInvalidInput(txtInput) {
  const testRegex = /^\s+/;
  return testRegex.test(txtInput);
}

function createLetter() {
  eraseLetter();
  const txtLetter = document.getElementById('carta-texto').value;
  const letterContainer = document.getElementById('carta-gerada');
  if (!isInvalidInput(txtLetter)) {
    const wordSplited = txtLetter.split(' ');
    for (let index = 0; index < wordSplited.length; index += 1) {
      const wordSpan = document.createElement('span');
      wordSpan.innerText = wordSplited[index];
      letterContainer.appendChild(wordSpan);
    }
  } else {
    letterContainer.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

function addEventCreateLetterBtn() {
  const btnCreateLetter = document.getElementById('criar-carta');
  btnCreateLetter.addEventListener('click', createLetter);
}
addEventCreateLetterBtn();
