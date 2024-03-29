var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var score = 0;

var displayScore = function () {
	document.getElementById('total-score').innerHTML = "Score: " + score;
}

displayScore();

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		score += 1;
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
		displayScore();
	}
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

var resetBoard = function () {
	document.getElementById('game-board').remove();
	var newGame = document.createElement('div');
	newGame.setAttribute('id', 'game-board');
	newGame.setAttribute('class', 'board clearfix');
	document.getElementById('main').insertBefore(newGame, main.children[3]);
	cardsInPlay = [];
	createBoard();
}

var resetGame = function() {
	var resetButton = document.querySelector('button');
	resetButton.addEventListener('click', resetBoard);
}

resetGame();








