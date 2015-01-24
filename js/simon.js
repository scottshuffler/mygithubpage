var listening = false;
var nums = [];
var hexVal;
var diff;
var rounds = 0;

$( document ).ready(function() {

	$(".difficulty").click( function() {
		var difficulty = $(this).attr('id');
		switch( difficulty ) {
			case "easy":
				getRandom(2);
				break;
			case "medium":
				getRandom(3);
				break;
			case "hard":
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
	console.log("Get random");
	diff = difficult;
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
			}, 500);
		}(i));	
	}
	listening = true;
	

}

function buttonClick(id)
{
	if (!listening)
	{
		return;
	}
	else 
	{
		console.log(nums);
		var id = parseInt(id);
		var index = nums.indexOf(id);
		nums.splice(index, 1);
		console.log(nums);
		if (nums.length == 0)
		{
			getRandom(diff);
		}
		else if(index == -1)
		{
			alert("You lost");
			reload();
		}
	}
}
function setColor(btn){
	console.log(btn);
	listening = false; 
	var property=document.getElementById(btn);
	if(property!=null) {
	   if (window.getComputedStyle(property).backgroundColor == 'rgb(241, 196, 15)') {
			if (btn == 2 || btn == 5 || btn == 12 || btn == 15)
				{
					property.style.backgroundColor='rgb(192, 57, 43)';
					listening = true; 
				}
			else if (btn == 1 || btn == 8 || btn == 11 || btn == 14)
				{
					property.style.backgroundColor='rgb(41, 128, 185)';
					listening = true; 
				}
			else if (btn == 3 || btn == 6 || btn == 9 || btn == 16)
				{
					property.style.backgroundColor='rgb(39, 174, 96)';
					listening = true; 
				}
			else if (btn == 4 || btn == 7 || btn == 10 || btn == 13){
					property.style.backgroundColor='rgb(142, 68, 173)';
					listening = true; 
				}
	   }
		else {
				property.style.backgroundColor = "#f1c40f";
				listening = true; 
		}
	}
}
function reload() {
	location.reload();
}