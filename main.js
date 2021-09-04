// // creting lines for rope roll mark

// const rope = document.querySelector('.hang-rope .innerbar');

// const ropeRoll = document.createElement('div');
// ropeRoll.style.height = '5px';
// ropeRoll.style.width = '100%';
// ropeRoll.style.background = 'rgba(55,5,55,8)';
// // ropeRoll.style.transform = 'rotate(40deg)';
// ropeRoll.style.position = 'absolute';
// ropeRoll.style.zIndex = '1';
// ropeRoll.style.top = '40px';
// ropeRoll.style.overflow = 'hidden';

// rope.appendChild(ropeRoll);

const hangTree = document.querySelector('.hang-tree');
const hangRope = document.querySelector('.hang-rope');
const hangTie = document.querySelector('.hang-rope .hang-tie');
const headHappy = document.querySelector('.head-happy');
const headGloomy = document.querySelector('.head-gloomy');
const headDead = document.querySelector('.head-dead');
const shirt = document.querySelector('.body .shirt');
const rightHand = document.querySelector('.body .right-hand');
const lefthand = document.querySelector('.body .left-hand');
const trouser = document.querySelector('.waist-down .trouser');
const leftLeg = document.querySelector('.waist-down .left-leg');
const rightLeg = document.querySelector('.waist-down .right-leg');

// hangTree.style.display = 'block';

//choose option
const chooseOption = ['Places', 'sports', 'animals', 'fruits'];
const animals = [
  { name: 'eagle', description: ' large, powerful Birds of Prey' },
  {
    name: 'Alligator',
    description:
      'Strong bodied long mouth water animal that can move throgh land',
  },
  { name: 'Butterfly', description: 'the beautiful fly' },
  {
    name: 'Camel',
    description: 'long headed animal that stores consuming water in body',
  },
  {
    name: 'Tortoise',
    description: 'a land-dwelling reptile which is of the order Testudines',
  },
  {
    name: 'Dolphin',
    description:
      'small-toothed cetaceans easily recognizable by their curved mouths',
  },
  {
    name: 'rabbit',
    description: 'small, furry mammals with long ears, short fluffy tails',
  },
  {
    name: 'Elephant',
    description:
      ' largest living land animals, characterized by their long trunk',
  },
  { name: 'Giraffe', description: "the world's tallest mammals" },
  {
    name: 'Leopard',
    description: 'large carnivores are powerfully built with long bodies',
  },
];

const countries = [
  // {
  //   name: 'Antartica',
  //   description:
  //     "the world's highest, driest, windiest, coldest, and iciest continent",
  // },
  // {
  //   name: 'portugal',
  //   description:
  //     "Once continental Europe's greatest power, shares commonalities—geographic and cultural—with the countries of both northern Europe and the Mediterranean.",
  // },
  // {
  //   name: 'Afghanistan',
  //   description:
  //     'A country left by a military control been over ridden by a group',
  // },
  // {
  //   name: 'Cambodia',
  //   description: 'country on the Indochinese mainland of Southeast Asia',
  // },
  // {
  //   name: 'ireland',
  //   description: ' an island nation on the westernmost edge of Europe',
  // },
  // {
  //   name: 'canada',
  //   description: "the world's second-largest country by total area.",
  // },
  // {
  //   name: 'malaysia',
  //   description:
  //     'a multi-ethnic and multi-religious country in Southeast Asia and one of the wealthiest and most developed countries',
  // },
  // {
  //   name: 'mauritious',
  //   description:
  //     'an island nation off the southeast coast of the African continent',
  // },
  // {
  //   name: 'india',
  //   description:
  //     ' a country in South Asia. It is second largest country in population',
  // },
  {
    name: 'New zealand',
    description:
      'a land of great contrasts and diversity. Active volcanoes, spectacular caves, deep glacier lakes,',
  },
];

const sports = [
  {
    name: 'football',
    description:
      ' game in which two teams of 11 players, using any part of their bodies except their hands and arms',
  },
  {
    name: 'basketball',
    description:
      'a game played between two teams of five players each on a rectangular court, usually indoors',
  },
  {
    name: 'badminton',
    description:
      'a racket sport played by either two opposing players or two opposing pairs',
  },
  {
    name: 'voleyball',
    description:
      'a team sport in which two teams of six players are separated by a net',
  },
  {
    name: 'cricket',
    description: 'played with a bat and ball and involves two competing sides',
  },
  {
    name: 'archery',
    description: 'sport, practice, or skill of using a bow',
  },
  {
    name: 'sky diving',
    description: 'parachuting from an airplane for fun',
  },
  {
    name: 'wrestling',
    description: ' a combat sport involving grappling-type techniques',
  },
  {
    name: 'skating',
    description: ' a sport in which people slide over a smooth ice surface ',
  },
  {
    name: 'cycling',
    description: ' an sport with a stearable machine',
  },
];

