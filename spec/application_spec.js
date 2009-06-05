require("spec_helper.js");
require("../src/application.js");

Screw.Unit(function(){
  describe("inline activation button", function(){
    it("should display NinjaSearch image button", function(){
      var button = $('.ninja_search_activation');
      expect(button.size()).to(equal, 1);
    });
  });
  describe("activation", function(){
    before(function(){
      $('.ninja_search_activation').click();
    });
    after(function(){
      $('.ninja_search_activation').click();
    });
    it("should render a flexselect input", function(){
      expect($('input#toAccount_flexselect').size()).to(equal, 1);
    });
    it("should resize the flexselect input to size of original select", function(){
      expect($('input#toAccount_flexselect').width()).to(be_gte, 315);
    });
    it("should retain the original select element", function(){
      expect($('select#toAccount').size()).to(equal, 1);
    });
    it("should hide the original select element", function(){
      expect($('select#toAccount:visible').size()).to(equal, 0);
    });
  });
  describe("deactivation by clicking", function(){
    before(function(){
      var button = $('.ninja_search_activation');
      button.click();
      button.click();
    });
    it("should restore original select and selection if icon clicked again", function(){
      expect($('select#toAccount:visible').size()).to(equal, 1);
    });
    it("should remove flexselect if icon clicked again", function(){
      expect($('input#toAccount_flexselect').size()).to(equal, 0);
    });
    it("should remove flexselect dropdown if icon clicked again", function(){
      expect($('#toAccount_flexselect_dropdown').size()).to(equal, 0);
    });
  });
  describe("deactivation by escaping", function(){
    before(function(){
      var button = $('.ninja_search_activation');
      button.click();
      $('input#toAccount_flexselect').keydown(); //trigger('keydown', [{keyCode: 27}]);
    });
    it("should restore original select and selection if icon clicked again", function(){
      expect($('select#toAccount:visible').size()).to(equal, 1);
    });
    it("should remove flexselect if icon clicked again", function(){
      expect($('input#toAccount_flexselect').size()).to(equal, 0);
    });
    it("should remove flexselect dropdown if icon clicked again", function(){
      expect($('#toAccount_flexselect_dropdown').size()).to(equal, 0);
    });
  });
  describe("selection", function(){
    before(function(){
      $('.ninja_search_activation').click();
      $('#toAccount_flexselect_dropdown li:nth(2)').mouseover().mouseup();
    });
    it("should restore original select after selection from drop down", function(){
      expect($('select#toAccount:visible').size()).to(equal, 1);
    });
    it("should remove flexselect after selection from drop down", function(){
      expect($('input#toAccount_flexselect').size()).to(equal, 0);
    });
    it("should remove flexselect dropdown after selection from drop down", function(){
      expect($('#toAccount_flexselect_dropdown').size()).to(equal, 0);
    });
    it("should change select's selection after selection from drop down", function(){
      expect($('select#toAccount option:selected').val()).to(equal, 'LINKED_ACCOUNT_PO-0');
    });
  });
});

