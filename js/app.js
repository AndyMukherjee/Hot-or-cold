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
  		  		
  		$('#userGuess').prop("disabled", false);
  		
  		$('#guessButton').prop("disabled", false);
  		$('#guessList').empty();
  		$('#count').html("0");



  	m =	Math.floor(Math.random() * (100 - 1)) + 1;

  	console.log(m);

  	});
  	
  	var c=0;

 $("#guessButton").click(function(){

  	var v = $("#userGuess").val(); // assigning variable "v" to the value given by the user.
  
  c=c+1;

   
  $('#count').html(c);

  console.log(c);    

   var low1 = m-50;
   var high1 = m+50; 

   var low2 = m-40;
   var high2= m+40;

   var low3 = m-30;
   var high3 = m+30;

   var low4 = m-20;
   var high4 = m+20;

   var low5 = m-10;
   var high5 = m+10;

$('#guessList')

	if (v==m) {$('#guessList').append("You are correct"+'<br>');}

	else if (v >=low5 && v<=high5) {$('#guessList').append(v+" -very Hot"+'<br>');}

	else if (v >=low4 && v<=high4) {$('#guessList').append(v+"-Hot"+'<br>');}

	else if (v >=low3 && v<=high3) {$('#guessList').append(v+"-Warm"+'<br>');}

	else if (v >=low2 && v<=high2) {$('#guessList').append(v+"-Cold"+'<br>');}

	else if (v >=low1 && v<=high1) {$('#guessList').append(v+"-Ice Cold"+'<br>');}

if (c==3) {alert("You are out of turns. Start new game");
c=0;

$('#userGuess').prop("disabled", true); 
$('#guessButton').prop("disabled", true);

  		}
return false;




  	});
});