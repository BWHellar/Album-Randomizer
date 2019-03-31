



function displayImage(){
    var imagesArray = ["img/2Bears.jpg", "img/AidKit.jpg", "img/Avalanche.jpg", "img/Chainless.jpg", "img/ChromeSparks.jpg", "img/Computer.jpg", "img/Crystal.jpg", "img/DFA.jpg", "img/DillyDally.jpg", "img/Eagles.jpg", "img/Emancipator.jpg", "img/Emancipator2.jpg", "img/Foals.jpg", "img/FrontBottom.jpg", "img/MillionDead.jpg", "img/Moderat.jpg", "img/Nosajthing.jpg", "img/Offend.jpg", "img/Pixies.jpg", "img/Presets.jpg", "img/QOTSA.jpg", "img/Ratatat.jpg", "img/Regina.jpg", "img/Shlomo.jpg", "img/Silversun.jpg", "img/Sleater.jpg", "img/Tricky.jpg", "img/Wax.jpg", "img/WyeOak.jpg", "img/Yeasayer.jpg"];
    var num = Math.floor(Math.random() * 30);
    document.canvas.src = imagesArray[num];
      if (num == [0]){
        $("#ALBUM").text("The Night is Young");
        $("#BAND").text("By: The 2 Bears");
      } else if (num == [1]){
        $("#ALBUM").text("The Lions Roar");
        $("#BAND").text("By: First Aid Kit");
      } else if (num == [2]){
        $("#ALBUM").text("Since I Left You")
        $("#BAND").text("By: The Avalanches");
      } else if (num == [3]){
        $("#ALBUM").text("Grey Veils");
        $("#BAND").text("By: Chainless");
      } else if (num == [4]){
        $("#ALBUM").text("Sparks EP");
        $("#BAND").text("By: Chrome Sparks");
      } else if (num == [5]){
        $("#ALBUM").text("This is the Computers");
        $("#BAND").text("By: The Computers");
      } else if (num == [6]){
        $("#ALBUM").text("III")
        $("#BAND").text("By: Crystal Castles");
      } else if (num == [7]){
        $("#ALBUM").text("Heads Up")
        $("#BAND").text("By: Death From Above");
      } else if (num == [8]){
        $("#ALBUM").text("Heaven")
        $("#BAND").text('By: Dilly Dally');
      } else if (num == [9]){
        $("#ALBUM").text("Heart On")
        $("#BAND").text('By: Eagles of Death Metal');
      } else if (num == [10]){
        $("#ALBUM").text("Dusk to Dawn")
        $("#BAND").text('By: Emancipator');
      } else if (num == [11]){
        $("#ALBUM").text("Safe in the Steep Cliffs")
        $("#BAND").text('By: Emancipator');
      } else if (num == [12]){
        $("#ALBUM").text("Antidotes")
        $("#BAND").text('By: Foals');
      } else if (num == [13]){
        $("#ALBUM").text("Back on Top")
        $("#BAND").text('By: The Front Bottoms');
      } else if (num == [14]){
        $("#ALBUM").text("Harmony No Harmony")
        $("#BAND").text('By: Million Dead');
      } else if (num == [15]){
        $("#ALBUM").text("II")
        $("#BAND").text('By: Moderat');
      } else if (num == [16]){
        $("#ALBUM").text("Home")
        $("#BAND").text('By: Nosaj Thing');
      } else if (num == [17]){
        $("#ALBUM").text("You Have No Idea What You're Getting Into")
        $("#BAND").text('By: Does It Offend You, Yeah?');
      } else if (num == [18]){
        $("#ALBUM").text("Doolittle")
        $("#BAND").text('By: Pixies');
      } else if (num == [19]){
        $("#ALBUM").text("Pacifica")
        $("#BAND").text('By: The Presets');
      } else if (num == [20]){
        $("#ALBUM").text("Era Vulgaris")
        $("#BAND").text('By: Queens of the Stone Age');
      } else if (num == [21]){
        $("#ALBUM").text("The Classics")
        $("#BAND").text('By: Ratatat');
      } else if (num == [22]){
        $("#ALBUM").text("Begin to Hope")
        $("#BAND").text('By: Regina Spektor');
      } else if (num == [23]){
        $("#ALBUM").text("Bad Vibes")
        $("#BAND").text('By: Shlomo');
      } else if (num == [24]){
        $("#ALBUM").text("Pikul")
        $("#BAND").text('By: Silversun Pickups');
      } else if (num == [25]){
        $("#ALBUM").text("Cities to Love")
        $("#BAND").text('By: Sleater-Kinney');
      } else if (num == [26]){
        $("#ALBUM").text("False Idols")
        $("#BAND").text('By: Tricky');
      } else if (num == [27]){
        $("#ALBUM").text("Wax Tailor Tales of the Forgotten Melodies")
        $("#BAND").text('By: Wax Tailor');
      } else if (num == [28]){
        $("#ALBUM").text("Civilian")
        $("#BAND").text('By: Wye Oak');
      } else if (num == [29]){
        $("#ALBUM").text("Fragrant World")
        $("#BAND").text('By: Yeasayer');
      }
    }
