$(function() {
    
    var hide = function(pages, buttons) {
        pages.forEach(function(val, i) {
            val.css("display", "none");
        });
        buttons.forEach(function(val, i){
            val.removeClass("active");
        });
    };
    var show = function(val, array) {
        
        array[val].css("display", "block");
    };
    var init = function() {
        var pages = [Bio = $(".Bio"),
            Skills = $(".Skills"),
            Education = $(".Education"),
            Work = $(".Work"),
            Projects = $(".Projects")
        ];
        var buttons = [B1 = $(".b1"),
            B2 = $(".b2"),
            B3 = $(".b3"),
            B4 = $(".b4"),
            B5 = $(".b5")];
        bindEvents(pages, buttons);
    };

    var bindEvents = function(pages, buttons) {
      buttons.forEach(function(val, i){
          
          val.click(function(){
              console.log(val);
              hide(pages, buttons);
              val.addClass("active");
              show(val.val(), pages);
          });
      });
    };

    init();
});