var defaultColor = 'img/green_off.jpg';
var activeColor = 'img/green_on.jpg'

//Create scoreboard
for(var j = 0; j < 54; j++) {
	for(var i = 0; i < 7; i++) {
		var img = $('<img>');
		img.attr('src', defaultColor);
		img.css({
			'top': function() {return 25 * i + "px";}, 
		 	'left':function() {return 25 * j + "px";}});
		 $('.row1').append(img);
		}
}

var arr = $('.row1 img'); 
var count = 0;

// movement data
setInterval(function() {
	print(arrToPrint, defaultColor);
	for (var i = 0; i < arrToPrint.length;i++) {
         arrToPrint[i] = arrToPrint[i] - 7;
    }
	print(arrToPrint, activeColor);
},	200);

var a = [1,2,3,4,5,6,7,10,14,17,21,24,29,30,31,32, 33, 34];
var b = [0,1,2,3,4,5,6,7,10,13,14,17,20,21,24,27,29,30,32,33];
var c = [1,2,3,4,5,7,13,14,20,21,27,28,34];
var d = [0,1,2,3,4,5,6,7,13,14,20,21,27,29,30,31,32,32,33];
var e = [0,1,2,3,4,5,6,7,10,13,14,17,20,21,24,27,28,34];
var f = [0,1,2,3,4,5,6,7,10,14,17,21,24,28];
var g = [1,2,3,4,5,7,13,14,17,20,21,24,27,28,31,32,33];
var h = [0,1,2,3,4,5,6,10,17,24,28,29,30,31,32,33,34];
var i = [0,6,7,13,14,15,16,17,18,19,20,21,27,28,34];
var j = [4,5,13,20,21,22,23,24,25,26];
var k = [0,1,2,3,4,5,6,10,16,18,22,26,28,34];
var l = [0,1,2,3,4,5,6,13,20,27,34];
var m = [0,1,2,3,4,5,6,8,16,17,22,28,29,30,31,32,33,34];
var n = [0,1,2,3,4,5,6,9,17,25,28,29,30,31,32,33,34];
var o = [1,2,3,4,5,7,13,14,20,21,27,29,30,31,32,33];
var p = [0,1,2,3,4,5,6,7,10,14,17,21,24,29,30];
var q = [1,2,3,4,5,7,13,14,18,20,21,26,27,29,30,31,32,33,34];
var r = [0,1,2,3,4,5,6,7,10,14,17,18,21,24,26,29,30,34];
var s = [1,2,5,7,10,13,14,17,20,21,24,27,29,32,33];
var t = [0,7,14,15,16,17,18,19,20,21,28];
var u = [0,1,2,3,4,5,13,20,27,28,29,30,31,32,33];
var v = [0,1,2,3,4,12,20,26,28,29,30,31,32];
var w = [0,1,2,3,4,5,6,12,17,18,26,28,29,30,31,32,33,34];
var x = [0,1,5,6,9,11,17,23,25,28,29,33,34];
var y = [0,1,9,17,18,19,20,23,28,29];
var z = [0,5,6,7,11,13,14,17,20,21,23,27,28,29,34];
var tere = [10, 17,24];
var one = [8,14,21,22,23,24,25,26,27];
var two = [1,6,7,12,13,14,18,20,21,24,27,29,30,34];
var three = [1,5,7,10,13,14,17,20,21,24,27,29,30,32,33];
var four = [3,4,9,11,15,18,21,25,28,29,30,31,32,33,34];
var five = [0,1,2,3,6,7,10,13,14,17,20,21,24,27,28,32,33];
var six = [1,2,3,4,5,7,10,13,14,17,20,21,24,27,29,32,33];
var seven = [0,7,14,18,19,20,21,24,28,29,30];
var eight = [1,2,4,5,7,10,13,14,17,20,21,24,27,29,30,32,33];
var nine = [1,2,5,7,10,13,14,17,20,21,24,27,29,30,31,32,33];
var zero = [1,2,3,4,5,7,11,13,14,17,20,21,23,27,29,30,31,32,33];

var arrWord = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,
              tere, one, two, three, four,five,six,seven,eight,nine,zero];

var arrAbc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
             '-', '1','2','3','4','5','6','7','8','9','0'];

var arrToPrint = [];
var countWords = 0;
var constant = 350;
var space = 7;

$('.input').keypress(function(e) {
    if(e.which == 13) {
    	print(arrToPrint, defaultColor);
		arrToPrint = [];
		countWords = 0;
		constant = 350;
		
		var text = $('.input').val();
		text = text.toLowerCase();
		var letters = text.split("");

		for (var i = 0; i < letters.length;i++) {
			for (var k = 0; k < arrAbc.length;k++) {
				if (letters[i] === " ") { 
					constant += 7;
					break;
				}

				if (letters[i] === arrAbc[k]) {
					filling(arrWord[k]);
					countWords++;
					constant += 42;
					console.log(constant);
					break;
				}
			}
		}

		print(arrToPrint, activeColor);
	}
});

function filling(arr) {
	for (var i = 0; i < arr.length; i++) {
		if(countWords === 0) arrToPrint.push(constant + arr[i]);
		if(countWords >= 1) arrToPrint.push(constant + arr[i]);
	}
}

function print(a, images) {
	for(var i = 0; i < a.length; i++) {
		$(arr[a[i]]).attr('src', images);
	}
}

