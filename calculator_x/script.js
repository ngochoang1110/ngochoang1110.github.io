function giaiThua(){
	var x=1;
	var y=document.getElementById('result').value;
	for (var i=1; i<y; i++) x=x*i;
	document.getElementById('result').value=x;	  

}
function binhPhuong(){
	var x=document.getElementById('result').value;
	document.getElementById('result').value=x*x;
}
function canBac2(){
	var x=document.getElementById('result').value;
	document.getElementById('result').value=Math.sqrt(x);
}
function phanTram(){
	var x=document.getElementById('result').value;
	document.getElementById('result').value=x/100;

}
function pi(){
	document.getElementById('result').value=Math.PI;
}
function xoa(){
	result.value=result.value.substr(0,result.value.length-1);
}