# video-jogwheel [![Build Status](https://travis-ci.org/mwri/video-jogwheel.svg?branch=master)](https://travis-ci.org/mwri/video-jogwheel)

## Usage

Include **dist/video-jogwheel-es5.js** and pass a `video` element to
the constructor, like this:

```javascript
let video = document.querySelector('video');
let vjw = new video_jogwheel(video);
```

Now wizz the mouse wheel back and forth over the video.

The package is also fully webpack compatible.

## Build

run `npm install` to install the dependencies, and `grunt build` to
build (or `./node_modules/.bin/grunt build` if you do not have
grunt, grunt CLI locally installed.

This will run code checkers and linters and the test suite, report on
coverage and build build `dist/video-jogwheel_es5.js`, an ES5 babel
transpile of the ES6 source.

Running `grunt watch:build` will watch for changes to the source or
tests and invoke the full build cycle when they are detected. Running
`grunt watch:test` will again watch for changes, and invoke the most
light weight possible file test cycle.

Note that in the event of stack traces being output during the full
build, with coverage reports, the stack trace line numbers will be
broken. Run `test` or `watch:test` for valid stack traces instead
of `build`.
