
// create the module and name it scotchApp
var myApp = angular.module('myApp',[]); 
 
myApp.controller('listCtrl', ['$scope', '$http', function ($scope, $http){

	$('#hover').hide();
	$('#info').hide();

	$('#hover').fadeIn( "slow", function() {
		    // Animation complete.
	});

	var dados = JSON.parse(window.localStorage.getItem('dados'));

	var stat=1;
	var urls='http://app.alexjonas.com.br/lista/app.php?stat=';

	if (dados) {

		$scope.lugares = dados.lugar;
    	$scope.categorias = dados.categ;
    	stat=2;
    	$('#hover').fadeOut( "slow", function() {
		    // Animation complete.
		});

	} 

 
    $http.get(urls+stat)

    	.error(function(data, status) {
			console.error('Erro ao conectar com o servidor',status);
			alert('falha ao conectar com o servidor \nErro: '+status+'\nTente novamente mais tarde ou \nEnvie um print da tela para o desenvolvedor\n'+urls);
			alert('data');
			alert('status');
		})

	    .success(function(data) {

	    	if (data.stat == 1) {

		    	$scope.lugares = data.lugar;
		    	$scope.categorias = data.categ;

		    	window.localStorage.setItem('dados', JSON.stringify(data));

		    	$('#hover').fadeOut( "slow", function() {
				    // Animation complete.
				});
			  	console.log('Banco Sicronizado');

	    	}else{
			  	console.log('Sem Atualização');

	    	}


	    });

}]); /**/
   
  
function info(){

	$('#info').fadeIn( "slow", function() {
	});

}

function info2(){

	$('#info').fadeOut( "slow", function() {
	});

}


