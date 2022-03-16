// Complete Day 1 goals here
var songTitles = ["ASTROTHUNDER","Paint It, Black","Love is Only a Feeling"];
var songArtists = ["Travis Scott", "The Rolling Stones", "Joey Bada$$"];
var songLinks = ["https://www.youtube.com/watch?v=Pa67b28h0vY","https://www.youtube.com/watch?v=O4irXQhgMqg","https://www.youtube.com/watch?v=93ufch_2mfw"];
var songImages = ["https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&q=75","https://upload.wikimedia.org/wikipedia/en/5/58/Paint_It_Black_UK_sleeve.jpg","https://direct.rhapsody.com/imageserver/images/alb.266944359/600x600.jpg"];
var songLengths = ["2:22","3:43","2:33"];
var ASTROTHUNDER = {
  title:"ASTROTHUNDER",
  artist:"Travis Scott",
  link:"https://www.youtube.com/watch?v=Pa67b28h0vY",
  imgURL:"https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&q=75",
  length:"2:22"
}
var PaintItBlack = {
  title:"Paint It, Black",
  artist:"The Rolling Stones",
  link:"https://www.youtube.com/watch?v=O4irXQhgMqg",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/5/58/Paint_It_Black_UK_sleeve.jpg",
  length:"3:43"
}

var LoveIsOnlyAFeeling = {
  title:"Love Is Only A Feeling",
  artist:"Joey Bada$$",
  link:"https://www.youtube.com/watch?v=93ufch_2mfw",
  imgURL:"https://direct.rhapsody.com/imageserver/images/alb.266944359/600x600.jpg",
  length:"2:33"
}
var songs = [ASTROTHUNDER,PaintItBlack,LoveIsOnlyAFeeling];
function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  // songTitles.forEach(function(song){
  //   $(".songs").append(`<div class="box text">${song}</div>`);
  // });
  // songArtists.forEach(function(artist){
  //   $(".artists").append(`<div class="box text" text>${artist}</div>`);
  // });
  // songLinks.forEach(function(link){
  //   $(".links").append(`<div class="box text"><a class="link-text" href=${link}>${link}</a></div>`);
  // });
  // songImages.forEach(function(image){
  //   $(".images").append(`<div class="box"><img src=${image}></div>`);
  // });
  // songLengths.forEach(function(length){
  //   $(".lengths").append(`<div class="box text">${length}</div>`);
  // });
  songs.forEach(function(song){
    $(".songs").append(`<div class="box text">${song.title}</div>`);
    $(".artists").append(`<div class="box text" text>${song.artist}</div>`);
    $(".links").append(`<a class=" box text link-text" target="blank_" href=${song.link}>${song.link}</a>`);
    $(".images").append(`<div class="box"><img src=${song.imgURL}></div>`);
    $(".lengths").append(`<div class="box text">${song.length}</div>`);
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
  // let newSongTitle = $(".title").val();
  // songTitles.push(newSongTitle);
  // let newArtistName = $(".artist").val();
  // songArtists.push(newArtistName);
  // let newLink = $(".link").val();
  // songLinks.push(newLink);
  // let newImage = $(".image").val();
  // songImages.push(newImage);
  // let newLength = $(".song-length").val();
  // songLengths.push(newLength);
  let newSongTitle = $(".title").val();
  let newSongArtist = $(".artist").val();
  let newSongLink = $(".link").val();
  let newSongImage = $(".image").val();
  let newSongLength = $(".song-length").val();
  let newSong = {
    title:newSongTitle,
    artist:newSongArtist,
    link:newSongLink,
    imgURL:newSongImage,
    length:newSongLength
  }
  songs.push(newSong);
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
  console.log(songTitles);
});

displaySongInfo();
