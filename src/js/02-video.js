
import Vimeo from "@vimeo/player";
  

import throttle from "lodash.throttle";

const keyStorage = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
  

const player = new Vimeo(iframe);
let currentTime =  localStorage.getItem(keyStorage);

if (currentTime === null) {
    currentTime = 0
        }

player.setCurrentTime(currentTime);


player.on('timeupdate', throttle(saveToStorage,1000));

  

function saveToStorage(params) {
        localStorage.setItem(keyStorage, params.seconds);
   
   
    }