var akershusLayer = L.layerGroup().addTo(mymap);
var buskerudLayer = L.layerGroup().addTo(mymap);
var ostfoldLayer = L.layerGroup().addTo(mymap);

///////////////////////////////////////////////////////////////////////////////////////////////
//make the Akershus polygon outline
///////////////////////////////////////////////////////////////////////////////////////////////
var polygonAkershus = L.polygon(
[ //begin creating Akershus polygon
[10.33,59.855000000000004],[10.335000000000001,59.855000000000004],[10.33,59.875],[10.35,59.875],[10.365,59.895000000000003],[10.359999999999999,59.905000000000001],[10.375,59.910000000000004],[10.375,59.93],[10.35,59.945],[10.35,59.960000000000001],[10.380000000000001,59.980000000000004],[10.415000000000001,59.980000000000004],[10.415000000000001,60.009999999999998],[10.43,60.009999999999998],[10.435,60.030000000000001],[10.48,60.030000000000001],[10.495000000000001,60.009999999999998],[10.515000000000001,60],[10.545,60],[10.585000000000001,59.984999999999999],[10.59,59.975000000000001],[10.595000000000001,59.980000000000004],[10.615,59.975000000000001],[10.635,59.954999999999998],[10.635,59.93],[10.625,59.93],[10.625,59.920000000000002],[10.65,59.910000000000004],[10.66,59.884999999999998],[10.69,59.875],[10.73,59.875],[10.74,59.844999999999999],[10.77,59.825000000000003],[10.815,59.825000000000003],[10.85,59.810000000000002],[10.880000000000001,59.810000000000002],[10.895,59.825000000000003],[10.915000000000001,59.829999999999998],[10.93,59.825000000000003],[10.935,59.835000000000001],[10.904999999999999,59.870000000000005],[10.915000000000001,59.920000000000002],[10.935,59.939999999999998],[10.945,59.939999999999998],[10.945,59.954999999999998],[10.935,59.965000000000003],[10.94,59.969999999999999],[10.925000000000001,59.984999999999999],[10.890000000000001,59.980000000000004],[10.855,60],[10.84,59.995000000000005],[10.83,60.024999999999999],[10.81,60.024999999999999],[10.82,60.039999999999999],[10.815,60.045000000000002],[10.82,60.064999999999998],[10.790000000000001,60.064999999999998],[10.755000000000001,60.100000000000001],[10.77,60.115000000000002],[10.755000000000001,60.115000000000002],[10.75,60.125],[10.705,60.120000000000005],[10.68,60.134999999999998],[10.675000000000001,60.149999999999999],[10.710000000000001,60.149999999999999],[10.725,60.160000000000004],[10.73,60.149999999999999],[10.77,60.149999999999999],[10.77,60.164999999999999],[10.779999999999999,60.175000000000004],[10.77,60.215000000000003],[10.779999999999999,60.219999999999999],[10.779999999999999,60.230000000000004],[10.800000000000001,60.240000000000002],[10.81,60.265000000000001],[10.870000000000001,60.32],[10.885,60.32],[10.935,60.350000000000001],[10.9,60.380000000000003],[10.904999999999999,60.395000000000003],[10.82,60.425000000000004],[10.67,60.435000000000002],[10.710000000000001,60.454999999999998],[10.69,60.490000000000002],[10.710000000000001,60.495000000000005],[10.715,60.524999999999999],[10.77,60.490000000000002],[10.925000000000001,60.469999999999999],[10.955,60.480000000000004],[10.945,60.490000000000002],[10.975,60.5],[11.005000000000001,60.5],[11.065,60.520000000000003],[11.095000000000001,60.515000000000001],[11.09,60.520000000000003],[11.1,60.520000000000003],[11.1,60.550000000000004],[11.105,60.560000000000002],[11.115,60.560000000000002],[11.109999999999999,60.57],[11.120000000000001,60.590000000000003],[11.154999999999999,60.605000000000004],[11.215,60.564999999999998],[11.220000000000001,60.539999999999999],[11.210000000000001,60.505000000000003],[11.245000000000001,60.5],[11.300000000000001,60.465000000000003],[11.34,60.460000000000001],[11.385,60.410000000000004],[11.4,60.375],[11.42,60.370000000000005],[11.42,60.350000000000001],[11.455,60.329999999999998],[11.484999999999999,60.325000000000003],[11.540000000000001,60.285000000000004],[11.6,60.270000000000003],[11.6,60.25],[11.58,60.240000000000002],[11.585000000000001,60.204999999999998],[11.575000000000001,60.200000000000003],[11.575000000000001,60.189999999999998],[11.56,60.185000000000002],[11.56,60.175000000000004],[11.585000000000001,60.175000000000004],[11.595000000000001,60.155000000000001],[11.625,60.145000000000003],[11.625,60.134999999999998],[11.654999999999999,60.120000000000005],[11.69,60.115000000000002],[11.73,60.094999999999999],[11.779999999999999,60.090000000000003],[11.790000000000001,60.07],[11.785,60.050000000000004],[11.82,60.055],[11.825000000000001,60.045000000000002],[11.82,60.024999999999999],[11.84,60.009999999999998],[11.835000000000001,59.995000000000005],[11.815,59.995000000000005],[11.81,59.980000000000004],[11.795,59.969999999999999],[11.795,59.954999999999998],[11.82,59.935000000000002],[11.805,59.920000000000002],[11.81,59.905000000000001],[11.805,59.895000000000003],[11.82,59.890000000000001],[11.825000000000001,59.870000000000005],[11.835000000000001,59.870000000000005],[11.835000000000001,59.840000000000003],[11.845000000000001,59.840000000000003],[11.85,59.829999999999998],[11.890000000000001,59.825000000000003],[11.925000000000001,59.789999999999999],[11.904999999999999,59.780000000000001],[11.790000000000001,59.785000000000004],[11.779999999999999,59.774999999999999],[11.765000000000001,59.774999999999999],[11.77,59.765000000000001],[11.76,59.759999999999998],[11.725,59.759999999999998],[11.705,59.745000000000005],[11.685,59.745000000000005],[11.705,59.719999999999999],[11.675000000000001,59.704999999999998],[11.65,59.670000000000002],[11.625,59.675000000000004],[11.630000000000001,59.664999999999999],[11.605,59.660000000000004],[11.585000000000001,59.645000000000003],[11.540000000000001,59.645000000000003],[11.529999999999999,59.640000000000001],[11.545,59.620000000000005],[11.540000000000001,59.615000000000002],[11.529999999999999,59.620000000000005],[11.52,59.600000000000001],[11.5,59.594999999999999],[11.475,59.600000000000001],[11.48,59.605000000000004],[11.475,59.625],[11.5,59.625],[11.505000000000001,59.630000000000003],[11.5,59.640000000000001],[11.48,59.645000000000003],[11.48,59.655000000000001],[11.455,59.675000000000004],[11.435,59.670000000000002],[11.370000000000001,59.695],[11.365,59.715000000000003],[11.375,59.730000000000004],[11.359999999999999,59.734999999999999],[11.359999999999999,59.745000000000005],[11.345000000000001,59.745000000000005],[11.345000000000001,59.755000000000003],[11.325000000000001,59.759999999999998],[11.279999999999999,59.759999999999998],[11.25,59.770000000000003],[11.25,59.759999999999998],[11.234999999999999,59.755000000000003],[11.245000000000001,59.75],[11.245000000000001,59.740000000000002],[11.234999999999999,59.734999999999999],[11.23,59.719999999999999],[11.23,59.685000000000002],[11.17,59.68],[11.15,59.685000000000002],[11.140000000000001,59.700000000000003],[11.1,59.689999999999998],[11.105,59.704999999999998],[11.050000000000001,59.700000000000003],[11.045,59.689999999999998],[11.029999999999999,59.689999999999998],[11,59.704999999999998],[10.970000000000001,59.704999999999998],[10.970000000000001,59.695],[10.955,59.685000000000002],[10.955,59.670000000000002],[10.970000000000001,59.670000000000002],[10.970000000000001,59.660000000000004],[10.984999999999999,59.655000000000001],[10.960000000000001,59.645000000000003],[10.960000000000001,59.634999999999998],[10.955,59.649999999999999],[10.945,59.649999999999999],[10.935,59.645000000000003],[10.935,59.630000000000003],[10.91,59.630000000000003],[10.91,59.620000000000005],[10.880000000000001,59.620000000000005],[10.890000000000001,59.605000000000004],[10.870000000000001,59.605000000000004],[10.865,59.600000000000001],[10.870000000000001,59.594999999999999],[10.859999999999999,59.594999999999999],[10.855,59.585000000000001],[10.835000000000001,59.585000000000001],[10.855,59.579999999999998],[10.835000000000001,59.564999999999998],[10.800000000000001,59.564999999999998],[10.775,59.555],[10.785,59.545000000000002],[10.779999999999999,59.515000000000001],[10.77,59.509999999999998],[10.779999999999999,59.495000000000005],[10.75,59.495000000000005],[10.75,59.484999999999999],[10.725,59.469999999999999],[10.710000000000001,59.480000000000004],[10.710000000000001,59.490000000000002],[10.700000000000001,59.495000000000005],[10.68,59.490000000000002],[10.640000000000001,59.530000000000001],[10.615,59.535000000000004],[10.635,59.57],[10.630000000000001,59.615000000000002],[10.615,59.660000000000004],[10.555,59.685000000000002],[10.545,59.704999999999998],[10.540000000000001,59.725000000000001],[10.550000000000001,59.730000000000004],[10.540000000000001,59.745000000000005],[10.545,59.789999999999999],[10.49,59.789999999999999],[10.48,59.780000000000001],[10.460000000000001,59.774999999999999],[10.44,59.780000000000001],[10.425000000000001,59.770000000000003],[10.425000000000001,59.780000000000001],[10.41,59.785000000000004],[10.359999999999999,59.785000000000004],[10.345000000000001,59.789999999999999],[10.345000000000001,59.800000000000004],[10.355,59.800000000000004],[10.35,59.840000000000003],[10.335000000000001,59.844999999999999],[10.33,59.855000000000004]
] //end creating Akershus polygon
);

