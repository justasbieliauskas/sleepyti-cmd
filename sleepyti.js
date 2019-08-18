const {from, fromNow} = require('./times');

let result;
if(process.argv.length > 2) {
    result = from(
        process.argv[2],
        process.argv[3],
        process.argv[4]
    );
} else {
    result = fromNow();
}

console.log(result);
