let savedInput = ["a", "b", "c"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
	myLeads.push(savedInput.value);
	// console.log(savedInput);
});

for (let i =0; i < savedInput.length; i++) {
	console.log(savedInput[i]);
}