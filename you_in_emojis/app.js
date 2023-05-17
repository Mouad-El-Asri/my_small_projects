const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer");
const inputEl = document.getElementById("input-el");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmojis() {
	emojiContainer.textContent = "";
	for (let i = 0; i < myEmojis.length; i++) {
		const emoji = document.createElement('span');
		emoji.textContent = myEmojis[i];
		emojiContainer.append(emoji); 
	}
}

renderEmojis(); 

pushBtn.addEventListener('click', function() {
	if (inputEl.value) {
		myEmojis.push(inputEl.value);
		inputEl.value = "";
		renderEmojis();
	}
})

unshiftBtn.addEventListener('click', function() {
	if (inputEl.value) {
		myEmojis.unshift(inputEl.value);
		inputEl.value = "";
		renderEmojis();
	}
})

popBtn.addEventListener('click', function() {
	myEmojis.pop();
	inputEl.value = "";
	renderEmojis();
})

shiftBtn.addEventListener('click', function() {
	myEmojis.shift();
	inputEl.value = "";
	renderEmojis();
})
