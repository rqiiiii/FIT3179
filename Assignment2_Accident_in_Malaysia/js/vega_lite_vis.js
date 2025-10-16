var spec1 = "js/accident_injuries_roaduser.json";
vegaEmbed('#halfdonut', spec1, {
  actions: false,   // hide "Open in Vega Editor" buttons
  renderer: 'canvas'
}).catch(console.error);

var spec2 = "js/total_accidents.json";
vegaEmbed('#choroplethmap', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec3 = "js/accident_severity.json";
vegaEmbed('#stackbar', spec3, {
  actions: false,   // hide "Open in Vega Editor" buttons
  renderer: 'canvas'
}).catch(console.error);

var spec4 = "js/accident_condition.json";
vegaEmbed('#areastack', spec4, {
  actions: false,   // hide "Open in Vega Editor" buttons
  renderer: 'canvas'
}).catch(console.error);