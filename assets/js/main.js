(function() {

    var hayStack;
    var needle;
   
    var img = "<img src=\"./assets/images/haystack.png\" class=\"img-fluid\" />"
    var hayBtn = $("<button>");
    function randomNumber () {
       
    };
    var randomNumber = Math.floor(Math.random() * (25 - 5))+5;
    hayBtn.attr("data-img", [i]);
    
    for (var i = 0; i < randomNumber; i++) {
        $('.haystacks').append(img);
        
        console.log(hayBtn);
        $(".haystacks").slideDown("slow");
    };
  
})();