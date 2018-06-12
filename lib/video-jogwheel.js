class video_jogwheel {

    constructor (ele, options) {

        if (options === undefined)
            options = {};

        ele = typeof ele === 'string'
            ? document.getElementById(ele)
            : ele;

        this._ele         = ele;
        this._enabled     = false;
        this._sensitivity = options.sensitivity || 1;

        this.enable(true);

    }

    enable (enable) {

        let wheel_handler = (function (ev) {

            let dir      = ev.deltaY > 0 ? -1 : 1;
            let now_ts   = (new Date()).getTime();
            let last_ts  = this.last_ts;
            let last_dir = this.last_dir;

            let accel = last_ts === null || now_ts - last_ts > 1000 || last_dir !== dir
                ? 1 : 1000 / (now_ts - last_ts);
            let video_adj = ((dir / 50) + (accel / 100 * dir)) * this._sensitivity;
            this._ele.currentTime += video_adj;

            this.last_ts  = now_ts;
            this.last_dir = dir;

            ev.preventDefault();
            return false;

        }).bind(this);

        if (enable && !this._enabled) {
            this._ele.addEventListener('wheel', wheel_handler);
            this._enabled = true;
        } else if (!enable && this._enabled) {
            this._ele.removeEventListener('wheel', wheel_handler);
            this._enabled = false;
        }

    }

    sensitivity (level) {

        if (level)
            this._sensitivity = level;

        return this._sensitivity;

    }

}


if (typeof exports !== 'undefined') {
    exports = { default: video_jogwheel };
} else if (typeof window !== 'undefined') {
    window.video_jogwheel  = video_jogwheel;
}
