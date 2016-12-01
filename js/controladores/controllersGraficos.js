angular.module('abmapp.controllersGraficos', [])


app.controller('controlGraficos', function($scope,$state, $http,factorySucursalProducto) {
//////pedidos

   factorySucursalProducto.TraerPedidos().then(function(rta){
        $scope.ListadoPedidos = rta;
  console.info('pedidosssss..',$scope.ListadoPedidos);

$scope.sucursales={};
$scope.sucursales.id_local=[];


/*
$scope.ListadoPedidos.forEach(function(pedido){
				    switch (pedido.tipo){
				    	case "Accidente":
				    			$scope.cantidadAccidente = parseInt($scope.cantidadAccidente) + 1;
				    		break;
				    	case "Averia en vehiculo":
				    			$scope.cantidadFalla = parseInt($scope.cantidadFalla) + 1;
				    		break;
				    	case "Animales sueltos":
				    			$scope.cantidadAnimales = parseInt($scope.cantidadAnimales) + 1;
				    		break;
				    	case "Necesidad de Ambulancia":
				    			$scope.cantidadAmbulancia = parseInt($scope.cantidadAmbulancia) + 1;
				    		break;
				    	case "Incendio":
				    			$scope.cantidadIncendio = parseInt($scope.cantidadIncendio) + 1;
				    		break;
				    	case "Arbol Caido":
				    			$scope.cantidadArbol = parseInt($scope.cantidadArbol) + 1;
				    		break;
				    	case "Nieve en el Camino":
				    			$scope.cantidadNieve = parseInt($scope.cantidadNieve) + 1;
				    		break;
				    }
		  		});


*/


console.info('sucursales..',$scope.sucursales);



















    });
////////
$scope.chartConfig = {
  options: {

     /* chart: {
          type: 'bar'
      },
      tooltip: {
          style: {
              padding: 10,
              fontWeight: 'bold'
          }
      }
  */},
  //The below properties are watched separately for changes.
 chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
    //    title: {
     //       text: 'Browser market shares at a specific website, 2014'
      //  },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
  //Series object (optional) - a list of series using normal Highcharts series options.
  series: [{


            type: 'pie',
            name: 'Viviendas Vendidas',
            data: [
                ['Firefox', 12.0],
                ['IE', 26.8],
            /*    {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
               */ ['Safari', 8.5],
                ['Opera', 6.2],
                ['Others', 0.7]
            ]
        



    //  comentario al seleccionar la linea// no funca sin esto
//     data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }],
  //Title configuration (optional)
  title: {
      text: 'De Muestra'
  },
/* para uno de barra
  loading: false,
  xAxis: {

  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {text: 'Meses'},
      credits: {
          enabled: true
      }
  },
    yAxis: {

  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {text: 'Anios'},
      credits: {
          enabled: true
      }
  },
  */
  seHighStocks: false,
  //size (optional) if left out the chart will default to size of the div or something sensible.
  size: {
      width: 900,  //ancho
      height: 500 //alto
  },
  //function (optional)
  func: function (chart) {
      //setup some logic for the chart
  }
};


//////temaaaa

Highcharts.theme = {
   colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
         ]
      },
      style: {
         fontFamily: '\'Unica One\', sans-serif'
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
/////////	
	/* xAxis: {
				        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
				            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				    },

				    series: [{
				        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
				        */
});