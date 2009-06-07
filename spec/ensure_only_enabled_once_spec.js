require("spec_helper.js");
require("../public/ninja_search.js");

Screw.Unit(function() {
  describe("inline activation button", function(){
    it("should display just one NinjaSearch image button", function(){
      var button = $('a.ninja_search_activation');
      expect(button.size()).to(equal, 1);
    });
  });
});
