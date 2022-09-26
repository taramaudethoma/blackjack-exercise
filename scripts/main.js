const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const playerPointHTML = document.getElementById("player-points");
const dealerPointHTML = document.getElementById("dealer-points");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: typeof rank === 'number' ? rank : 10,
  };
  deck.push(card);
};

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
}

shuffle(deck);

let playerPoints = 0;
let dealerPoints = 0;

const dealButton = document.getElementById ('deal-button');
dealButton.addEventListener('click', handleDealCards);  

const hitButton = document.getElementById ('hit-button');
hitButton.addEventListener('click', handleHitCards);

function createCard(cardObject) {
  let card = document.createElement('img');
  card.setAttribute ("src", `images/${cardObject.rank}_of_${cardObject.suit}.png`)
  return card;

}


function handleDealCards()  {
  let dealtCard = deck.pop();
  let card = createCard(dealtCard);
  playerHand.appendChild(card);
  playerPoints = playerPoints + dealtCard.pointValue;

  let dealtCard2 = deck.pop();
  let card2 = createCard(dealtCard2);
  dealerHand.appendChild(card2);
  dealerPoints = dealerPoints + dealtCard2.pointValue;

  let dealtCard3 = deck.pop();
  let card3 = createCard(dealtCard3);
  playerHand.appendChild(card3);
  playerPoints = playerPoints + dealtCard3.pointValue;

  let dealtCard4 = deck.pop();
  let card4 = createCard(dealtCard4);
  dealerHand.appendChild(card4);
  dealerPoints = dealerPoints + dealtCard4.pointValue;
  
  playerPointHTML.innerText = playerPoints;
  dealerPointHTML.innerText = dealerPoints;
}

function handleHitCards()  {
  let dealtCard = deck.pop();
  let card = createCard(dealtCard);
  playerHand.appendChild(card);
  playerPoints = playerPoints + dealtCard.pointValue;

  let dealtCard2 = deck.pop();
  let card2 = createCard(dealtCard2);
  dealerHand.appendChild(card2);
  dealerPoints = dealerPoints + dealtCard2.pointValue;

  playerPointHTML.innerText = playerPoints;
  dealerPointHTML.innerText = dealerPoints;
}




window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});
