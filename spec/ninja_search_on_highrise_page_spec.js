require("spec_helper.js");
require("../public/ninja_search.js");

Screw.Unit(function(){
  describe("inline activation button", function(){
    it("should display NinjaSearch image button", function(){
      var button = jQuery('.ninja_search_activation');
      expect(button.size()).to(be_gte, 1);
    });
  });
  describe("activation", function(){
    before(function(){
      jQuery('.ninja_search_activation:nth(0)').click();
    });
    after(function(){
      jQuery('.ninja_search_activation:nth(0)').click();
    });
    it("should render a flexselect input", function(){
      expect(jQuery('input#person_user_time_zone_id_flexselect').size()).to(equal, 1);
    });
    it("should resize the flexselect input to size of original select", function(){
      expect(jQuery('input#person_user_time_zone_id_flexselect').width()).to(be_gte, 239);
    });
    it("should retain the original select element", function(){
      expect(jQuery('select#person_user_time_zone_id').size()).to(equal, 1);
    });
    it("should hide the original select element", function(){
      expect(jQuery('select#person_user_time_zone_id:visible').size()).to(equal, 0);
    });
  });
  describe("deactivation by clicking", function(){
    before(function(){
      var button = jQuery('.ninja_search_activation:nth(0)');
      button.click();
      button.click();
    });
    it("should restore original select and selection if icon clicked again", function(){
      expect(jQuery('select#person_user_time_zone_id:visible').size()).to(equal, 1);
    });
    it("should remove flexselect if icon clicked again", function(){
      expect(jQuery('input#person_user_time_zone_id_flexselect').size()).to(equal, 0);
    });
    it("should remove flexselect dropdown if icon clicked again", function(){
      expect(jQuery('#person_user_time_zone_id_flexselect_dropdown').size()).to(equal, 0);
    });
  });
  describe("deactivation by escaping", function(){
    before(function(){
      var button = jQuery('.ninja_search_activation:nth(0)');
      button.click();
      jQuery('input#person_user_time_zone_id_flexselect').keydown(); //trigger('keydown', [{keyCode: 27}]);
    });
    it("should restore original select and selection if icon clicked again", function(){
      expect(jQuery('select#person_user_time_zone_id:visible').size()).to(equal, 1);
    });
    it("should remove flexselect if icon clicked again", function(){
      expect(jQuery('input#person_user_time_zone_id_flexselect').size()).to(equal, 0);
    });
    it("should remove flexselect dropdown if icon clicked again", function(){
      expect(jQuery('#person_user_time_zone_id_flexselect_dropdown').size()).to(equal, 0);
    });
  });
  describe("selection", function(){
    before(function(){
      jQuery('.ninja_search_activation:nth(0)').click();
      jQuery('#person_user_time_zone_id_flexselect_dropdown li:nth(1)').mouseover().mouseup();
    });
    it("should restore original select after selection from drop down", function(){
      expect(jQuery('select#person_user_time_zone_id:visible').size()).to(equal, 1);
    });
    it("should remove flexselect after selection from drop down", function(){
      expect(jQuery('input#person_user_time_zone_id_flexselect').size()).to(equal, 0);
    });
    it("should remove flexselect dropdown after selection from drop down", function(){
      expect(jQuery('#person_user_time_zone_id_flexselect_dropdown').size()).to(equal, 0);
    });
    it("should change select's selection after selection from drop down", function(){
      expect(jQuery('select#person_user_time_zone_id option:selected').val()).to(equal, 'Alaska');
    });
  });
  describe("selection after scoping", function(){
    before(function(){
      jQuery('.ninja_search_activation:nth(0)').click();
      jQuery('#person_user_time_zone_id_flexselect').val('bris').focus();
      jQuery('#person_user_time_zone_id_flexselect_dropdown li:nth(0)').mouseover().mouseup();
    });
    it("should restore original select after selection from drop down", function(){
      expect(jQuery('select#person_user_time_zone_id:visible').size()).to(equal, 1);
    });
    it("should remove flexselect after selection from drop down", function(){
      expect(jQuery('input#person_user_time_zone_id_flexselect').size()).to(equal, 0);
    });
    it("should remove flexselect dropdown after selection from drop down", function(){
      expect(jQuery('#person_user_time_zone_id_flexselect_dropdown').size()).to(equal, 0);
    });
    it("should change select's selection after selection from drop down", function(){
      expect(jQuery('select#person_user_time_zone_id option:selected').val()).to(equal, 'Brisbane');
    });
  });

  describe("select with no id attribute", function(){
    before(function(){
      jQuery('.ninja_search_activation:nth(1)').click();
      jQuery('select#no-id li:nth(0)').mouseover().mouseup();
    });
    it("should assign the <select> an id based on name attribute", function(){
      expect(jQuery('select#no-id').size()).to(equal, 1);
    });
    it("should make selections normally", function(){
      expect(jQuery('select#no-id option:selected').val()).to(equal, '1');
    });
  });
});

