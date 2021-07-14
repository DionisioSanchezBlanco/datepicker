jQuery.noConflict();
var today = new Date();

jQuery(document).ready(function($){
  $("#fecha").datepicker({
    minDate: today,
    dateFormat: "DD dd-mm-yy",
    beforeShowDay: function(date) {
      var day = date.getDay();
      return [(day != 3)];
    }
  });

    $("#fecha_f").datepicker({
    minDate: today,
    dateFormat: "DD dd-mm-yy",
    beforeShowDay: function(date) {
      var day = date.getDay();
      return [(day != 3)];
    }
  });

    $("#fecha_b").datepicker({
    minDate: today,
    dateFormat: "DD dd-mm-yy",
  });
});

