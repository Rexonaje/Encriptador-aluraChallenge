//obtener texto del input
var ButtonEncript= document.getElementById("encript");
let EncriptOutput=document.querySelector('.EncriptOutput');
//cambiar characters
function changeSring(){
	let TextChange= document.querySelector(".EncriptInput").value;
		//cabiar letras en cada variable
	TextChangedE=TextChange.replace(/e/g,'enter');
	TextChangedI=TextChangedE.replace(/i/g,'imes');
	TextChangedO=TextChangedI.replace(/o/g,'ober');
	TextChangedA=TextChangedO.replace(/a/g,'ai');
	TextChangedU=TextChangedA.replace(/u/g,'ufat');
	
	return TextChangedU
}
//lo envia al return con un metodo dom 

ButtonEncript.onclick =
	function buttonclicked(){
		   EncriptOutput.value='';
		
		 EncriptOutput.value=changeSring(); 

		let textInput= document.querySelector(".EncriptInput");
		textInput.value='';
	};                                                                           

