jQuery.noConflict();

jQuery(document).ready(function($){
      // Get tomorrow 
      var tomorrow = new Date();
      tomorrow.setDate(new Date().getDate() + 1);

    $('#checkin').datepicker({
        //normal setup parameters here
        onSelect: function (dateValue, inst) {
            $('#checkout').datepicker();
            var date2 = $('#checkin').datepicker('getDate', '+1d');
            $('#checkout').datepicker('destroy');
            date2.setDate(date2.getDate() + 1);
            
            $('#checkout').datepicker({
                minDate: date2,
                dateFormat: "dd-mm-yy"
            });
        },
        dateFormat: "dd-mm-yy",
        minDate: tomorrow
    });
    
    $('.ui-datepicker').addClass('notranslate');
});

