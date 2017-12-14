		function canbac2() {
			var a= document.getElementById('result').value;
			document.getElementById('result').value = Math.sqrt(a);
		}
		function phantram(){
			var a= document.getElementById('result').value;
			document.getElementById('result').value = document.getElementById('result').value /100
		}
		function binhphuong(){
			var a = document.getElementById('result').value;
			document.getElementById('result').value = a*a;
		}
		function giaithua(){
			var a = document.getElementById('result').value;
			var y=1;
			for (var x = 1; x<a; x++){
				y=y*x
			document.getElementById('result').value = y*a;
		}
		}
		function pi(){
			var a = document.getElementById('result').value;
			document.getElementById('result').value = a*3.14159265359;
		}