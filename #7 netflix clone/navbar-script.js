$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $(".netfix-navbar").css("background", "#0C0C0C");
        }
        else{
            $(".netfix-navbar").css("background", "transparent");
        }
    })
})