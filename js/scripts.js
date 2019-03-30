var imagesArray = ["img/cookie.jpg", "img/bacon.jpg", "img/butter.jpg", "img/toast.jpg", "img/cheese.jpg"];

function displayImage(){
    var num = Math.floor(Math.random() * 5);
    document.canvas.src = imagesArray[num];
}






$(document).ready(function(){
    $(".input").keyup(function(){
          var val1 = +$(".value1").val();
          var val2 = +$(".value2").val();
          $("#result").val(val1+val2);
    });
});
