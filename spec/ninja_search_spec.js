require("spec_helper.js");
require("../public/ninja_search.js");

Screw.Unit(function(){
  describe("inline activation button", function(){
    it("should display NinjaSearch image button", function(){
      var button = $('a.ninja_search_activation');
      expect(button.size()).to(be_gte, 1);
    });
  });
  describe("activation", function(){
    before(function(){
      $('a.ninja_search_activation:nth(0)').click();
    });
    after(function(){
      $('a.ninja_search_activation:nth(0)').click();
    });
    it("should render a flexselect input", function(){
      expect($('input#person_user_time_zone_id_flexselect').size()).to(equal, 1);
    });
    it("should resize the flexselect input to size of original select", function(){
      expect($('input#person_user_time_zone_id_flexselect').width()).to(be_gte, 239);
    });
    it("should retain the original select element", function(){
      expect($('select#person_user_time_zone_id').size()).to(equal, 1);
    });
    it("should hide the original select element", function(){
      expect($('select#person_user_time_zone_id:visible').size()).to(equal, 0);
    });
  });
  describe("deactivation by clicking", function(){
    before(function(){
      var button = $('a.ninja_search_activation:nth(0)');
      button.click();
      button.click();
    });
    it("should restore original select and selection if icon clicked again", function(){
      expect($('select#person_user_time_zone_id:visible').size()).to(equal, 1);
    });
    it("should remove flexselect if icon clicked again", function(){
      expect($('input#person_user_time_zone_id_flexselect').size()).to(equal, 0);
    });
    it("should remove flexselect dropdown if icon clicked again", function(){
      expect($('#person_user_time_zone_id_flexselect_dropdown').size()).to(equal, 0);
    });
  });
  describe("deactivation by escaping", function(){
    before(function(){
      var button = $('a.ninja_search_activation:nth(0)');
      button.click();
      $('input#person_user_time_zone_id_flexselect').keydown(); //trigger('keydown', [{keyCode: 27}]);
    });
    it("should restore original select and selection if icon clicked again", function(){
      expect($('select#person_user_time_zone_id:visible').size()).to(equal, 1);
    });
    it("should remove flexselect if icon clicked again", function(){
      expect($('input#person_user_time_zone_id_flexselect').size()).to(equal, 0);
    });
    it("should remove flexselect dropdown if icon clicked again", function(){
      expect($('#person_user_time_zone_id_flexselect_dropdown').size()).to(equal, 0);
    });
  });
  describe("selection", function(){
    before(function(){
      $('a.ninja_search_activation:nth(0)').click();
      $('#person_user_time_zone_id_flexselect_dropdown li:nth(1)').mouseover().mouseup();
    });
    it("should restore original select after selection from drop down", function(){
      expect($('select#person_user_time_zone_id:visible').size()).to(equal, 1);
    });
    it("should remove flexselect after selection from drop down", function(){
      expect($('input#person_user_time_zone_id_flexselect').size()).to(equal, 0);
    });
    it("should remove flexselect dropdown after selection from drop down", function(){
      expect($('#person_user_time_zone_id_flexselect_dropdown').size()).to(equal, 0);
    });
    it("should change select's selection after selection from drop down", function(){
      expect($('select#person_user_time_zone_id option:selected').val()).to(equal, 'Alaska');
    });
  });
  describe("selection after scoping", function(){
    before(function(){
      $('a.ninja_search_activation:nth(0)').click();
      $('#person_user_time_zone_id_flexselect').val('bris').focus();
      $('#person_user_time_zone_id_flexselect_dropdown li:nth(0)').mouseover().mouseup();
    });
    it("should restore original select after selection from drop down", function(){
      expect($('select#person_user_time_zone_id:visible').size()).to(equal, 1);
    });
    it("should remove flexselect after selection from drop down", function(){
      expect($('input#person_user_time_zone_id_flexselect').size()).to(equal, 0);
    });
    it("should remove flexselect dropdown after selection from drop down", function(){
      expect($('#person_user_time_zone_id_flexselect_dropdown').size()).to(equal, 0);
    });
    it("should change select's selection after selection from drop down", function(){
      expect($('select#person_user_time_zone_id option:selected').val()).to(equal, 'Brisbane');
    });
  });
  
  describe("select with no id attribute", function(){
    before(function(){
      $('a.ninja_search_activation:nth(1)').click();
      $('select#no-id:nth(0) li:nth(0)').mouseover().mouseup();
    });
    it("should assign the <select> an id based on name attribute", function(){
      expect($('select#no-id:nth(0)').size()).to(equal, 1);
    });
    it("should make selections normally", function(){
      expect($('select#no-id:nth(0) option:selected').val()).to(equal, '1');
    });
  });

  describe("select with no id attribute that has same name as another select element", function(){
    before(function(){
      $('a.ninja_search_activation:nth(1)').click();
    });
    it("should have unique ids for each select", function(){
      expect([$('select[id=no-id]').size(), $('select[id=no-id-1]').size(), $('select[id=no-id-2]').size()]).to(equal, [1,1,1]);
    });
    it("should make selections normally with 1st duplicate", function(){
      $('select#no-id:nth(1) li:nth(0)').mouseover().mouseup();
      expect($('select#no-id-1 option:selected').val()).to(equal, '11');
    });
    it("should make selections normally with 2nd duplicate", function(){
      $('select#no-id:nth(2) li:nth(0)').mouseover().mouseup();
      expect($('select#no-id-2 option:selected').val()).to(equal, '21');
    });
  });
  describe("selects with duplicate ids are re-id'd with unique ids", function(){
    before(function(){
      $('a.ninja_search_activation:nth(5)').click(); // 2nd of the duplicates
      $('#person_contact_data_phone_numbers__location_flexselect_dropdown li:nth(1)').mouseover().mouseup();
    });
    it("should assign unique id to one of the duplicate selects", function(){
      expect($('[id=person_contact_data_phone_numbers__location-1]').size()).to(equal, 1);
    });
    it("should activate the 2nd select and not the first", function(){
      expect($('#person_contact_data_phone_numbers__location').val()).to(equal, 'Mobile');
    });
  });
});

