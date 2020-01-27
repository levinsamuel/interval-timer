"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function Timer(props) {
    var _a = props.seconds, seconds = _a === void 0 ? 0 : _a, _b = props.minutes, minutes = _b === void 0 ? 0 : _b, _c = props.started, started = _c === void 0 ? true : _c, _d = props.className, className = _d === void 0 ? 'h1' : _d;
    // s
    var propSeconds = minutes * 60 + seconds;
    // ms
    var getTimeSeconds = function () { return Math.trunc(new Date().getTime() / 1000); };
    var originalStartTime = getTimeSeconds();
    var originalEndTimeSeconds = (Math.trunc(originalStartTime / 1000)) + propSeconds;
    var _e = react_1.useState(started), priorState = _e[0], setPriorState = _e[1];
    var _f = react_1.useState(originalEndTimeSeconds), endTimeSeconds = _f[0], setEndTime = _f[1];
    var _g = react_1.useState(propSeconds), stateSeconds = _g[0], setSeconds = _g[1];
    if (started && !priorState) {
        console.debug('changed from paused to started.');
        setEndTime(getTimeSeconds() + stateSeconds);
        setPriorState(started);
    }
    else if (!started && priorState) {
        console.debug('changed from started to paused.');
        setPriorState(started);
    }
    react_1.useEffect(function () {
        var countDown = function () {
            if (!started) {
                return;
            }
            var currentTimeSeconds = Math.trunc(new Date().getTime() / 1000);
            var newStateSeconds = endTimeSeconds - currentTimeSeconds;
            if (newStateSeconds <= 0) {
                window.clearInterval(timer);
            }
            setSeconds(newStateSeconds);
        };
        var timer = window.setInterval(countDown, 100);
        return function () { return window.clearInterval(timer); };
    });
    var displayMinutes = String(Math.trunc(stateSeconds / 60)).padStart(2, '0');
    var displaySeconds = String(stateSeconds % 60).padStart(2, '0');
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", { className: className },
            displayMinutes,
            ":",
            displaySeconds)));
}
exports.default = Timer;
//# sourceMappingURL=Timer.js.map