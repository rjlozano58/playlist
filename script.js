// Complete Day 1 goals here
var songTitles = ["ASTROTHUNDER","Paint It, Black","Love is Only a Feeling"];
var SongArtists = ["Travis Scott", "The Rolling Stones", "Joey Bada$$"];
function displaySongInfo() {
  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
  songTitles.push("90210");
  console.log(songTitles);
});

displaySongInfo();
