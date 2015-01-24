var listening;
var nums = [];
var score = 0;
var hexVal;
var diff;
var rounds = 0;
var button = [];

$( document ).ready(function() {


	$(".difficulty").click( function() {
		var difficulty = $(this).attr('id');
		switch( difficulty ) {
			case "Peaceful":
				getRandom(2);
				break;
			case "Stressful":
				getRandom(3);
				break;
			case "Classic":
				getRandom(4);
				break;	
			case "stop":
				getRandom(6);
				break;
			case "reset":
				reload();
				break;
		}
	});
	
	$("#theButtons button").click( function() {
		var clicked = $(this).attr('id');
		buttonClick(clicked);
		/*$(this).animate( 
			{height : "400px"}, 
			4000, 
			function() {
				$(this).animate( 
					{height : "200px"}, 
					4000
				);
			}
		);*/
	});
});


function getRandom(difficult)
{

	diff = difficult;
	listening = false;
	document.getElementById('score').innerHTML = 'Score: ' + score;
	console.log("Should be false " + listening);
	var i;
	var rand;
	for (i=0;i < diff;i++)
	{
		(function (i) {
			do
			{
				rand = Math.floor((Math.random() * 16) + 1);
			}
			while(nums.indexOf(rand) != -1);
			nums.push(rand);
			setColor(nums[i]);
			setTimeout(function () {
				setColor(nums[i]);
				console.log("Should be false " + listening);
			}, (250));
		}(i));	
	}
	listening = true;
	

}

function buttonClick(id)
{
	console.log(listening);
	if (!listening)
	{
		return;
	}
	else 
	{
		console.log(nums);
		var id = parseInt(id);
		var index = nums.indexOf(id);
		if(index == -1)
		{
			alert("You lost");
			reload();
		}
		console.log(index);
		nums.splice(index, 1);
		console.log(nums);
		if (nums.length == 0)
		{
			score = score + 100;
			document.getElementById('score').innerHTML = 'Score: ' + score;
			if (diff >= 3)
			{
				getRandom(diff + 1);
			}
			else
			{
				getRandom(diff);
			}
		}

	}
}

function setColor(btn){
	console.log(btn);
	var property=document.getElementById(btn);
	if(property!=null) {
	   if (window.getComputedStyle(property).backgroundColor == 'rgb(241, 196, 15)') {
			if (btn == 2 || btn == 5 || btn == 12 || btn == 15)
				{
					property.style.backgroundColor='rgb(192, 57, 43)';
				}
			else if (btn == 1 || btn == 8 || btn == 11 || btn == 14)
				{
					property.style.backgroundColor='rgb(41, 128, 185)';
				}
			else if (btn == 3 || btn == 6 || btn == 9 || btn == 16)
				{
					property.style.backgroundColor='rgb(39, 174, 96)';
				}
			else if (btn == 4 || btn == 7 || btn == 10 || btn == 13){
					property.style.backgroundColor='rgb(142, 68, 173)';
				}
	   }
		else {
				property.style.backgroundColor = "#f1c40f";
		}
	}
}
function reload() {
	location.reload();
}