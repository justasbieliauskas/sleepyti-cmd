const {from, fromNow} = require('./times');

class Sleepyti {
    constructor(args) {
        this.args = args;
    }

    output() {
        let result;
        if(this.args.length > 2) {
            result = from(this.args[2], this.args[3], this.args[4]);
        } else {
            result = fromNow();
        }
        return result;
    }
}

module.exports = Sleepyti;
