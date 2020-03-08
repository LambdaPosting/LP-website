// shortcut key script

addEventListener('keyup', function(e) { 
	clickSound();
	//D - Discord
	if (e.keyCode == 68) location='https://discord.gg/xMkHHxt';
	//M - Multiplayer - show server browser
	if (e.keyCode == 77) showServerBrowser();
	//ESC - Close the Minecraft server dialog
	if (e.keyCode == 27) hideServerBrowser();
	//F - Facebook group
	if (e.keyCode == 70) location='https://www.facebook.com/groups/408658379533410/';
	//P - Facebook page
	if (e.keyCode == 80) location='https://www.facebook.com/lambdaposting/';
	//W - Wiki
	if (e.keyCode == 87) location='https://wiki.lambdaposting.games';
	//G - GitHub
	if (e.keyCode == 71) location='https://github.com/LambdaPosting';
	//R - Patreon
	if (e.keyCode == 82) location='https://www.patreon.com/LambdaPosting';
	//A - About
	if (e.keyCode == 65) showAlert();
	//ESC - Close the About box
	if (e.keyCode == 27) hideAlert();
});

//click sound
function clickSound(){
	document.getElementById('click').play();
}