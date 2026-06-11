const modeButton = document.getElementById("mode-btn");

var mode = "black";

modeButton.addEventListener("click", function(){
	body = document.body;
	if(mode == "black")
	{
		body.style.backgroundColor = "white";
		body.style.color = "black";
		modeButton.textContent = "Switch to dark mode";
		mode = "white";
	}
	else
	{
		body.style.backgroundColor = "black";
		body.style.color = "white";
		modeButton.textContent = "Switch to light mode";
		mode = "black";
	}
});