$(document).ready(function () {
    console.log("this")
    $(".hidden-search").hide();

    $(".fa-search").click(function (){
        $(".hidden-search").toggle();
    });
});
