jQuery.noConflict();
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
jQuery(document).ready(function($){
  $("#fecha").datepicker({
    minDate: tomorrow,
    dateFormat: "DD dd-mm-yy",
    beforeShowDay: function(date) {
      var day = date.getDay();
      return [(day != 3)];
    }
  });
  

    $("#fecha_f").datepicker({
    minDate: tomorrow,
    dateFormat: "DD dd-mm-yy",
    beforeShowDay: function(date) {
      var day = date.getDay();
      return [(day != 3)];
    }
  });
   

    $("#fecha_b").datepicker({
    minDate: tomorrow,
    dateFormat: "DD dd-mm-yy"
  });
    $('.ui-datepicker').addClass('notranslate');
});

