var imagesArray = ["img/2Bears.jpg", "img/AidKit.jpg", "img/Avalanche.jpg", "img/Chainless.jpg", "img/ChromeSparks.jpg", "img/Computer.jpg", "img/Crystal.jpg", "img/DFA.jpg", "img/DillyDally.jpg", "img/Eagles.jpg", "img/Emancipator.jpg", "img/Emancipator2.jpg", "img/Foals.jpg", "img/FrontBottom.jpg", "img/MillionDead.jpg", "img/Moderat.jpg", "img/Nosajthing.jpg", "img/Offend.jpg", "img/Pixies.jpg", "img/Presets.jpg", "img/QOTSA.jpg", "img/Ratatat.jpg", "img/Regina.jpg", "img/Shlomo.jpg", "img/Silversun.jpg", "img/Sleater.jpg", "img/Tricky.jpg", "img/Wax.jpg", "img/WyeOak.jpg", "img/Yeasayer.jpg"];

function displayImage(){
    var num = Math.floor(Math.random() * 30);
    document.canvas.src = imagesArray[num];
}






$(document).ready(function(){
    $(".input").keyup(function(){
          var val1 = +$(".value1").val();
          var val2 = +$(".value2").val();
          $("#result").val(val1+val2);
    });
});
