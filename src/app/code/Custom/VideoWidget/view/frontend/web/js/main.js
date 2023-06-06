define([], function () {
    'use strict';

    return function(config) {
        const videoElement = document.getElementById('custom-video');
        const playButton = document.getElementById('custom-play-button');
        const muteButton = document.getElementById('custom-mute-button');

        videoElement.source = config.videoUrl;
        videoElement.load();

        playButton.addEventListener('click', () => {
            if(videoElement.paused) {
                videoElementElement.play();
            } else {
                videoElement.pause();
            }
        });
        muteButton.addEventListener('click', () => {
            videoElement.muted = !videoElement.muted;
        });
    };
});