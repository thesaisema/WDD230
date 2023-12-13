const gridbutton = document.querySelector("#directory-grid");
const listbutton = document.querySelector("#directory-list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("directory-grid");
	display.classList.remove("directory-list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("directory-list");
	display.classList.remove("directory-grid");
}
