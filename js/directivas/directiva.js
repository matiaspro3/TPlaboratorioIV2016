angular
.module('abmapp')


.directive('menuCentral', function() {

return {replace : true, restrict : "MEAC", templateUrl : "templates/templateMenuCentral.html"};

})


.directive('menuProd', function() {

return {replace : true, restrict : "MEAC", templateUrl : "templates/templateMenuProductos.html"};

})


.directive('menuSucu', function() {

return {replace : true, restrict : "MEAC", templateUrl : "templates/templateMenuSucursales.html"};

})


.directive('menuModal', function() {

return {replace : true, restrict : "MEAC", templateUrl : "templates/templateModal.html"};

})




.directive('nombreUser', function(factoryUserActual) {

return {scope : {useractual : '=usuarito'}, replace : true, restrict : "MEAC", templateUrl : "templates/nombreUser.html"};

})

.directive('prodList', function(factoryUserActual) {
	

return {scope : {objEnv : '=obj',Borrar: '&'}, replace : true, restrict : "MEAC", templateUrl : "templates/templateProduc.html" , //};

link: function($scope, element, attrs) {

	
			    $scope.user=factoryUserActual.Logueado;
//	console.info($scope.user);
//	console.info($scope.user.perfil);
            $scope.Borrar = function(produ){
            	//console.info($scope.BorrarUsuario);
			    $scope.$parent.Borrar(produ);
			  }

			  $scope.Modificar = function(produ){
			    $scope.$parent.Modificar(produ);
		  }

        }
};

})

.directive('userList', function(factoryUserActual) {
	

return {scope : {objEnv : '=obj',Borrar: '&'}, replace : true, restrict : "MEAC", templateUrl : "templates/templateUser.html" , //};

link: function($scope, element, attrs) {

	
			    $scope.user=factoryUserActual.Logueado;
//	console.info($scope.user);
//	console.info($scope.user.perfil);
            $scope.Borrar = function(produ){
            	//console.info($scope.BorrarUsuario);
			    $scope.$parent.Borrar(produ);
			  }

			  $scope.Modificar = function(produ){
			    $scope.$parent.Modificar(produ);
		  }

        }
};

})



.directive('produList', function() {
	

return {scope : {objEnv : '=obj',Borrar: '&'}, replace : true, restrict : "MEAC",
 templateUrl : "templates/templateProduc.html", //};

link: function($scope, element, attrs) {

	
			   // $scope.user=factoryUserActual.Logueado;
//	console.info($scope.user);
//	console.info($scope.user.perfil);
            $scope.Ver = function(objEnv){
            	//console.info($scope.BorrarUsuario);
			    $scope.$parent.Ver(objEnv);
			  }
}}

})



.directive('sucuList', function() {
	

return {scope : {objEnv : '=obj',Borrar: '&'}, replace : true, restrict : "MEAC",
 templateUrl : "templates/templateSucursales.html",// };
link: function($scope, element, attrs) {

	
			   // $scope.user=factoryUserActual.Logueado;
//	console.info($scope.user);
//	console.info($scope.user.perfil);
            $scope.Ver = function(objEnv){
            	//console.info($scope.BorrarUsuario);
			    $scope.$parent.Ver(objEnv);
			  }
}}

})























//fin
 ;