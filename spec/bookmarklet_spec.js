require("spec_helper.js");

Screw.Unit(function() {
  describe("inline activation button", function(){
    before(function(){
      // either these both run the JS
      // location.href = $('#bookmarklet').attr('href');
      var bookmarkletScript = $('#bookmarklet').attr('href').replace(/^javascript:/, '');
      eval(bookmarkletScript);
    });
    it("should display Ninja Search image button", function(){
      setTimeout(function() {
        expect($('a.ninja_search_activation').size()).to(equal, 1);
      }, 500);
    });
    it("should not display Ninja Search if <= 5 items", function(){
      expect($('a.ninja_search_activation[rel="small-list"]').size()).to(equal, 0);
    });
  });
});
