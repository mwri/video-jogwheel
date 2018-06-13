'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var video_jogwheel = function () {
    function video_jogwheel(ele, options) {
        _classCallCheck(this, video_jogwheel);

        if (options === undefined) options = {};

        ele = typeof ele === 'string' ? document.getElementById(ele) : ele;

        this._ele = ele;
        this._enabled = false;
        this._sensitivity = options.sensitivity || 1;

        this.enable(true);
    }

    _createClass(video_jogwheel, [{
        key: 'enable',
        value: function enable(_enable) {

            var wheel_handler = function (ev) {

                var dir = ev.deltaY > 0 ? -1 : 1;
                var now_ts = new Date().getTime();
                var last_ts = this.last_ts;
                var last_dir = this.last_dir;

                var accel = last_ts === null || now_ts - last_ts > 1000 || last_dir !== dir ? 1 : 1000 / (now_ts - last_ts);
                var video_adj = (dir / 50 + accel / 100 * dir) * this._sensitivity;
                this._ele.currentTime += video_adj;

                this.last_ts = now_ts;
                this.last_dir = dir;

                ev.preventDefault();
                return false;
            }.bind(this);

            if (_enable && !this._enabled) {
                this._ele.addEventListener('wheel', wheel_handler);
                this._enabled = true;
            } else if (!_enable && this._enabled) {
                this._ele.removeEventListener('wheel', wheel_handler);
                this._enabled = false;
            }
        }
    }, {
        key: 'sensitivity',
        value: function sensitivity(level) {

            if (level) this._sensitivity = level;

            return this._sensitivity;
        }
    }]);

    return video_jogwheel;
}();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { default: video_jogwheel };
} else if (typeof window !== 'undefined') {
    window.video_jogwheel = video_jogwheel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi92aWRlby1qb2d3aGVlbC5qcyJdLCJuYW1lcyI6WyJ2aWRlb19qb2d3aGVlbCIsImVsZSIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiX2VsZSIsIl9lbmFibGVkIiwiX3NlbnNpdGl2aXR5Iiwic2Vuc2l0aXZpdHkiLCJlbmFibGUiLCJ3aGVlbF9oYW5kbGVyIiwiZXYiLCJkaXIiLCJkZWx0YVkiLCJub3dfdHMiLCJEYXRlIiwiZ2V0VGltZSIsImxhc3RfdHMiLCJsYXN0X2RpciIsImFjY2VsIiwidmlkZW9fYWRqIiwiY3VycmVudFRpbWUiLCJwcmV2ZW50RGVmYXVsdCIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxldmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxjO0FBRUYsNEJBQWFDLEdBQWIsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQUE7O0FBRXZCLFlBQUlBLFlBQVlDLFNBQWhCLEVBQ0lELFVBQVUsRUFBVjs7QUFFSkQsY0FBTSxPQUFPQSxHQUFQLEtBQWUsUUFBZixHQUNBRyxTQUFTQyxjQUFULENBQXdCSixHQUF4QixDQURBLEdBRUFBLEdBRk47O0FBSUEsYUFBS0ssSUFBTCxHQUFvQkwsR0FBcEI7QUFDQSxhQUFLTSxRQUFMLEdBQW9CLEtBQXBCO0FBQ0EsYUFBS0MsWUFBTCxHQUFvQk4sUUFBUU8sV0FBUixJQUF1QixDQUEzQzs7QUFFQSxhQUFLQyxNQUFMLENBQVksSUFBWjtBQUVIOzs7OytCQUVPQSxPLEVBQVE7O0FBRVosZ0JBQUlDLGdCQUFpQixVQUFVQyxFQUFWLEVBQWM7O0FBRS9CLG9CQUFJQyxNQUFXRCxHQUFHRSxNQUFILEdBQVksQ0FBWixHQUFnQixDQUFDLENBQWpCLEdBQXFCLENBQXBDO0FBQ0Esb0JBQUlDLFNBQVksSUFBSUMsSUFBSixFQUFELENBQWFDLE9BQWIsRUFBZjtBQUNBLG9CQUFJQyxVQUFXLEtBQUtBLE9BQXBCO0FBQ0Esb0JBQUlDLFdBQVcsS0FBS0EsUUFBcEI7O0FBRUEsb0JBQUlDLFFBQVFGLFlBQVksSUFBWixJQUFvQkgsU0FBU0csT0FBVCxHQUFtQixJQUF2QyxJQUErQ0MsYUFBYU4sR0FBNUQsR0FDTixDQURNLEdBQ0YsUUFBUUUsU0FBU0csT0FBakIsQ0FEVjtBQUVBLG9CQUFJRyxZQUFZLENBQUVSLE1BQU0sRUFBUCxHQUFjTyxRQUFRLEdBQVIsR0FBY1AsR0FBN0IsSUFBcUMsS0FBS0wsWUFBMUQ7QUFDQSxxQkFBS0YsSUFBTCxDQUFVZ0IsV0FBVixJQUF5QkQsU0FBekI7O0FBRUEscUJBQUtILE9BQUwsR0FBZ0JILE1BQWhCO0FBQ0EscUJBQUtJLFFBQUwsR0FBZ0JOLEdBQWhCOztBQUVBRCxtQkFBR1csY0FBSDtBQUNBLHVCQUFPLEtBQVA7QUFFSCxhQWxCbUIsQ0FrQmpCQyxJQWxCaUIsQ0FrQlosSUFsQlksQ0FBcEI7O0FBb0JBLGdCQUFJZCxXQUFVLENBQUMsS0FBS0gsUUFBcEIsRUFBOEI7QUFDMUIscUJBQUtELElBQUwsQ0FBVW1CLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DZCxhQUFwQztBQUNBLHFCQUFLSixRQUFMLEdBQWdCLElBQWhCO0FBQ0gsYUFIRCxNQUdPLElBQUksQ0FBQ0csT0FBRCxJQUFXLEtBQUtILFFBQXBCLEVBQThCO0FBQ2pDLHFCQUFLRCxJQUFMLENBQVVvQixtQkFBVixDQUE4QixPQUE5QixFQUF1Q2YsYUFBdkM7QUFDQSxxQkFBS0osUUFBTCxHQUFnQixLQUFoQjtBQUNIO0FBRUo7OztvQ0FFWW9CLEssRUFBTzs7QUFFaEIsZ0JBQUlBLEtBQUosRUFDSSxLQUFLbkIsWUFBTCxHQUFvQm1CLEtBQXBCOztBQUVKLG1CQUFPLEtBQUtuQixZQUFaO0FBRUg7Ozs7OztBQUtMLElBQUksT0FBT29CLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBT0EsT0FBT0MsT0FBZCxLQUEwQixXQUEvRCxFQUE0RTtBQUN4RUQsV0FBT0MsT0FBUCxHQUFpQixFQUFFQyxTQUFTOUIsY0FBWCxFQUFqQjtBQUNILENBRkQsTUFFTyxJQUFJLE9BQU8rQixNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ3RDQSxXQUFPL0IsY0FBUCxHQUF5QkEsY0FBekI7QUFDSCIsImZpbGUiOiJ2aWRlby1qb2d3aGVlbC1lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyB2aWRlb19qb2d3aGVlbCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoZWxlLCBvcHRpb25zKSB7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcblxuICAgICAgICBlbGUgPSB0eXBlb2YgZWxlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGUpXG4gICAgICAgICAgICA6IGVsZTtcblxuICAgICAgICB0aGlzLl9lbGUgICAgICAgICA9IGVsZTtcbiAgICAgICAgdGhpcy5fZW5hYmxlZCAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2Vuc2l0aXZpdHkgPSBvcHRpb25zLnNlbnNpdGl2aXR5IHx8IDE7XG5cbiAgICAgICAgdGhpcy5lbmFibGUodHJ1ZSk7XG5cbiAgICB9XG5cbiAgICBlbmFibGUgKGVuYWJsZSkge1xuXG4gICAgICAgIGxldCB3aGVlbF9oYW5kbGVyID0gKGZ1bmN0aW9uIChldikge1xuXG4gICAgICAgICAgICBsZXQgZGlyICAgICAgPSBldi5kZWx0YVkgPiAwID8gLTEgOiAxO1xuICAgICAgICAgICAgbGV0IG5vd190cyAgID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGxldCBsYXN0X3RzICA9IHRoaXMubGFzdF90cztcbiAgICAgICAgICAgIGxldCBsYXN0X2RpciA9IHRoaXMubGFzdF9kaXI7XG5cbiAgICAgICAgICAgIGxldCBhY2NlbCA9IGxhc3RfdHMgPT09IG51bGwgfHwgbm93X3RzIC0gbGFzdF90cyA+IDEwMDAgfHwgbGFzdF9kaXIgIT09IGRpclxuICAgICAgICAgICAgICAgID8gMSA6IDEwMDAgLyAobm93X3RzIC0gbGFzdF90cyk7XG4gICAgICAgICAgICBsZXQgdmlkZW9fYWRqID0gKChkaXIgLyA1MCkgKyAoYWNjZWwgLyAxMDAgKiBkaXIpKSAqIHRoaXMuX3NlbnNpdGl2aXR5O1xuICAgICAgICAgICAgdGhpcy5fZWxlLmN1cnJlbnRUaW1lICs9IHZpZGVvX2FkajtcblxuICAgICAgICAgICAgdGhpcy5sYXN0X3RzICA9IG5vd190cztcbiAgICAgICAgICAgIHRoaXMubGFzdF9kaXIgPSBkaXI7XG5cbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgfSkuYmluZCh0aGlzKTtcblxuICAgICAgICBpZiAoZW5hYmxlICYmICF0aGlzLl9lbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGUuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB3aGVlbF9oYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuX2VuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFlbmFibGUgJiYgdGhpcy5fZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWxfaGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNlbnNpdGl2aXR5IChsZXZlbCkge1xuXG4gICAgICAgIGlmIChsZXZlbClcbiAgICAgICAgICAgIHRoaXMuX3NlbnNpdGl2aXR5ID0gbGV2ZWw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbnNpdGl2aXR5O1xuXG4gICAgfVxuXG59XG5cblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHsgZGVmYXVsdDogdmlkZW9fam9nd2hlZWwgfTtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cudmlkZW9fam9nd2hlZWwgID0gdmlkZW9fam9nd2hlZWw7XG59XG4iXX0=
//# sourceMappingURL=video-jogwheel-es5.js.map
