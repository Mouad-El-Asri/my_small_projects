let homeScore = 0
let guestScore = 0
let incrementHomeScore = document.getElementById("home-score")
let incrementGuestScore = document.getElementById("guest-score")
let highlightHome = document.getElementById("home")
let highlightGuest = document.getElementById("guest")

function updateHighlight()
{
	if (homeScore > guestScore)
	{
		highlightHome.classList.add("highlight_winner")
		highlightHome.classList.remove("highlight_loser")
		highlightGuest.classList.add("highlight_loser")
		highlightGuest.classList.remove("highlight_winner")
		highlightGuest.classList.remove("highlight_teams")
	}
	else if (homeScore < guestScore)
	{
		highlightGuest.classList.add("highlight_winner")
		highlightGuest.classList.remove("highlight_loser")
		highlightHome.classList.add("highlight_loser")
		highlightHome.classList.remove("highlight_winner")
		highlightHome.classList.remove("highlight_teams")
	}
	else
	{
		highlightGuest.classList.remove("highlight_loser")
		highlightHome.classList.remove("highlight_loser")
		highlightGuest.classList.remove("highlight_winner")
		highlightHome.classList.remove("highlight_winner")
		highlightGuest.classList.add("highlight_teams")
		highlightHome.classList.add("highlight_teams")
	}
}

updateHighlight()

function home_add_one()
{
	homeScore++
	incrementHomeScore.textContent = homeScore
	updateHighlight()
}

function home_add_two()
{
	homeScore += 2
	incrementHomeScore.textContent = homeScore
	updateHighlight()
}

function home_add_three()
{
	homeScore += 3
	incrementHomeScore.textContent = homeScore
	updateHighlight()
}

function guest_add_one()
{
	guestScore++
	incrementGuestScore.textContent = guestScore
	updateHighlight()
}

function guest_add_two()
{
	guestScore += 2
	incrementGuestScore.textContent = guestScore
	updateHighlight()
}

function guest_add_three()
{
	guestScore += 3
	incrementGuestScore.textContent = guestScore
	updateHighlight()
}

function reset()
{
	homeScore = 0
	guestScore = 0;
	incrementHomeScore.textContent = homeScore
	incrementGuestScore.textContent = guestScore
	updateHighlight()
}
