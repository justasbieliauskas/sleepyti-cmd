# sleepyti-md

https://sleepyti.me turned to command line app.

## Install

```bash
# Add a tap
$ brew tap justasbieliauskas/sleepyti

# Install
$ brew install sleepyti
```

## Usage

Call execute node.js script `sleepyti.js` to run program. Pass hours, minutes and period or pass nothing to indicate current time.

Example:

```bash
$ node sleepyti.js
1:45 AM
3:15 AM
4:45 AM
6:15 AM
7:45 AM
9:15 AM

$ node sleepyti.js
9:00 PM
7:30 PM
6:00 PM
4:30 PM
```

## Build from sources

Inside this repo do:

```bash
# install pkg
$ npm install

# compile scripts to executable
$ npm run build
```
