define(function(require) {
   var firebase = require("firebase");
   var $ = require("jquery");
   var templates = require("get-templates");
   
   var myFirebaseRef = new Firebase("https://trippin-out.firebaseio.com/");

   myFirebaseRef.child("loc_types").on("value", function(snapshot) {
       var loc_types = snapshot.val();
       // console.log(loc_types);
       
   }); 
      

   myFirebaseRef.child("trips").on("value", function(snapshot) {

       var allTrips = snapshot.val();
       // console.log(allTrips);

       var populatedTemplate = templates.tripTemplate(allTrips);

       $('#list-of-trips').html(populatedTemplate);
   });

});
//Firebase App Dashboard