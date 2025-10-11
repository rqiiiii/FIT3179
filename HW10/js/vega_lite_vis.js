var spec2 = "js/malaysia_accidents_choropleth_map.json";
vegaEmbed('#choroplethmap', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var spec3 = "js/malaysia_deaths_injuries.json";
vegaEmbed('#areastack', spec3, {
  actions: false,   // hide "Open in Vega Editor" buttons
  renderer: 'canvas'
}).catch(console.error);