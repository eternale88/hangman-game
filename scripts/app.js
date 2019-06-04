const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

// puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMessage;

  game1.puzzle.split('').forEach((letter) => {
    const letterEl = document.createElement('span');
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const data = await getPuzzle('2');
  game1 = new HangmanClass(data.puzzle, 5);
  render();
};

document.querySelector('#reset').addEventListener('click', () => {
  startGame();
});
startGame();

//  getPuzzle('2').then((data) => {
//      console.log(data.puzzle)
//  }).catch((error) => {
//      console.log(`Error: ${error}`);
//  })

//  getCountryDetails('PH').then((countryName) => {
//      console.log(`Country name is: ${countryName.name}`)
//  }).catch((error) => {
//      console.log(`Error is: ${error}`)
//  })

// Making an http request using fetch, which returns a promise
// {} is for customizing return, left blank because we aren't using this feature
//no longer use 'readystate', because with fetch api we know it completed
//first fetch example
// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//  if (response.status === 200) { //line below, res.json doesn't return object, but returns promise, so use promise chaining to get object when promise resolves or rejects, therefore add .then before catch
//     return response.json()
//  } else {
//      throw new Error('Unable to fetch the puzzle')
//  }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })

// promise challenge
// 1. Create getLocation function which takes no arguments
// 2. Setup getLocation to make a request to the url and parse the data
// 3. Use getLocation to print the city, region, and country information

// getLocation().then((location) => {
//     console.log(`You are currently in ${location.city}, ${location.region}, ${location.country}.`)
// }).catch((error) => {
//     console.log(error)
// })

//you are currently in Philadelphia, Pa, US

//Promise challenge part 2
// combines 2 promises in a promise chain, to get a specific country, generic IP('US') will become United States of America
// so we are no longer using a static country code like above, we are using the code returned from
// the api endpoint for 'Ipinfo'

// getCurrentCountry()
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// getLocation().then((location) => {
//     return getCountryDetails(location.country)
// }).then((countryDetails) => {
//     console.log(countryDetails.name)
// }).catch((error) => {
//     console.log(error)
// })
