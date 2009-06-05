(function($){ 
  $(function() {
    $('select').each(function(index) {
      if ($(this).attr('id') == null || $(this).attr('id').length == 0) {
        var id = $(this).attr('name').replace(/\[/,'-').replace(/\]/,'');
        $(this).attr('id', id);
      }
      $('<a class="ninja_search_activation" rel="' + $(this).attr('id') + '">ninja search</a>')
      .insertAfter($(this))
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


