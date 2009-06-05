(function($){ 
  $(function() {
    $('select').each(function(index) {
      // if <select> has no id attribute, then give it one based on name attribute
      if ($(this).attr('id') == null || $(this).attr('id').length == 0) {
        var baseid = $(this).attr('name').replace(/\[/,'-').replace(/\]/,'');
        var id = baseid;
        var uniqueCounter = 0;
        while ($('#' + id).size() > 0) {
          uniqueCounter += 1;
          id = baseid + "-" + uniqueCounter;
        }
        $(this).attr('id', id);
      }
      
      // create the Ninja Search button, with rel attribute referencing corresponding <select id="...">
      $('<a class="ninja_search_activation" rel="' + $(this).attr('id') + '">ninja search</a>')
      .insertAfter($(this))
      
      // register onclick handler
      .click(function(event) {
        var selectId = $(this).attr('rel');
        var selectField = $('#' + selectId);
        var flexField = $('input#' + selectId + '_flexselect');
        if (flexField.size() == 0) {
          var width = selectField.width();
          selectField.flexselect();
          var flexField = $('input#' + selectId + '_flexselect');
          flexField.width(width)
          .click().val('').focus();
        } else {
          flexField.remove();
          $('#' + selectId + '_flexselect_dropdown').remove();
          selectField.show();
        }
        return false;
      });
    });
  });
})(jQuery); 


