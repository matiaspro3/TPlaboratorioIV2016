angular.module('abmapp.controllersGraficos', [])


app.controller('controlGraficos', function($scope,$state, $http,factorySucursalProducto,factoryEmpleado) {
//////pedidos
$scope.ListadoSucur=[];

   factorySucursalProducto.TraerPedidos().then(function(rta){
$scope.ListadoPedidos = rta;
  console.info('pedidosssss..',$scope.ListadoPedidos);


for (i in $scope.ListadoPedidos) { 
$scope.ListadoSucur.push('['+$scope.ListadoPedidos[i].localDir+','+'25'+']');
}

console.info('$scope.ListadoSucur..',$scope.ListadoSucur);


console.info('sucursales..',$scope.sucursales);



    });
//


factoryEmpleado.TraerTodos().then(function(rta){
    console.info("disponibles...",rta);
    $scope.ListEmpleados=rta;
    
   })
///





$scope.empleado1={};
$scope.empleado2={};




	

$scope.mostrar1=false;
$scope.mostrar2=false;
$scope.mostrar3=false;


$scope.Grafico=function(algo){
	switch (algo){
						    	case "1":
						    				$scope.mostrar1=true;
						    				$scope.mostrar2=false;
						    						$scope.mostrar3=false;$scope.mostrar4=false;

						    		break;
								case "2":
						    				$scope.mostrar2=true;
						    					$scope.mostrar1=false;
						    						$scope.mostrar3=false;
						    						$scope.mostrar4=false;
						    		break;
						    	case "3":
						    				$scope.mostrar3=true;
						    				$scope.mostrar2=false;
						    						$scope.mostrar1=false;

						    		break;



}



}
var nombre1;
var nombre2;

$scope.Buscar=function()
{
console.info('...................',$scope.empleado1);
console.info($scope.empleado1.nombre);
 nombre1=$scope.empleado1.nombre;
nombre2=$scope.empleado2.nombre;
console.info('nombre..',nombre1);
						    				$scope.mostrar4=true;
}


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
            			    ['Helguera 998', 26],
            			    ['Pacheco 2612', 25],
            			    ['Cabildo 9984', 10],
            			    ['Bauness 3566', 7],
							['Nazca 315', 12],
            			    ['Av. San Martin 2013', 18],
							['Franco 3330', 32],
							['Av. Belgrano 2368', 17],

                  ]
  }],
  //nombre del grf
  title: {
      text: 'Venta segun sucursales'
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
 
};
$scope.chartConfig2 = {
           chart: {
            type: 'bar',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Ventas por local/empleado'
        },
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
        series: [{
            type: 'bar',
            name: 'Ventas',
            data: [ [], 
              		    ['Helguera 998', 26],
            			    ['Pacheco 2612', 25],
            			    ['Cabildo 9984', 10],
            			    ['Bauness 3566', 7],
							['Nazca 315', 12],
            			    ['Av. San Martin 2013', 18],
							['Franco 3330', 32],
							['Av. Belgrano 2368', 17],

            ]
        }],






   
};

$scope.chartConfig3 = {
   chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Comparativo de Ventas'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Viernes'
            ],
            plotBands: [{ // visualize the weekend
                from: 2.5,
                to: 4.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Unidades Vendidas'
            },

            categories:[
'0','1','2','3','4','5','6'
            ]

        },



        tooltip: {
            shared: true,
           // valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
           // name: nombre1,
           name: 'Empleado 1',
            data: [3, 4, 3, 5, 4]
        }, {
           // name: nombre2,
           name: 'Empleado 2',
            data: [1, 6, 4, 3, 3]
        }]
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