const fruits = [
  {
    name: 'apricot',
    description: 'a fruit that resembles the peach but much smaller',
  },
  {
    name: 'blueberries',
    description: 'an oval  a crown forming, woody, perennial shrub',
  },
  {
    name: 'avocado',
    description:
      'best fat fruit flesh with a buttery consistency and a rich, nutty flavour',
  },
  {
    name: 'banana',
    description:
      ' a curved, yellow fruit with a thick skin and soft sweet flesh',
  },
  {
    name: 'cranberries',
    description: 'it is a pink, round, oblong, or pear-shaped berries',
  },
  {
    name: 'passionfruit',
    description:
      'a sweet, exotic fruit with a delicious, slightly tart flavour.',
  },
  {
    name: 'pomagranate',
    description:
      ' a large shrub or small tree that has smooth, evergreen leaves',
  },
  {
    name: 'watermelon',
    description: 'a large fruit of a more or less spherical shape.',
  },
  {
    name: 'pineapple',
    description:
      'a sweet tropical fruit with a tough leathery skin and spiky leaves on top.',
  },
  {
    name: 'mulberries',
    description:
      'deciduous and have toothed, sometimes lobed leaves that are alternately arranged along the stems',
  },
];
const chooseSection = document.querySelector('.choose-word-type');
const animalOption = document.querySelector('.animals');
const countriesOption = document.querySelector('.countries');
const sportsOption = document.querySelector('.sports');
const fruitsOption = document.querySelector('.fruits');

// word section heading
const heading = document.querySelector('.heading');

// word find Section
const wordSection = document.querySelector('.word-find');

// insert word
const wordHolder = document.querySelector('.fill-word');

// keyboard
const keyboardSection = document.querySelector('.keyboard');

let splitWord;

// choose word
function chooseWord(arr) {
  console.log(arr);
  let array = arr;
  let random = Math.trunc(Math.random() * array.length);
  const word = arr[random].name;
  console.log(word);
  splitWord = word.split('');
  console.log(splitWord);
  //   get the length of the random word
  let length = splitWord.length;
  for (let i = 0; i < length; i++) {
    letterContainer(splitWord[i], i);
  }
}

function inputLetter(letter, i) {
  console.log('inputletter');
  // console.log(container[i]);
  container.innerText = letter;
}

// creating space for each letter of word
function alignLetterSpace(letter, i) {
  let container;
  if (!spaceSet) {
    container = document.createElement('div');
    container.style.width = '40px';
    container.style.height = '40px';
    container.style.fontSize = '30px';
    container.style.textTransform = 'uppercase';
    container.style.fontWeight = 'bold';
    container.style.textAlign = 'center';

    letter != ' '
      ? (container.style.borderBottom = '13px solid rgb(211, 205, 17)')
      : (container.style.border = 'transparent');

    i = 0
      ? (container.style.marginLeft = '100px')
      : (container.style.marginRight = '10px');
    // container.innerText = word;
    wordHolder.appendChild(container);
  } else {
    inputLetter(letter, i);
  }
}

let spaceSet = false;
//each letter container function
function letterContainer(letter, i) {
  console.log('first', spaceSet);
  alignLetterSpace(letter, i);
}

// keyboard
function keyboard() {
  const keys = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
  ];

  keys.forEach((e, i) => {
    const key = document.createElement('div');
    // key.style.display = 'flex';

    // key.style.flexWrap = 'wrap';
    key.style.width = '50px';
    key.style.height = '50px';
    key.style.border = '3px solid blue';
    key.style.fontSize = '30px';
    key.style.textAlign = 'center';
    key.style.fontWeight = 'bold';
    key.style.margin = '10px';
    key.style.cursor = 'pointer';
    key.setAttribute('class', 'onActive');
    key.setAttribute('id', e);
    key.innerText = e;
    keyboardSection.appendChild(key);

    // select key
    keyClick = document.querySelector('#e');
  });
}

// create display head

function createHeading(eventClicked) {
  chooseSection.style.display = 'none';

  // event heading

  const head = document.createElement('div');
  head.innerText = eventClicked.value.toUpperCase();
  head.style.fontSize = '40px';
  head.style.textAlign = 'center';
  head.style.color = '#6655ab';
  heading.appendChild(head);

  // eevent hint

  const hint = document.createElement('div');
  hint.style.fontSize = '18px';
  hint.style.fontFamily = 'cursive';
  hint.innerText = 'Hint?';
  hint.style.cursor = 'pointer';
  hint.style.textDecoration = 'underline';
  hint.style.textAlign = 'center';
  hint.style.color = 'rgb(14, 178, 85)';
  hint.style.margin = '20px 0 0 80px';
  hint.setAttribute('id', 'hint');
  heading.appendChild(hint);
}

chooseSection.addEventListener('click', function (e) {
  const eventClicked = e.target.classList;
  if (eventClicked.contains('animals')) {
    createHeading(eventClicked);

    chooseWord(animals);

    // keyboard

    keyboard();
  }
  if (eventClicked.contains('sports')) {
    createHeading(eventClicked);

    chooseWord(sports);

    // keyboard

    keyboard();
  }
  if (eventClicked.contains('countries')) {
    createHeading(eventClicked);

    chooseWord(countries);

    // keyboard

    keyboard();
  }
  if (eventClicked.contains('fruits')) {
    createHeading(eventClicked);

    chooseWord(fruits);

    // keyboard

    keyboard();
  }
});

// click on keyboardSection
function keepValue(e, i) {
  const div = document.createElement('div');
  div.innerText = e[i];
}

keyboardSection.addEventListener('click', function (e) {
  spaceSet = true;
  const letter = e.target.id.toUpperCase();
  console.log(letter, splitWord);
  splitWord.forEach((e, i) => {
    console.log(e[i]);
    if (e[i] == letter) {
      console.log('value', e, i);
      letterContainer(e, i);
    }
  });
});
