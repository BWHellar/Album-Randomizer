$(document).ready(function(){
    $(".input").keyup(function(){
          var val1 = +$(".value1").val();
          var val2 = +$(".value2").val();
          $("#result").val(val1+val2);
    });
});
