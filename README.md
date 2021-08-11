# Meditation-app
Meditation app tutorial from Dev Ed www.developedbyed.com

## Updates
### Responsive design:
I added responsiveness to the design by adding media queries and changing the flex directions and some elements proportions for different screen sizes. 

Code snippets
----- CSS -----
.time-select button {
  width: 80px;
  height: 80px;
  margin-right: 15px;
}
.time-select button:hover {
  background: white;
  color: black;
  transition: all 300ms ease-in-out;
  
}

@media screen and (min-width: 800px) {
  .time-select button {
    font-size: 20px;
    width: 120px;
  height: 120px;
  }
}

--------------


### Play, pause and replay button update:
When animating the text, the replay button wasn't displayed. In the animated text section, in the If statement for currentTime >= playTime (or fakeTime), I changed the play.src = './svg/play.svg' for play.src = './svg/replay.svg'. Now, everytime the current time reaches 0, the pause button will be exchanged for the replay button. the play button will show up again when another timer button is clicked on.
I added the cursor: pointer property to the player-container img. This allows the user to see that the play button is clickable when hovering over it. 

## About me
- Website - [Lidia Ruiz Jimeno](https://www.behance.net/Lidiarjimeno)
- Frontend Mentor - [@LidiaRJ](https://www.frontendmentor.io/profile/LidiaRJ)
- Github - [@LidiaRJ](https://github.com/LidiaRJ)
- Codepen - (https://codepen.io/lilyrj)
- Twitter - [@JimenoLidia](https://twitter.com/JimenoLidia)

 