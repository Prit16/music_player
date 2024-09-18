// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "Ishq wala love",
	// artist: "Broke For Free",
	image: "https://i.pinimg.com/originals/ca/21/cc/ca21cc71e9734e7eb60b2a6c7e51f86a.jpg",
	path: "ishq.mp3"
},
{
	name: "love me like you do x me hoon hero tera",
	// artist: "Tours",
	image: "https://i.scdn.co/image/ab67616d0000b2735e02f2f639b9008f4d1935d3",
	path: "loveme.mp3"
},
{
	name: "ole ole",
	// artist: "Chad Crouch",
	image: "https://downloads4djs.co.in/wp-content/uploads/2016/09/ole-ole-hassan-1024x1024.jpg",
	path: "ole.mp3",
},
{
	name: "Apna bana le",
	// artist: "Chad Crouch",
	image: "https://news24online.com/wp-content/uploads/2022/11/Bhediya.jpg",
	path: "apna bana le.mp3",
},
{
	name: "Maan meri jaan",
	// artist: "Chad Crouch",
	image: "https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg",
	path: "man meri jaan.mp3",
},
{
	name: "On the floor",
	// artist: "Chad Crouch",
	image: "https://i.scdn.co/image/ab67616d0000b273a9303ea0a84a88eb9294bab8",
	path: "on the floor.mp3",
},
{
	name: "kya mujhe pyaar hai",
	// artist: "Chad Crouch",
	image: "https://i.ytimg.com/vi/1DGNn0GslLQ/sddefault.jpg",
	path: "mujhe pyaar.mp3",
},
{
	name: "Haaye oye",
	// artist: "Chad Crouch",
	image: "https://a10.gaanacdn.com/images/albums/50/2451950/crop_480x480_1561531992_2451950.jpg",
	path: "haaye.mp3",
},
{
	name: "O mere dil ke chain",
	// artist: "Chad Crouch",
	image: "https://i0.wp.com/www.hinditracks.in/wp-content/uploads/2013/10/O-Mere-Dil-Ke-Chain.jpg",
	path: "dil ke chain.mp3",
},
{
	name: "jashne-bahara",
	// artist: "Chad Crouch",
	image: "https://cdns-images.dzcdn.net/images/cover/302a1dec49dfc23605e205224f825430/500x500.jpg",
	path: "jasn.mp3",
},
{
	name: "itni si baat hai",
	// artist: "Chad Crouch",
	image: "https://i.ytimg.com/vi/t7buUbo_1Qs/maxresdefault.jpg",
	path: "itni.mp3",
},
{
	name: "kesariya",
	// artist: "Chad Crouch",
	image: "https://cdn.siasat.com/wp-content/uploads/2022/07/New-Project-73.jpg",
	path: "kesariya.mp3",
},
{
	name: "uff teri ada",
	// artist: "Chad Crouch",
	image: "https://i1.sndcdn.com/artworks-000052467513-zpcydo-t500x500.jpg",
	path: "uff.mp3",
},
];



function ishqwala(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[0].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[0].image + ")";
    track_name.textContent = track_list[0].name;
    track_artist.textContent = track_list[0].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();
      // else pauseTrack();

  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}

function loveme(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    // resetValues();
  
    // Load a new track
    curr_track.src = track_list[1].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[1].image + ")";
    track_name.textContent = track_list[1].name;
    track_artist.textContent = track_list[1].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();



  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}
function ole(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[2].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[2].image + ")";
    track_name.textContent = track_list[2].name;
    track_artist.textContent = track_list[2].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();


  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}
function apna(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[3].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[3].image + ")";
    track_name.textContent = track_list[3].name;
    track_artist.textContent = track_list[3].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();


  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}
function maan(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[4].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[4].image + ")";
    track_name.textContent = track_list[4].name;
    track_artist.textContent = track_list[4].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();

  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}
function floor(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[5].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[5].image + ")";
    track_name.textContent = track_list[5].name;
    track_artist.textContent = track_list[5].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();


  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}
function pyaar(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[6].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[6].image + ")";
    track_name.textContent = track_list[6].name;
    track_artist.textContent = track_list[6].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();


  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}
function haaye(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[7].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[7].image + ")";
    track_name.textContent = track_list[7].name;
    track_artist.textContent = track_list[7].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();


  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}
function chain(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[8].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[8].image + ")";
    track_name.textContent = track_list[8].name;
    track_artist.textContent = track_list[8].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();


  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}
function jashn(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[9].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[9].image + ")";
    track_name.textContent = track_list[9].name;
    track_artist.textContent = track_list[9].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();


  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}
function itni(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[10].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[10].image + ")";
    track_name.textContent = track_list[10].name;
    track_artist.textContent = track_list[10].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();


  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}
function kesariya(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[11].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[11].image + ")";
    track_name.textContent = track_list[11].name;
    track_artist.textContent = track_list[11].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();


  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}
function uff(){
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
  
    // Load a new track
    curr_track.src = track_list[12].path;
    curr_track.load();
  
    // Update details of the track
    track_art.style.backgroundImage =
      "url(" + track_list[12].image + ")";
    track_name.textContent = track_list[12].name;
    track_artist.textContent = track_list[12].artist;
    now_playing.textContent =
      "PLAYING " + (track_index + 1) + " OF " + track_list.length;

      curr_track.play();
      if (!isPlaying) playTrack();


  
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
  
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
  
    // Apply a random background color
    // random_bg_color();
}




function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();

  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  // Update details of the track
  track_art.style.backgroundImage =
    "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
    "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);

  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);

  // Apply a random background color
  // random_bg_color();
}

// function random_bg_color() {
//   // Get a random number between 64 to 256
//   // (for getting lighter colors)
//   let red = Math.floor(Math.random() * 256) + 64;
//   let green = Math.floor(Math.random() * 256) + 64;
//   let blue = Math.floor(Math.random() * 256) + 64;

//   // Construct a color with the given values
//   let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";

//   // Set the background to the new color
//   document.body.style.background = bgColor;
// }

// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}



function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;

  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;

  // Replace icon with the play icon
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length - 1;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}




function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = curr_track.duration * (seek_slider.value / 100);

  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}

function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// Load the first track in the tracklist
loadTrack(track_index);




const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))