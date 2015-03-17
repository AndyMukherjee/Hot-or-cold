$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);

  	});

var m ;
  	$(".new").click(function(){

  	m =	Math.floor(Math.random() * (100 - 1)) + 1;

  	console.log(m);

  	});

  	$("#guessButton").click(function(){

  		var v = $("#userGuess").val();
  	});


{
	if (v=m) {alert("You are correct");}

	else if (v = (m<=50 || m>=50)) {alert("Ice Cold");}

	else if (v = (m<=40 || m>=40)) {alert("Very Hot");}

	else if (v = (m<=30 || m>=30)) {alert("Warm");}

	else if (v = (m<=20 || m>=20)) {alert("Hot");}

	else if (v = (m<=10 || m>=10)) {alert("Very Hot");}


};
});