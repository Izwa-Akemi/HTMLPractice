$(function () {

    /*$("#text").animate({
        //フォント大きさを128pxに変える
        'fontSize':'128px'
    },2000);*/
    /*$("#text").animate({ 'left': '100%' })
        .animate({ 'left': '40%' })
        .animate({ 'fontSize': '68px' })
        .animate({ 'left': '0' })*/

    /*$("#out").fadeOut(3000);
    $("#in").fadeIn(3000);*/
    /*setInterval(()=>{
       $("#toggle").fadeToggle();
    },1000);*/
    $("#btn").on("click",()=>{
     //$("#menu").hide();
     $("#menu").toggle();
    });
});