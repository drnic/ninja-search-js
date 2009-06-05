$(function() {
  $('select').each(function(index) {
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
