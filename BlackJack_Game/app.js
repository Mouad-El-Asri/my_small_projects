let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message;
let player = {
	name: "Mouad",
	chips: 193
};
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if (randomNumber == 1) {
		return (11);
	} else if (randomNumber > 10) {
		return (10);
	} else {
		return (randomNumber);
	}
}

function startGame() {
	if (!isAlive && !hasBlackJack) {
		let firstCard = getRandomCard();
		let secondCard = getRandomCard();
		cards = [firstCard, secondCard];
		sum = firstCard + secondCard;
		isAlive = true;
		renderGame();
	}
}

function renderGame() {
	cardsEl.textContent = "Cards : ";
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i];
		if (i != cards.length - 1) {
			cardsEl.textContent += ", ";
		}
	}
	sumEl.textContent = "Sum : " + sum;
	if (sum < 21) {
		message = "Do you want to pick a new card ?";
	} else if (sum == 21) {
		hasBlackJack = true;
		message = "You've got BlackJack!";
	} else {
		isAlive = false;
		message = "You're out of the game!";
	}
	messageEl.textContent = message;
}

function newCard() {
	if (isAlive && !hasBlackJack) {
		let card = getRandomCard();
	sum += card;
	cards.push(card);
	renderGame();
	}
}

function reset() {
	cardsEl.textContent = "Cards :";
	sumEl.textContent = "Sum :";
	messageEl.textContent = "Do you want to play a round ?";
	cards = [];
	sum = 0;
	hasBlackJack = false;
	isAlive = false;
}
