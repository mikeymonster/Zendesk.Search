$(document).ready(function () {
    $("#new-follow").click(function () {

        //toggle menu on click
        if ($("#follow_menu").hasClass("tl-none")) {
            $("#follow_menu").removeClass("tl-none");
        } else {
            $("#follow_menu").addClass("tl-none");
        }

        //Show tick if user is subscribed
        //TODO: Add "if"
        $("#selection-tick").removeClass("tl-none");
        
        return false;
    });
});
