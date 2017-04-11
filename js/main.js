var answer = Math.floor((Math.random() *100) +1);
var counter = 0

function guessing() {
	counter++;

	if(counter > 10){
		document.getElementById("btn").disabled = true;
	}

	var guess = document.getElementById("guesses").value
	if(guess == answer){
		$("p").prepend("Congratulations! You've won! <br>");;
	} else if(guess== ""){
		$("p").prepend("Please Enter a valid number <br>");
	}else if(guess > 100 || guess <1){
		$("p").prepend("Please Enter a number between 1-100<br>");	
	}else if(guess > answer){
		$("p").prepend( guess + " is too high! Try again! <br>");
		return
	} else if (guess < answer){
		$("p").prepend(guess + " is too low! Try again! <br>")
	 	return
	 }

}





