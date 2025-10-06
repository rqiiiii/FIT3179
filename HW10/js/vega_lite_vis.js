var spec2 = "js/malaysia_accidents_choropleth_map.json";
vegaEmbed('#choroplethmap', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "js/malaysia_deaths_injuries.json";
vegaEmbed('#areastack', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);