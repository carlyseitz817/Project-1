function clickStuff() {
    $("#login-link-button").click(function () {
        // event.preventDefault(),
        $(".login-form-side").show();
    });
    $(".widget-close").click(function () {
        // event.preventDefault(),
        $(".login-form-side").hide();
    });
}

clickStuff();

// var address = '';
//     var geocode1 = [];
//     var geocode2 = [];
  
//     var totalLength;
//     //---------------------------------------------------//
//     //------------------Initialize Map-------------------//
//     //---------------------------------------------------//
//     // Initialize the platform object:
//     var platform = new H.service.Platform({
//         'app_id': 'qXr6JxTSNIjGC5Oz6R2u',
//         'app_code': 'dYXcTWDO6R-CHChaYaULZA'
//     });
//     //needed for the geocoding
//     var targetElement = document.getElementById('mapContainer');
//     // Obtain the default map types from the platform object
//     var defaultLayers = platform.createDefaultLayers();
//     // Instantiate (and display) a map object:
//     var map = new H.Map(
//         document.getElementById('mapContainer'),
//     defaultLayers.normal.map,
//     {
//         zoom: 10,
//       center: { lat: 30.27, lng: -97.74 }
//     });
//     // Create the default UI:
//     var ui = H.ui.UI.createDefault(map, defaultLayers);
//     //------------------------------------------------------------------//
//     //------------------Gecoding - Grabbing an Address------------------//
//     //------------------------------------------------------------------//
//     //------------------Address1 --> 1st Geocode Set--------------------//
//     $("#findme1").on('click', function (){
//         address = $("#address1").val().trim();
//     console.log(address);
//     // Create the parameters for the geocoding request:
//     var geocodingParams = {
//       searchText: address
//     };
    
//     // Define a callback function to process the geocoding response:
//     var onResult = function(result) {
//         var locations = result.Response.View[0].Result,
//       position,
//       marker;
//     // Add a marker for each location found
//     for (i = 0;  i < locations.length; i++) {
//         position = {
//             lat: locations[i].Location.DisplayPosition.Latitude,
//             lng: locations[i].Location.DisplayPosition.Longitude
//         };
//             console.log(position.lat, position.lng);
//             geocode1.push(position.lat, position.lng);
//     marker = new H.map.Marker(position);
//     map.addObject(marker);
//     }
//     };
//     // Get an instance of the geocoding service:
//     var geocoder = platform.getGeocodingService();
//     // Call the geocode method with the geocoding parameters,
//     // the callback and an error callback function (called if a
//     // communication error occurs):
//     geocoder.geocode(geocodingParams, onResult, function(e) {
//       alert(e);
//     });
//     });
//     //----------------------Address2 --> 2nd Geocode Set----------------------//
//     $("#findme2").on('click', function(){
//         address = $("#address2").val().trim();
//         console.log(address);
//     // Create the parameters for the geocoding request:
//     var geocodingParams = {
//       searchText: address
//     };
    
//     // Define a callback function to process the geocoding response:
//     var onResult = function(result) {
//         var locations = result.Response.View[0].Result,
//       position,
//       marker;
//     // Add a marker for each location found
//     for (i = 0;  i < locations.length; i++) {
//         position = {
//             lat: locations[i].Location.DisplayPosition.Latitude,
//             lng: locations[i].Location.DisplayPosition.Longitude
//         };
//             console.log(position.lat, position.lng);
//             geocode2.push(position.lat, position.lng);
//     marker = new H.map.Marker(position);
//     map.addObject(marker);
//     }
//     };
//     // Get an instance of the geocoding service:
//     var geocoder = platform.getGeocodingService();
//     // Call the geocode method with the geocoding parameters,
//     // the callback and an error callback function (called if a
//     // communication error occurs):
//     geocoder.geocode(geocodingParams, onResult, function(e) {
//       alert(e);
//     });
//     });
    
//     //----------------------Routing Functionality----------------------//
// $("#route").on('click', function(){
//     geocode1 = geocode1.map(String);
//     var waypoint0 = 'geo!' + geocode1[0] + ',' + geocode1[1];
//     geocode2 = geocode2.map(String);
//     var waypoint1 = 'geo!' + geocode2[0] + ',' + geocode2[1];
    
//     // Create the parameters for the routing request:
//     var routingParameters = {
//         // The routing mode:
//     'mode': 'fastest;car',
//     // The start point of the route:
//     'waypoint0': waypoint0,
//     // The end point of the route:
//     'waypoint1': waypoint1,
//     // To retrieve the shape of the route we choose the route
//     // representation mode 'display'
//     'representation': 'display'
    
