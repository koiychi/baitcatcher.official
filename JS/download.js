//JQUERY
$(document).ready(function() {
    $("#button-download").click(function(){
        $("#heading").text("Wait for your download to finish...");
        $("#subheading").text("If your download didn't start, download again.");
        $("#button-download").text("Download Again").css({width: '290px', height: '90px'
        });
    });
});
