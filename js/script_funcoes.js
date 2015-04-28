
var idconte;

function ampliame(id) {
	document.getElementById(id).className = "amplia";
	idcon = 'cont_'+id;
	idconte = idcon;
	document.getElementById(idcon).style.display = "block"; 

	 var divs =document.getElementsByClassName("normal"); 
	 for(var i=0;i<=divs.length;i++) { 
	
	 		divs[i].style.display = "none"; 	

	 } 
}

function voltanormal(){

	var divs = $('.normal'); 	 
	 	  
	$.each(divs,function(x,y){
	 
		$(this).css('display','block');

	});

}

function voltanormal1(){

	$('idcon').css('display','none');

	var ampliado = $('.amplia'); 

	$.each(divs,function(x,y){

		ampliado[i].className = "normal";

	});

	voltanormal();
	 			 
}