// set the color for the Akershus polygon
polygonAkershus.setStyle(
	{
	//fillColor: "#7D7D88",
	fillColor: "purple",
	color: "black", //border
	fillOpacity: 0.5
	}
	
); //end setStyle() for Akershus polygon

polygonAkershus.addTo(akershusLayer);

///////////////////////////////////////////////////////////////////////////////////////////////
//make the Buskerud polygon outline
///////////////////////////////////////////////////////////////////////////////////////////////
var polygonBuskerud = L.polygon(
[ //begin creating Buskerud polygon
[7.47,60.675000000000004],[7.615,60.745000000000005],[7.685,60.730000000000004],[7.705,60.740000000000002],[7.725000000000001,60.759999999999998],[7.72,60.789999999999999],[7.705,60.795000000000002],[7.805000000000001,60.895000000000003],[7.850000000000001,60.920000000000002],[7.88,60.925000000000004],[7.935,60.895000000000003],[8.040000000000001,60.895000000000003],[8.15,60.980000000000004],[8.17,60.980000000000004],[8.18,60.969999999999999],[8.225,60.969999999999999],[8.234999999999999,60.995000000000005],[8.225,60.995000000000005],[8.220000000000001,61.005000000000003],[8.26,61.009999999999998],[8.285,61.035000000000004],[8.215,61.055],[8.25,61.075000000000003],[8.31,61.090000000000003],[8.355,61.055],[8.435,61.030000000000001],[8.44,61.020000000000003],[8.51,61.020000000000003],[8.605,60.984999999999999],[8.635,60.960000000000001],[8.620000000000001,60.950000000000003],[8.645,60.945],[8.654999999999999,60.935000000000002],[8.81,60.899999999999999],[8.895,60.895000000000003],[8.895,60.884999999999998],[8.91,60.880000000000003],[8.92,60.865000000000002],[9.040000000000001,60.835000000000001],[9.07,60.82],[9.120000000000001,60.814999999999998],[9.185,60.795000000000002],[9.215,60.770000000000003],[9.295,60.759999999999998],[9.33,60.730000000000004],[9.32,60.68],[9.355,60.664999999999999],[9.365,60.649999999999999],[9.359999999999999,60.634999999999998],[9.370000000000001,60.625],[9.390000000000001,60.615000000000002],[9.42,60.615000000000002],[9.435,60.600000000000001],[9.42,60.585000000000001],[9.41,60.585000000000001],[9.415000000000001,60.550000000000004],[9.450000000000001,60.545000000000002],[9.475,60.530000000000001],[9.609999999999999,60.539999999999999],[9.620000000000001,60.515000000000001],[9.620000000000001,60.505000000000003],[9.609999999999999,60.5],[9.790000000000001,60.454999999999998],[9.83,60.454999999999998],[9.825000000000001,60.495000000000005],[9.81,60.509999999999998],[9.81,60.560000000000002],[9.835000000000001,60.585000000000001],[9.845000000000001,60.585000000000001],[9.85,60.57],[9.859999999999999,60.57],[9.880000000000001,60.585000000000001],[9.950000000000001,60.605000000000004],[9.950000000000001,60.615000000000002],[9.925000000000001,60.615000000000002],[9.904999999999999,60.634999999999998],[9.960000000000001,60.640000000000001],[10.029999999999999,60.634999999999998],[10.07,60.605000000000004],[10.085000000000001,60.57],[10.105,60.560000000000002],[10.115,60.539999999999999],[10.154999999999999,60.524999999999999],[10.16,60.5],[10.175000000000001,60.484999999999999],[10.175000000000001,60.454999999999998],[10.200000000000001,60.375],[10.225,60.355000000000004],[10.225,60.344999999999999],[10.245000000000001,60.335000000000001],[10.245000000000001,60.325000000000003],[10.279999999999999,60.289999999999999],[10.290000000000001,60.289999999999999],[10.300000000000001,60.274999999999999],[10.32,60.265000000000001],[10.31,60.255000000000003],[10.315,60.240000000000002],[10.325000000000001,60.240000000000002],[10.335000000000001,60.225000000000001],[10.355,60.215000000000003],[10.375,60.225000000000001],[10.42,60.210000000000001],[10.450000000000001,60.189999999999998],[10.48,60.185000000000002],[10.484999999999999,60.175000000000004],[10.56,60.164999999999999],[10.575000000000001,60.149999999999999],[10.595000000000001,60.145000000000003],[10.6,60.130000000000003],[10.575000000000001,60.120000000000005],[10.575000000000001,60.109999999999999],[10.59,60.100000000000001],[10.595000000000001,60.075000000000003],[10.575000000000001,60.075000000000003],[10.495000000000001,60.020000000000003],[10.484999999999999,60.020000000000003],[10.48,60.030000000000001],[10.435,60.030000000000001],[10.43,60.009999999999998],[10.415000000000001,60.009999999999998],[10.415000000000001,59.980000000000004],[10.380000000000001,59.980000000000004],[10.35,59.960000000000001],[10.35,59.945],[10.375,59.93],[10.375,59.910000000000004],[10.359999999999999,59.905000000000001],[10.365,59.895000000000003],[10.35,59.875],[10.33,59.875],[10.335000000000001,59.859999999999999],[10.33,59.850000000000001],[10.35,59.840000000000003],[10.355,59.800000000000004],[10.345000000000001,59.800000000000004],[10.345000000000001,59.789999999999999],[10.359999999999999,59.785000000000004],[10.41,59.785000000000004],[10.425000000000001,59.780000000000001],[10.425000000000001,59.770000000000003],[10.44,59.780000000000001],[10.455,59.774999999999999],[10.48,59.780000000000001],[10.49,59.789999999999999],[10.545,59.789999999999999],[10.540000000000001,59.745000000000005],[10.550000000000001,59.730000000000004],[10.540000000000001,59.725000000000001],[10.545,59.704999999999998],[10.555,59.685000000000002],[10.615,59.660000000000004],[10.635,59.594999999999999],[10.635,59.57],[10.620000000000001,59.539999999999999],[10.545,59.454999999999998],[10.455,59.480000000000004],[10.395,59.515000000000001],[10.42,59.564999999999998],[10.41,59.585000000000001],[10.425000000000001,59.600000000000001],[10.41,59.609999999999999],[10.41,59.620000000000005],[10.425000000000001,59.625],[10.41,59.645000000000003],[10.41,59.664999999999999],[10.365,59.700000000000003],[10.325000000000001,59.700000000000003],[10.32,59.685000000000002],[10.31,59.685000000000002],[10.31,59.670000000000002],[10.265000000000001,59.675000000000004],[10.245000000000001,59.675000000000004],[10.24,59.664999999999999],[10.115,59.670000000000002],[10.09,59.645000000000003],[10.045,59.640000000000001],[10.035,59.640000000000001],[10.02,59.660000000000004],[10,59.664999999999999],[10,59.655000000000001],[9.975,59.634999999999998],[9.98,59.620000000000005],[9.94,59.609999999999999],[9.94,59.585000000000001],[9.92,59.579999999999998],[9.945,59.57],[9.984999999999999,59.530000000000001],[10.025,59.515000000000001],[10.055,59.484999999999999],[10.06,59.475000000000001],[10.055,59.469999999999999],[10.02,59.460000000000001],[10,59.460000000000001],[9.99,59.469999999999999],[9.945,59.469999999999999],[9.93,59.454999999999998],[9.85,59.460000000000001],[9.815,59.469999999999999],[9.775,59.454999999999998],[9.76,59.460000000000001],[9.779999999999999,59.410000000000004],[9.66,59.410000000000004],[9.625,59.425000000000004],[9.620000000000001,59.439999999999998],[9.585000000000001,59.450000000000003],[9.58,59.454999999999998],[9.585000000000001,59.469999999999999],[9.575000000000001,59.469999999999999],[9.56,59.484999999999999],[9.470000000000001,59.480000000000004],[9.470000000000001,59.495000000000005],[9.515000000000001,59.539999999999999],[9.470000000000001,59.555],[9.465,59.575000000000003],[9.435,59.609999999999999],[9.425000000000001,59.640000000000001],[9.404999999999999,59.660000000000004],[9.404999999999999,59.685000000000002],[9.335000000000001,59.695],[9.355,59.715000000000003],[9.34,59.719999999999999],[9.34,59.730000000000004],[9.345000000000001,59.759999999999998],[9.365,59.780000000000001],[9.359999999999999,59.785000000000004],[9.295,59.805],[9.265000000000001,59.805],[9.255000000000001,59.814999999999998],[9.234999999999999,59.810000000000002],[9.185,59.825000000000003],[9.19,59.840000000000003],[9.18,59.875],[9.19,59.895000000000003],[9.175000000000001,59.899999999999999],[9.19,59.920000000000002],[9.18,59.93],[9.135,59.939999999999998],[9.109999999999999,59.950000000000003],[9.105,59.960000000000001],[9.06,59.960000000000001],[9.045,59.975000000000001],[9.029999999999999,59.975000000000001],[9.025,59.984999999999999],[8.99,59.980000000000004],[9,60.005000000000003],[8.99,60.009999999999998],[8.98,60.07],[8.955,60.090000000000003],[8.960000000000001,60.100000000000001],[8.94,60.100000000000001],[8.859999999999999,60.140000000000001],[8.800000000000001,60.155000000000001],[8.76,60.175000000000004],[8.725,60.185000000000002],[8.66,60.170000000000002],[8.65,60.175000000000004],[8.455,60.170000000000002],[8.404999999999999,60.18],[8.285,60.175000000000004],[8.210000000000001,60.189999999999998],[8.165000000000001,60.185000000000002],[8.185,60.175000000000004],[8.165000000000001,60.175000000000004],[8.16,60.185000000000002],[8.1,60.185000000000002],[8.08,60.170000000000002],[7.815,60.105000000000004],[7.645,60.125],[7.49,60.100000000000001],[7.585,60.175000000000004],[7.61,60.245000000000005],[7.675,60.295000000000002],[7.69,60.414999999999999],[7.73,60.520000000000003],[7.675,60.535000000000004],[7.63,60.57],[7.62,60.594999999999999],[7.635,60.634999999999998],[7.545,60.655000000000001],[7.44,60.660000000000004],[7.47,60.675000000000004]	
] //end creating Buskerud polygon
);

// set the color for the Buskerud polygon
polygonBuskerud.setStyle(
	{
	//fillColor: "#7D7D88",
	fillColor: "purple",
	color: "black", //border
	fillOpacity: 0.5
	}
	
); //end setStyle() for Buskerud polygon

polygonBuskerud.addTo(buskerudLayer);





var overlayFylker = {
"<span style='color:red; font-size:15px; font-weight:bold;'> Akershus </span>": akershusLayer,
"<span style='color:red; font-size:15px; font-weight:bold;'> Buskerud </span>": buskerudLayer,
"<span style='color:red; font-size:15px; font-weight:bold;'> Østfold </span>": ostfoldLayer,
}

L.control.layers(null, overlayFylker, {collapsed: false}).addTo(mymap);
