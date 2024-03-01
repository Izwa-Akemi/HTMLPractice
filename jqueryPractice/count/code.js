$(function () {
    
    $("textarea").keyup(function(){
        var counter = $(this).val().length;
        $("#countUp").html(counter);
        $('#submit').prop('disabled', true);
        if(counter == 0){
            $("#countUp").html("0");
        } 
        if(counter >= 10){
            $("#countUp").css("color","red");
            $('#submit').prop('disabled', true);
        } else {
            $("#countUp").css("color","#666");
            $('#submit').prop('disabled', false);
        }
    });
  });