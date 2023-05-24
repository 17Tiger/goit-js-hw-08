import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const IFRAME_SELECTOR = 'iframe';
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector(IFRAME_SELECTOR);
const player = new Player(iframe);

player.on('timeupdate', throttle(playerTimeUpdate, 1000));

function playerTimeUpdate(data) {
  const currentTime = data.seconds;
  localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
}

player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY) || 0);
