//alert box script

function showAlert() {
	var x = document.getElementById("messagebox");
	var y = document.getElementById("githublink");
	var z = document.getElementById("okbutton");
	x.style.visibility = "visible";
	y.style.display = "inline";
	z.style.display = "inline";
}
	
function hideAlert() {
	var x = document.getElementById("messagebox");
	var y = document.getElementById("githublink");
	var z = document.getElementById("okbutton");
	x.style.visibility = "hidden";
	y.style.display = "none";
	z.style.display = "none";
}

//minecraft alert box

function showAlertMc() {
	var x = document.getElementById("messagebox_mc");
	var y = document.getElementById("copybutton");
	var z = document.getElementById("okbutton");
	x.style.visibility = "visible";
	y.style.display = "inline";
	z.style.display = "inline";
	}
	
function hideAlertMc() {
	var x = document.getElementById("messagebox_mc");
	var y = document.getElementById("copybutton");
	var z = document.getElementById("okbutton");
	x.style.visibility = "hidden";
	y.style.display = "none";
	z.style.display = "none";
}

//copy minecraft IP
function copyIP(){
	var text = "mc.lambdaposting.games";
	navigator.clipboard.writeText(text);
}