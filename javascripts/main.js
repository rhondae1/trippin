requirejs.config({
  baseUrl: './javascript',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: "Firebase"
  }
  }
});

requirejs(
  ["lodash", "jquery", "hbs", "bootstrap", "dom-access", "populate-songs", "get-more-songs", "filter"], 
  function(lodash, $, Handlebars, bootstrap, dom, pop, more, filter) {

 
