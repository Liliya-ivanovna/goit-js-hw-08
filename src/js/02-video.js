import Player from '@vimeo/player';
const idPlayer = document.getElementById('vimeo-player');
const player = new Player(idPlayer);
const onPlay = function() {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
};

player.on('play', onPlay);

