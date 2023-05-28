import Player from '@vimeo/player';
const player = document.getElementById('vimeo-player');
console.log(player);
const onPlay = function() {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
};

player.on('play', onPlay);

