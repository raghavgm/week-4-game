//VARIABLES

$(document).ready(function() {


var wins = 0;
var losses = 0;
var computerGuess = (Math.floor(Math.random() * (120 - 1 + 1)) + 1);//Got this formula from developer.mozilla.org
var userTotal = 0;
var r = (Math.floor((Math.random() * 12) + 1));
var o = (Math.floor((Math.random() * 12) + 1));
var g = (Math.floor((Math.random() * 12) + 1));
var b = (Math.floor((Math.random() * 12) + 1));
$(".target").html(computerGuess);
$(".counter").html("<p> Wins: " + wins + "</p>" + "<p> Losses: " +losses + "</p");

//FUNCTIONS

//Reset Function
function reset() {
userTotal = 0;
$(".score").html(userTotal);
computerGuess = (Math.floor(Math.random() * (120 - 1 + 1)) + 1);
r = (Math.floor((Math.random() * 12) + 1));
o = (Math.floor((Math.random() * 12) + 1));
g = (Math.floor((Math.random() * 12) + 1));
b = (Math.floor((Math.random() * 12) + 1));
$(".target").html(computerGuess);//If I had the wins and losses count here, it would skip a round, why???
};


//Click functions for each crystal.

$("#red").click(function() {
	
	userTotal += r;
	$(".score").html(userTotal);
	//console.log(userTotal);
	if(userTotal==computerGuess){
	reset();
	alert("You Win!!");
	wins++;
	console.log(wins);
	$(".counter").html("<p> Wins: " + wins + "</p>" + "<p> Losses: " +losses + "</p");
	}
	else if(userTotal>computerGuess){
		reset();
		alert("You Lost!!");
		losses++;
		console.log(losses);
		$(".counter").html("<p> Wins: " + wins + "</p>" + "<p> Losses: " +losses + "</p");
	}
		
});

$("#blue").click(function() {
	userTotal += b;
	$(".score").html(userTotal);
	
	if(userTotal==computerGuess){
	reset();
	alert("You Win!!");
	wins++;
console.log(wins);
$(".counter").html("<p> Wins: " + wins + "</p>" + "<p> Losses: " +losses + "</p");
}
	else if(userTotal>computerGuess){
		reset();
		alert("You Lost!!");
		losses++;
		console.log(losses);
	$(".counter").html("<p> Wins: " + wins + "</p>" + "<p> Losses: " +losses + "</p");
	};
	
});
$("#orange").click(function() {
	userTotal += o;
	$(".score").html(userTotal);
	
	if(userTotal==computerGuess){
	reset();
	alert("You Win!!");
	wins++;
	console.log(wins);
	$(".counter").html("<p> Wins: " + wins + "</p>" + "<p> Losses: " +losses + "</p");
	}
	else if(userTotal>computerGuess){
		reset();
		alert("You Lost!!");
		losses++;
		console.log(losses);
		$(".counter").html("<p> Wins: " + wins + "</p>" + "<p> Losses: " +losses + "</p");
	};
	
});
$("#green").click(function() {
	userTotal += g;
	$(".score").html(userTotal);
	
	if(userTotal==computerGuess){
	reset();
	alert("You Win!!");
	wins++;
	console.log(wins);
	$(".counter").html("<p> Wins: " + wins + "</p>" + "<p> Losses: " +losses + "</p");
	}
	else if(userTotal>computerGuess){
		$(".score").html("<p> Previous Score: " + userTotal + "</p>");//Why isnt this working???
		reset();
		alert("You Lost!!");
		userTotal=0;		
		losses++;
		console.log(losses);
		$(".counter").html("<p> Wins: " + wins + "</p>" + "<p> Losses: " +losses + "</p");
	};
	
	
});
console.log(userTotal);//Why isn't updated userTotal recognized here and how would I make it so??




});
