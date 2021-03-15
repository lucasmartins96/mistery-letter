function eraseLetter() {
  const letterContainer = document.getElementById('carta-gerada');
  letterContainer.innerText = '';
}
/*
* Recorri ao seguinte site pro entendimento da função test().
* Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method
*/

function isEmptyInput(txtInput) {
  if (txtInput === '') {
    return true;
  }
  const testRegex = /^\s+/;
  return testRegex.test(txtInput);
}

/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomInt(min, max) {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin)) + intMin;
}

function pickGroups(obj) {
  const classesGroups = Object.keys(obj);
  const amountToBeSubtracted = getRandomInt(0, 3);
  if (amountToBeSubtracted === 1) {
    const randomIndex = getRandomInt(0, 3);
    classesGroups.splice(randomIndex, 1);
  } else {
    return classesGroups;
  }
  return classesGroups;
  /* else if (amount === 2) {
    const randomIndex = getRandomInt(0, 3);
    classesGroups.splice(randomIndex, 2);
  }  */
}

function drawClasses() {
  const wordSpan = document.createElement('span');
  const spanClasses = {
    styleGroup: ['newspaper', 'magazine1', 'magazine2'],
    sizeGroup: ['medium', 'big', 'reallybig'],
    rotationAndInclinationGroup: ['rotateleft', 'rotateright', 'skewleft', 'skewright'],
  };
  const drawnGroups = pickGroups(spanClasses);
  for (let index = 0; index < drawnGroups.length; index += 1) {
    const currentGroup = drawnGroups[index];
    const randomIndex = getRandomInt(0, spanClasses[currentGroup].length);
    const drawnClass = spanClasses[currentGroup][randomIndex];
    wordSpan.classList.add(drawnClass);
  }
  return wordSpan;
}

function createLetter() {
  eraseLetter();
  const txtLetter = document.getElementById('carta-texto').value;
  const letterContainer = document.getElementById('carta-gerada');
  const counterLetter = document.getElementById('carta-contador');
  if (!isEmptyInput(txtLetter)) {
    const wordSplited = txtLetter.split(' ');
    for (let index = 0; index < wordSplited.length; index += 1) {
      const wordSpan = drawClasses();
      wordSpan.innerText = wordSplited[index];
      letterContainer.appendChild(wordSpan);
    }
    counterLetter.innerText = `${wordSplited.length}`;
  } else {
    letterContainer.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

function addEventCreateLetterBtn() {
  const btnCreateLetter = document.getElementById('criar-carta');
  btnCreateLetter.addEventListener('click', createLetter);
}
addEventCreateLetterBtn();

function changeClass(event) {
  const spanClasses = {
    styleGroup: ['newspaper', 'magazine1', 'magazine2'],
    sizeGroup: ['medium', 'big', 'reallybig'],
    rotationAndInclinationGroup: ['rotateleft', 'rotateright', 'skewleft', 'skewright'],
  };
  const className = [];
  const drawnGroups = pickGroups(spanClasses);
  for (let index = 0; index < drawnGroups.length; index += 1) {
    const currentGroup = drawnGroups[index];
    const randomIndex = getRandomInt(0, spanClasses[currentGroup].length);
    const drawnClass = spanClasses[currentGroup][randomIndex];
    className.push(drawnClass);
  }
  event.target.className = className.join(' ');
}

function addEventSpan() {
  const letterContainer = document.getElementById('carta-gerada');
  letterContainer.addEventListener('click', changeClass);
}
addEventSpan();
