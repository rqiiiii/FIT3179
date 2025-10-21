var spec5 = "js/world_accident_death_rate.json";
vegaEmbed('#worldmap', spec5, { actions: false })
  .then(function(result) {
    // You can access result.view here if needed
  })
  .catch(console.error);



var spec1 = "js/accident_causes_roaduser.json";
vegaEmbed('#line', spec1, {
  actions: false,   // hide "Open in Vega Editor" buttons
  renderer: "svg"
}).catch(console.error);

var spec2 = "js/Malaysia_accident_rate.json";
vegaEmbed('#choroplethmap', spec2, { actions: false })
.then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec3 = "js/accident_severity.json";
vegaEmbed('#bump', spec3, { actions: false })
.then(function(result) {
}).catch(console.error);

var spec4 = "js/victim_death_injuries.json";
vegaEmbed('#areastack', spec4, {
  actions: false,   // hide "Open in Vega Editor" buttons
}).catch(console.error);

