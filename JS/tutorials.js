//JQUERY
$(document).ready(function() {
    //CODE HERE WITH JQUERY
    $(".tutorial-logo").addClass("fade-in");
    
    $("p").hover(
        function() {
            $(this).css("border-color", "#ea680a");
        },
        function(){

            $(this).css("border-color" , "#07090a"); 
       
        }
    );
    
    function moveButton(){
        $("#button-catching").animate(
            { left: '+=50px' }, 500,
            function(){
                $(this).animate(
                    { left: '-=50px' }, 500,
                    function(){
                        moveButton();
                    }
                );
            }
        );
    }
moveButton();
});

