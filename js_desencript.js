//desencriptar
//toma el valor del output
let copybutton = document.getElementById('copy');
let buttonDesencript=document.getElementById('desencript');
let Textinput=document.querySelector('.EncriptOutput');

function changeBack(){
	let textback=document.querySelector('.EncriptOutput').value;
	
		textbackE=textback.replace(/enter/g,'e');
		textbackA=textbackE.replace(/ai/g,'a');
		textbackI=textbackA.replace(/imes/g,'i');
		textbackO=textbackI.replace(/ober/g,'o');
		textbackU=textbackO.replace(/ufat/g,'u');
		//console.log( textbackU + ' textbackU'); //string
		return textbackU;
}

buttonDesencript.onclick=
	function twobuttonclicked(){

		Textinput.value =changeBack();
	}
copybutton.onclick=
	function copy(){
		let TextfieldOutput=document.querySelector('.EncriptOutput');
	    navigator.clipboard.writeText(TextfieldOutput.value);
	}	
			
	   

	//let Textoutput=document.querySelector('.EncriptOutput');
	//Textoutput.value='';
