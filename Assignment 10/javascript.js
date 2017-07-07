function growBox(){
    document.getElementById("box").style.height = "250px";
};

function blueBox() {
	document.getElementById("box").style.backgroundColor = "blue";
};

function fadeBox() {
	document.getElementById("box").style.opacity += 0.1;
};

function resetBox() {
	document.getElementById("box").style.height = "150px";
	document.getElementById("box").style.backgroundColor = "orange";
	document.getElementById("box").style.opacity = 1;
}