//     };
//     // Define a callback function to process the routing response:
//     var onResult = function(result) {
//         var route,
//         routeShape,
//         startPoint,
//         endPoint,
//         linestring;
//     if(result.response.route) {
//         // Pick the first route from the response:
//     route = result.response.route[0];
//     // Pick the route's shape:
//     routeShape = route.shape;
//         //code for the finding the mid point.
//         //console.log testing for finding the data from the response
//         console.log(result.response.route[0].shape.length);
//         totalLength = result.response.route[0].shape.length;
//         var midpoint = totalLength/2;
//         midpoint = Math.round(midpoint);
//         console.log(midpoint);
//         console.log(result.response.route[0].shape[midpoint]);
//         //The halfwatcoordinatesarray has the followign format = [lat,lng], so you can acesses just by calling the array
//         var halfwaycoordinates = result.response.route[0].shape[midpoint];
//         halfwayfcoordinatesarray = halfwaycoordinates.split(",");
//         console.log(halfwayfcoordinatesarray);
//         // Define a variable holding SVG mark-up that defines an icon image:
//         var svgMarkup = '<svg width="24" height="24" ' +
//                         'xmlns="http://www.w3.org/2000/svg">' +
//                         '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
//                         'height="22" /><text x="12" y="18" font-size="12pt" ' +
//                         'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
//                         'fill="white">H</text></svg>';
//         // Create an icon, an object holding the latitude and longitude, and a marker:
//         var icon = new H.map.Icon(svgMarkup),
//             coords = {lat: halfwayfcoordinatesarray[0], lng: halfwayfcoordinatesarray[1]},
//             marker = new H.map.Marker(coords, {icon: icon});
//     // Add the marker to the map and center the map at the location of the marker:
//         map.addObject(marker);
//         map.setCenter(coords);
//     // Create a linestring to use as a point source for the route line
//     linestring = new H.geo.LineString();
//     // Push all the points in the shape into the linestring:
//     routeShape.forEach(function(point) {
//         var parts = point.split(',');
//         linestring.pushLatLngAlt(parts[0], parts[1]);
//     });
//     // Retrieve the mapped positions of the requested waypoints:
//     startPoint = route.waypoint[0].mappedPosition;
//     endPoint = route.waypoint[1].mappedPosition;
//     // Create a polyline to display the route:
//     var routeLine = new H.map.Polyline(linestring, {
//         style: { strokeColor: 'blue', lineWidth: 10 }
//     });
//     // Create a marker for the start point:
//     var startMarker = new H.map.Marker({
//         lat: startPoint.latitude,
//         lng: startPoint.longitude
//     });
//     // Create a marker for the end point:
//     var endMarker = new H.map.Marker({
//         lat: endPoint.latitude,
//         lng: endPoint.longitude
//     });
//     // Add the route polyline and the two markers to the map:
//     map.addObjects([routeLine, startMarker, endMarker]);
//     // Set the map's viewport to make the whole route visible:
//     map.setViewBounds(routeLine.getBounds());
//     }
//     searchPlaces(result.response.route[0].shape[midpoint]);
// };
// // Get an instance of the routing service:
// var router = platform.getRoutingService();
// // Call calculateRoute() with the routing parameters,
// // the callback and an error callback function (called if a
// // communication error occurs):
// router.calculateRoute(routingParameters, onResult,
//   function(error) {
//       alert(error.message);
//   });
// });
// // -------------------- Places Module ---------------------- //
// var searchPlaces = function(latLng) {
//     // Obtain an Explore object through which to submit search requests:
//     var explore = new H.places.Explore(platform.getPlacesService());
//     var exploreResult;
//     var error;
//     // Define search parameters:
//     var params = {
//         // Look for places matching the category "eat and drink":
//         'cat': 'eat-drink',
//         // Search in the Chinatown district in San Francisco:
//         'in': latLng + ';r=500'
//     };
//     // Define a callback function to handle data on success:
//     function onResult(data) {
//         handleResults(data);
//     }
//     // Define a callback function to handle errors:
//     function onError(data) {
//         error = data;
//     }
    
//     // Run a search request with parameters, headers (empty), and callback functions:
//     explore.request(params, {}, onResult, onError);
    
// };
// var handleResults = function(apiData) {
//     apiData.results.items.forEach(function(places) {
//         console.log(places.title);
//     })
// }

// // function loginSidebar () {
// //     var b = a("body");
// //     a(".login-side-opener").on("click", function(a) {
// //         a.preventDefault(),
// //         e() ? c() : setTimeout(function() {
// //             d()
// //         }, 10)
// //     }),
// //     b.on("click touchstart", ".basel-close-side", function() {
// //         e() && c()
// //     }),
// //     b.on("click", ".widget-close", function(a) {
// //         a.preventDefault(),
// //         e() && c()
// //     });
// //     var c = function() {
// //         b.removeClass("basel-login-side-opened")
// //     }
// //       , d = function() {
// //         b.addClass("basel-login-side-opened")
// //     }
// //       , e = function() {
// //         return b.hasClass("basel-login-side-opened")
// //     }
// // },