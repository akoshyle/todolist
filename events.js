// -----SHOPPING LIST-----

// How can this code be applied to multiple divs such that user can create as many lists as they want? Each [new] div in focus should simply take up the entirety of this script (without duplication). Add ul with title, then li. Check https://codepen.io/bi7je/pen/OZKBgv

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var doneButtons = document.getElementsByClassName("dnbtn");
var deleteButtons = document.getElementsByClassName("dltbtn");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// create delete button
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteButton);
	deleteButton.onclick = deleteOnClick;
	// create done button
	var doneButton = document.createElement("button");
	doneButton.appendChild(document.createTextNode("Done"));
	li.appendChild(doneButton);
	doneButton.onclick = doneOnClick;
}

function doneOnClick(event){
	event.target.parentNode.classList.toggle("done");
}

function deleteOnClick(event){
	event.target.parentNode.remove();
}

function addListAfterClick(){
	if (inputLength() > 0){
	createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13){
	createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// For existing html li items...

for(var i = 0; i < deleteButtons.length; i++){
	deleteButtons[i].addEventListener("click", deleteOnClick, false);
}

for(var i = 0; i < doneButtons.length; i++){
	doneButtons[i].addEventListener("click", doneOnClick, false);
}


// notice how event functions are without the ending (). these are called callback functions and they are only here as reference to the actual function so that they only run when the event occurs. 
// check this