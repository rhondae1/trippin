define(function(require){
  // Dependencies
  var $ = require("jquery");

  // Module level variables
  var visited = false;

  // Event handlers for determining which list 
  // the item goes on
  $("#visited").click(function() {
    visited = true;
  });

  $("#wish-list").click(function() {
    visited = false;
  });

  // POST the data to Firebase when Add Location
  // button clicked
  $("#add-location").click(function() {
    var newLocation = {
      location: $("#location-name").val(),
      location_type: $("#location-type").val() || "city",
      visited: visited
    };

    console.log("newLocation", newLocation);

    $.ajax({
      url: "https://nns-steve-trippin.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    })
    .done(function(newData) {
      console.log("newData", newData);
    })
    .fail(function(xhr, status, error) {
      console.log("error", error);
    });


  });
});
