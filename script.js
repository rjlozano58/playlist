// Complete Day 1 goals here
var songTitles = ["ASTROTHUNDER","Paint It, Black","Love is Only a Feeling"];
var songArtists = ["Travis Scott", "The Rolling Stones", "Joey Bada$$"];
var songLinks = ["https://www.youtube.com/watch?v=Pa67b28h0vY","https://www.youtube.com/watch?v=O4irXQhgMqg","https://www.youtube.com/watch?v=93ufch_2mfw"];
function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  songTitles.forEach(function(song){
    $(".songs").append(`<div class="">${song}</div>`);
    
  });
  songArtists.forEach(function(artist){
    $(".artists").append(`<div>${artist}</div>`);
  });
  songLinks.forEach(function(link){
    $(".links").append(`<a href=${link}>${link}</a>`);
  });
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
  let songTitle = $().val();
  
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
  songTitles.push("90210");
  console.log(songTitles);
});

displaySongInfo();
