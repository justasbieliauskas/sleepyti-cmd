const sleepyti = require('./site');

class Input {
    constructor(hours, minutes, period) {
        this.selectors = {
            '#hour': hours,
            '#minute': minutes,
            '#ampm': period,
        };
    }

    toJQueryInput(selector) {
        return {
            val: () => this.selectors[selector],
        };
    }
}

class Times {
    constructor() {
        this.times = [];
    }

    push(time) {
        this.times.push(time);
    }

    html(time) {
        this.push(time);
    }

    toString() {
        return this.times.join('\n');
    }
}

function from(hours, minutes, period) {
    const input = new Input(hours, minutes, period);
    const times = new Times();
    const $ = function(selector) {
        if(selector.substr(1, 6) === 'result') {
            return times;
        }
        return input.toJQueryInput(selector);
    };
    sleepyti.calculateFromSpecificTime($);
    return times.toString();
}

function fromNow() {
    const times = new Times();
    const $ = () => times;
    sleepyti.calculateFromNow($);
    return times.toString();
}

module.exports = {from, fromNow};
