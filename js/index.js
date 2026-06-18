const modeButton = document.getElementById("mode-btn");

var mode = "black";

modeButton.addEventListener("click", function(){
	const body = document.body;
	if(mode == "black")
	{
		body.style.background = "linear-gradient(135deg, #000000, #004e1a)";
		body.style.color = "white";
		modeButton.textContent = "Switch to dark mode";
		mode = "white";
	}
	else
	{
		body.style.background = "linear-gradient(135deg, #5fffb4, #ffffff)";
		body.style.color = "black";
		modeButton.textContent = "Switch to light mode";
		mode = "black";
	}
});

