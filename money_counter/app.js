let count = 0
let countPassnegers = document.getElementById("count-passengers")
let Save = document.getElementById("save-count")


function increment()
{
	count++
	countPassnegers.textContent = count + ' $'
}

function save()
{
	let countStr = count + '$' + ' - '
	Save.textContent += countStr
	count = 0
	countPassnegers.textContent = count 
}
