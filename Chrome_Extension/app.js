let savedInput = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
const inputFromLocalStorage = JSON.parse(localStorage.getItem("savedInput"));

if (inputFromLocalStorage) {
	savedInput = inputFromLocalStorage;
	render(savedInput);
}

function render(input) {
	let listItems = "";
	for (let i = 0; i < input.length; i++) {
		listItems += `
			<li>
				<a href="${input[i]}" target="_blank">
					${input[i]}
				</a>
			</li>
		`;
	}
	ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function() {
	savedInput.push(inputEl.value);
	inputEl.value = "";
	localStorage.setItem("savedInput", JSON.stringify(savedInput));
	render(savedInput);
});

tabBtn.addEventListener("click", function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		console.log(tabs[0]);
		savedInput.push(tabs[0].url);
		inputEl.value = "";
		localStorage.setItem("savedInput", JSON.stringify(savedInput));
		render(savedInput);
	})
	
})

deleteBtn.addEventListener("dblclick", function () {
	localStorage.clear();
	savedInput = [];
	ulEl.innerHTML = "";
})
