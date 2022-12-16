import Player from '@vimeo/player';
const throttle = require('lodash.throttle')

const player = new Player(document.querySelector('#vimeo-player'));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError': break;
        default: break;
    }
});

const setItem = (data) => localStorage.setItem("videoplayer-current-time", data.seconds);
const throttled = throttle(setItem, 1000);

player.on('timeupdate', throttled);