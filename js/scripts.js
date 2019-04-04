
$(document).ready(function(){
// Various array to be compiled in the future once the knowledge is obtained//
  var TwoBears = ["Get Out", "Angel (Touch Me)", "Money Man", "Not This Time", "See You", "Son Of The Sun", "	Unbuild It", "Modern Family", "Mary Mary", "Run Run Run", "My Queen", "	The Night Is Young", "Silence", "Hidden Track"]
  var AidKits = ["The Lion's Roar", "Emmylou", "In The Hearts Of Men", "Blue", "This Old Routine", "To A Poet", "I Found A Way", "Dance To Another Tune", "New Year's Eve", "King Of The World"]
  var Avalanche = ["Since I Left You", "Stay Another Season", "Radio", "Two Hearts In 3/4 Time", "Avalanche Rock", "Flight Tonight", "Close To You", "Diners Only", "A Different Feeling", "Electricity", "Tonight May Have To Last Me All My Life", "Pablo's Cruise", "Frontier Psychiatrist", "Etoh", "Summer Crane", "Little Journey", "Live At Dominoes", "Extra Kings"]
  var Chainless = ["1755", "Grey Veils", "Ancient Ruins", "Artifacts", "Hiding", "Gaia's Chant", "Gatekeeper"]
  var Chrome = ["Your Planet", "Marijuana", "Cosmic Slap Of Love", "Send The Pain On", "Gates To Heaven", "Luna Luxor"]
  var Computer = ["Where Do I Fit In", "Lovers Lovers Lovers", "Blood Is Thicker", "Hot Damnocles", "Cinco De Mayo", "Rhythm Revue", "Group Identity", "I've Got What It Takes (Part 3)", "Yeah Yeah Yeah", "The Queen In 3D", "Music Is Dead"]
  var Crystal = ["Plague", "Kerosene", "Wrath Of God", "Affection", "Pale Flesh", "Sad Eyes", "Insulin", "Transgender", "Violent Youth", "Telepath", "Mercenary", "Child I Will Hurt You"]
  var Death = ["Dead Womb", "Too Much Love", "Do It! (Live)", "My Love Is Shared", "Losing Friends", "If We Don't Make It We'll Fake It"]
  var Dilly = ["I Feel Free", "Doom", "Believe", "Sober Motel", "Sorry Ur Mad", "Marijuana", "Pretty Cold", "Bad Biology", "Heaven"]
  var Eagles = ["Anything 'Cept The Truth", "Wannabe In L.A.", "(I Used To Couldn't Dance) Tight Pants", "High Voltage", "Secret Plans", "Now I'm A Fool", "Heart On", "Cheap Thrills", "How Can A Man With So Many Friends Feel So Alone", "Solo Flights", "Prissy Prancin", "I'm Your Torpedo"]
  var Emanc = ["Minor Cause", "Valhalla", "Merlion", "Outlaw", "Dusk To Dawn", "The Way", "Afterglow", "Eve II", "Natural Cause", "Galapagos"]
  var Emanc2 = ["Greenland", "Black Lake", "Jet Stream", "Kamakura", "All Through The Night", "Old Devil", "Nevergreen", "Ares", "Rattlesnakes", "Bury Them Bones", "Vines", "Hill Sighed", "Siren", "Safe In The Steep Cliffs"]
  var Foals = ["The French Open", "Cassius", "Red Socks Pugie", "Olympic Airways", "Electric Bloom", "Balloons", "Heavy Water", "Two Steps Twice", "Big Big Love (Fig. 2)", "Like Swimming", "Tron"]
  var Front = ["Motorcyle", "Summer Shandy", "Cough It Out", "Help", "Laugh Till I Cry", "Historic Cemetery", "The Plan (F**k Jobs)", "Ginger", "2YL", "West Virginia", "Plastic Flowers"]
  var Million = ["Bread And Circuses", "Holloway Prison Blues", "After The Rush Hour", "Plan B", "Carthago Est Delenda", "To Whom It May Concern", "Living The Dream", "Margot Kidder", "Murder And Create", "Achilles Lung", "Bovine Spungiform Economics", "Father My Father", "Engine Driver", "Harmony No Harmony"]
  var Moderat = ["The Mark (Interlude)", "Bad Kingdom", "Versions", "Let In The Light", "Milk", "Therapy", "Gita", "Clouded (Interlude)", "Ilona", "Damage Done", "This Time"]
  var Nosaj = ["Home", "Eclipse/Blue", "Safe", "Glue", "Distance", "Tell", "Snap", "Prelude", "Try", "Phase III", "Light 3"]
  var Offend = ["Battle Royale", "With A Heavy Heart (I Regret To Inform You)", "We Are Rockstars", "Dawn Of The Dead", "Doomed Now", "Attack Of The 60 FT Lesbian Octopus", "Let's Make Out", "Being Bad Feels Pretty Good", "Weird Science", "Epic Last Song"]
  var Pixies = ["Debaser", "Tame", "Wave Of Mutilation", "I Bleed", "Here Comes Your Man", "Dead", "Monkey Gone To Heaven", "Mr. Grieves", "Crackity Jones", "La La Love You", "No. 13 Baby", "There Goes My Gun", "Hey", "Silver", "Gouge Away"]
  var Presets = ["Youth In Trouble", "Ghosts", "Promises", "Push", "Fall", "It's Cool", "A.O.", "Surrender", "Fast Seconds", "Fail Epic"]
  var Queens = ["Turnin' On The Screw", "Sick, Sick, Sick", "I'm Designer", "Into The Hollow", "Misfit Love", "Battery Acid", "Make it Wit Chu", "3's & 7's", "Suture Up Your Future", "River In The Road", "Run, Pig, Run"]
  var Ratatat = ["Montanita", "Lex", "Gettysburg", "Wildcat", "Tropicana", "Loud Pipes", "Kennedy", "Swisha", "Nostrand", "Tacobel Canon"]
  var Regina = ["Fidelity", "Batter", "Samson", "On The Radio", "Field Below", "Hotel Song", "Après Moi", "20 Years Of Snow", "That Time", "Edit", "Lady", "Summer In The City"]
  var Shlomo = ["Big Feelings", "Places", "Anywhere But Here", "It Was Whatever", "Parties", "Just Us", "Sink", "I Can't See You, I'm Dead", "Trapped In A Burning House", "Get Out", "Your Stupid Face", "Seriously", "Same Time", "Places (Shlohmo Remix)"]
  var Silversun = ["Kissing Families", "Comeback Kid", "Booksmart Devil", "The Fuzz", "Creation Lake", "...All The Go Inbetweens", "Sci-Fi Lullaby"]
  var Sleater = ["Price Tag", "Fangless", "Surface Envy", "No Cities To Love", "A New Wave", "No Anthems", "Gimme Love", "Bury Our Friends", "Hey Darling", "Fade"]
  var Tricky = ["Somebody's Sins", "Nothing Matters", "Valentine", "Bonnie & Clyde", "Parenthesis", "Nothing's Changed", "If Only I Knew", "Is That Your Life", "Tribal Drums", "We Don't Die", "Chinese Interlude", "Does It", "I'm Ready", "Hey Love", "Passion Of The Christ"]
  var Wax = ["Behind The Curtain (Opening)", "Que Sera", "Ungodly Fruit", "Between Fellows", "Hypnosis Theme", "Damn That Music Made My Day", "Where My Heart's At", "Birth Of A Struggle", "Am I Free", "Ringing Score", "I Don't Know", "Our Dance", "Stay Tuned", "Walk The Line", "A Woman's Voice", "Don't You Remember", "How I Feel", "Behind The Disguise (Closing)"]
  var Wye = ["Two Small Deaths", "The Alter", "Holy Holy", "Dogs Eyes", "Civilian", "Fish", "Plains", "Hot As Day", "We Were Wealth", "Doubt"]
  var Yea = ["Fingers Never Bleed", "Longevity", "Blue Paper", "Henrietta", "Devil and the Deed", "No Bones", "Reagan's Skeleton", "Demon Road", "Damaged Goods	", "Folk Hero Shtick", "Glass of the Microscope"]

  var imagesArray = ["img/2Bears.jpg", "img/AidKit.jpg", "img/Avalanche.jpg", "img/Chainless.jpg", "img/ChromeSparks.jpg", "img/Computer.jpg", "img/Crystal.jpg", "img/DFA.jpg", "img/DillyDally.jpg", "img/Eagles.jpg", "img/Emancipator.jpg", "img/Emancipator2.jpg", "img/Foals.jpg", "img/FrontBottom.jpg", "img/MillionDead.jpg", "img/Moderat.jpg", "img/Nosajthing.jpg", "img/Offend.jpg", "img/Pixies.jpg", "img/Presets.jpg", "img/QOTSA.jpg", "img/Ratatat.jpg", "img/Regina.jpg", "img/Shlomo.jpg", "img/Silversun.jpg", "img/Sleater.jpg", "img/Tricky.jpg", "img/Wax.jpg", "img/WyeOak.jpg", "img/Yeasayer.jpg"];

  //The event listener//
  $("#randomButton").click(function(){
    displayImage();
  })



// This is the main function that runs everything //
  function displayImage(){
    var num = Math.floor(Math.random() * 3);
    document.canvas.src = imagesArray[num];
    if (num == [0]){
      $("#ALBUM").text("The Night is Young");
      $("#BAND").text("By: The 2 Bears");
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < TwoBears.length; i++) {
        $("#myList").append("<li>"+TwoBears[i]+"</li>");
      };
    } else if (num == 1){
      $("#ALBUM").text("The Lions Roar");
      $("#BAND").text("By: First Aid Kit");
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < AidKits.length; i++) {
        $("#myList").append("<li>"+AidKits[i]+"</li>");
      };
    } else if (num == 2){
      $("#ALBUM").text("Since I Left You")
      $("#BAND").text("By: The Avalanches");
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Avalanche.length; i++) {
        $("#myList").append("<li>"+Avalanche[i]+"</li>");
      };
    } else if (num == 3){
      $("#ALBUM").text("Grey Veils");
      $("#BAND").text("By: Chainless");
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Chainless.length; i++) {
        $("#myList").append("<li>"+Chainless[i]+"</li>");
      };
    } else if (num == 4){
      $("#ALBUM").text("Sparks EP");
      $("#BAND").text("By: Chrome Sparks");
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Chrome.length; i++) {
        $("#myList").append("<li>"+Chrome[i]+"</li>");
      };
    } else if (num == 5){
      $("#ALBUM").text("This is the Computers");
      $("#BAND").text("By: The Computers");
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Computer.length; i++) {
        $("#myList").append("<li>"+Computer[i]+"</li>");
      };
    } else if (num == 6){
      $("#ALBUM").text("III")
      $("#BAND").text("By: Crystal Castles");
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Crystal.length; i++) {
        $("#myList").append("<li>"+Crystal[i]+"</li>");
      };
    } else if (num == 7){
      $("#ALBUM").text("Heads Up")
      $("#BAND").text("By: Death From Above");
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Death.length; i++) {
        $("#myList").append("<li>"+Death[i]+"</li>");
      };
    } else if (num == 8){
      $("#ALBUM").text("Heaven")
      $("#BAND").text('By: Dilly Dally');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Dilly.length; i++) {
        $("#myList").append("<li>"+Dilly[i]+"</li>");
      };
    } else if (num == 9){
      $("#ALBUM").text("Heart On")
      $("#BAND").text('By: Eagles of Death Metal');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Eagles.length; i++) {
        $("#myList").append("<li>"+Eagles[i]+"</li>");
      };
    } else if (num == 10){
      $("#ALBUM").text("Dusk to Dawn")
      $("#BAND").text('By: Emancipator');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Emanc.length; i++) {
        $("#myList").append("<li>"+Emanc[i]+"</li>");
      };
    } else if (num == 11){
      $("#ALBUM").text("Safe in the Steep Cliffs")
      $("#BAND").text('By: Emancipator');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Emanc2.length; i++) {
        $("#myList").append("<li>"+Emanc2[i]+"</li>");
      };
    } else if (num == [12]){
      $("#ALBUM").text("Antidotes")
      $("#BAND").text('By: Foals');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Foals.length; i++) {
        $("#myList").append("<li>"+Foals[i]+"</li>");
      };
    } else if (num == [13]){
      $("#ALBUM").text("Back on Top")
      $("#BAND").text('By: The Front Bottoms');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Front.length; i++) {
        $("#myList").append("<li>"+Front[i]+"</li>");
      };
    } else if (num == [14]){
      $("#ALBUM").text("Harmony No Harmony")
      $("#BAND").text('By: Million Dead');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Million.length; i++) {
        $("#myList").append("<li>"+Million[i]+"</li>");
      };
    } else if (num == [15]){
      $("#ALBUM").text("II")
      $("#BAND").text('By: Moderat');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Moderat.length; i++) {
        $("#myList").append("<li>"+Moderat[i]+"</li>");
      };
    } else if (num == [16]){
      $("#ALBUM").text("Home")
      $("#BAND").text('By: Nosaj Thing');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Nosaj.length; i++) {
        $("#myList").append("<li>"+Nosaj[i]+"</li>");
      };
    } else if (num == [17]){
      $("#ALBUM").text("You Have No Idea What You're Getting Into")
      $("#BAND").text('By: Does It Offend You, Yeah?');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Offend.length; i++) {
        $("#myList").append("<li>"+Offend[i]+"</li>");
      };
    } else if (num == [18]){
      $("#ALBUM").text("Doolittle")
      $("#BAND").text('By: Pixies');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Pixies.length; i++) {
        $("#myList").append("<li>"+Pixies[i]+"</li>");
      };
    } else if (num == [19]){
      $("#ALBUM").text("Pacifica")
      $("#BAND").text('By: The Presets');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Presets.length; i++) {
        $("#myList").append("<li>"+Presets[i]+"</li>");
      };
    } else if (num == [20]){
      $("#ALBUM").text("Era Vulgaris")
      $("#BAND").text('By: Queens of the Stone Age');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Queens.length; i++) {
        $("#myList").append("<li>"+Queens[i]+"</li>");
      };
    } else if (num == [21]){
      $("#ALBUM").text("The Classics")
      $("#BAND").text('By: Ratatat');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Ratatat.length; i++) {
        $("#myList").append("<li>"+Ratatat[i]+"</li>");
      };
    } else if (num == [22]){
      $("#ALBUM").text("Begin to Hope")
      $("#BAND").text('By: Regina Spektor');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Regina.length; i++) {
        $("#myList").append("<li>"+Regina[i]+"</li>");
      };
    } else if (num == [23]){
      $("#ALBUM").text("Bad Vibes")
      $("#BAND").text('By: Shlomo');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Shlomo.length; i++) {
        $("#myList").append("<li>"+Shlomo[i]+"</li>");
      };
    } else if (num == [24]){
      $("#ALBUM").text("Pikul")
      $("#BAND").text('By: Silversun Pickups');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Silversun.length; i++) {
        $("#myList").append("<li>"+Silversun[i]+"</li>");
      };
    } else if (num == [25]){
      $("#ALBUM").text("Cities to Love")
      $("#BAND").text('By: Sleater-Kinney');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Sleater.length; i++) {
        $("#myList").append("<li>"+Sleater[i]+"</li>");
      };
    } else if (num == [26]){
      $("#ALBUM").text("False Idols")
      $("#BAND").text('By: Tricky');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Tricky.length; i++) {
        $("#myList").append("<li>"+Tricky[i]+"</li>");
      };
    } else if (num == [27]){
      $("#ALBUM").text("Wax Tailor Tales of the Forgotten Melodies")
      $("#BAND").text('By: Wax Tailor');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Wax.length; i++) {
        $("#myList").append("<li>"+Wax[i]+"</li>");
      };
    } else if (num == [28]){
      $("#ALBUM").text("Civilian")
      $("#BAND").text('By: Wye Oak');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Wye.length; i++) {
        $("#myList").append("<li>"+Wye[i]+"</li>");
      };
    } else if (num == [29]){
      $("#ALBUM").text("Fragrant World")
      $("#BAND").text('By: Yeasayer');
      $("#outputRow").html('<ul id="myList"></ul>');
      for (var i = 0; i < Yea.length; i++) {
        $("#myList").append("<li>"+Yeah[i]+"</li>");
      };
    }
  }





});
