const app = () => {
  const song = document.querySelector('.song');
  //Target play icon img
  const play = document.querySelector('.play');
  //Get the circle of the svg file 
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.video-container video');

  //Audio
  const sounds = document.querySelectorAll('.sound-picker button');
  const timeDisplay = document.querySelector('.time-display');
  const timeSelect = document.querySelectorAll('.time-select button');

  //Get the lenght of outline circle
  const outlineLength = outline.getTotalLength();

  //Playtime duration
  let playTime = 1200;
  outline.style.strokeDashoffset = outlineLength;
  outline.style.strokeDasharray = outlineLength;

  //choose a sound
  sounds.forEach(sound => {
    sound.addEventListener('click', function() {
      song.src = this.getAttribute('data-sound');
      video.src = this.getAttribute('data-video');
      checkPlay(song);
    });
  });

  //Play sound
  play.addEventListener('click', () => {
    checkPlay(song);
    //song.play();
  });


  //Select time duration button
  timeSelect.forEach(btn => {
    btn.addEventListener('click', function() {
      //Get the attribute value of each button
      playTime = this.getAttribute('data-time');
      timeDisplay.textContent = `${Math.floor(playTime / 60)}:${Math.floor(playTime % 60)} `
    });
  });

  //Stop and play sounds function
  const checkPlay = song => {
     if (song.paused) {
       song.play();
       video.play();
       play.src = './svg/pause.svg';
     } 
     else {
       //if music plays, pause song and video
       song.pause();
       video.pause();
       play.src = './svg/play.svg';
     }
  };

  //Animate outline 
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = playTime - currentTime;
    //Dislay the time on text div
    //when it gets to 60secs the elapse time will get back to 0
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60); 

    //Animate the circle itself
    //Get the fraction of the time played by dividing. Multiply for the outlineLenght to see the how much of it to be filled. 
    let progress = outlineLength - (currentTime / playTime) * outlineLength;
    outline.style.strokeDashoffset = progress;
  
    //Animate text 
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if (currentTime >= playTime) {
      song.pause();
      video.pause();
      song.currentTime = 0;
      play.src = './svg/replay.svg';

    }
  }
};


app();

