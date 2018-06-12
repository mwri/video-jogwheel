(function () {

    describe('video-jogwheel', () => {
        it('constructor', () => {
            let body = document.querySelector('body');
            let video = document.createElement('video');
            body.appendChild(video);
            let vjw = new video_jogwheel(video);
        });
    });

})();
