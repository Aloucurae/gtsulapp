
var idconte;

function ampliame(id) {
	document.getElementById(id).className = "amplia";
	idcon = 'cont_'+id;
	idconte = idcon;
	document.getElementById(idcon).style.display = "block"; 
 
	 var divs = $('.normal'); 	 
  
	 $.each(divs,function(x,y){
	 	
	 	$(this).css('display','none');
	 	 

	 });
}

function voltanormal(){

<<<<<<< HEAD
	 var divs = $('.normal'); 	 
  
	 $.each(divs,function(x,y){
	 	
	 	$(this).css('display','block');
	 	 
=======
	var divs = $('.normal'); 	 
	 	  
	$.each(divs,function(x,y){
	 
		$(this).css('display','block');
>>>>>>> origin/master

	});

}

function voltanormal1(){

<<<<<<< HEAD
	document.getElementById(idcon).style.display = "none";
	
	var ampliado = $('.amplia'); 

	 for(var i=0;i<=ampliado.length;i++) { 
	 	
	 		ampliado[i].className = "normal"; 	
	 		voltanormal();	 		
=======
	$('idcon').css('display','none');

	var ampliado = $('.amplia'); 

	$.each(divs,function(x,y){

		ampliado[i].className = "normal";

	});
>>>>>>> origin/master

	voltanormal();
	 			 
}


