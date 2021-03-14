function eraseLetter() {
  const letterContainer = document.getElementById('carta-gerada');
  letterContainer.innerText = '';
}

function createLetter() {
  eraseLetter();
  const txtLetter = document.getElementById('carta-texto').value;
  const letterContainer = document.getElementById('carta-gerada');
  const wordSplited = txtLetter.split(' ');
  for (let index = 0; index < wordSplited.length; index += 1) {
    const wordSpan = document.createElement('span');
    wordSpan.innerText = wordSplited[index];
    letterContainer.appendChild(wordSpan);
  }
}

function addEventCreateLetterBtn() {
  const btnCreateLetter = document.getElementById('criar-carta');
  btnCreateLetter.addEventListener('click', createLetter);
}
addEventCreateLetterBtn();
