
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
	 	//console.log($('.normal'));
	 // for(var i=0;i<=divs.length;i++) { 
	
	 // 		//divs[i].style.display = "block"; 	 
	 // 		console.log($(this))		 

	 // } 	  
	 $.each(divs,function(x,y){
	 	// console.log(x);
	 	$(this).css('display','block');
	 	 console.log($(this));

	 });

}

function voltanormal1(){

	document.getElementById(idcon).style.display = "none";
	var ampliado = document.getElementsByClassName("amplia"); 

	 for(var i=0;i<=ampliado.length;i++) { 
	 	
	 		ampliado[i].className = "normal"; 	
	 		voltanormal();
	 		

	 } 	 
}


