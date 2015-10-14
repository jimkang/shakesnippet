var lineChomper = require('line-chomper');
var jsonfile = require('jsonfile');
var async = require('async');
var probable = require('probable');
var callNextTick = require('call-next-tick');

var numberOfLines = 4;
var linesInShakespeareFile = 182679;
var pickStartingLineIndex;

function shakesnippet(opts, done) {
  if (opts) {
    numberOfLines = opts.numberOfLines;
    pickStartingLineIndex = opts.pickStartingLineIndex;
  }

  if (!numberOfLines) {
    numberOfLines = probable.rollDie(4);
  }

  if (!pickStartingLineIndex) {
    pickStartingLineIndex = function pickRandomStartingLine(lineCount, done) {
      callNextTick(done, null, probable.roll(lineCount - numberOfLines));
    }
  }

  async.waterfall(
    [
      callPickStartingLineIndex,
      sampleLines,
      checkLines,
      cleanLines,
      joinLines      
    ],
    done
  );
}

function callPickStartingLineIndex(done) {
  pickStartingLineIndex(linesInShakespeareFile, done);
}

function sampleLines(startingIndex, done) {
  var lineOffsets = jsonfile.readFileSync(
    __dirname + '/data/shakeslineoffsets.json'
  );

  lineChomper.chomp(
    __dirname + '/data/folger-shakespeare-library.txt',
    {
      lineOffsets: lineOffsets,
      fromLine: startingIndex,
      lineCount: numberOfLines
    },
    readDone
  );

  function readDone(error, lines) {
    if (error) {
      done(error);
    }
    else if (!lines || !Array.isArray(lines) || lines.length < 1) {
      done(new Error('Could not get valid line for offset ' + 
        startingLine + ' numberOfLines: ' + numberOfLines
      ));
    }
    else {
      done(error, lines);
    }
  }
}

function checkLines(lines, done) {
  if (lines.length < 1 || lines.every(lineIsNoGood)) {
    done(new Error('Could not find valid lines.'));
  }
  else {
    done(null, lines);
  }
}

function lineIsNoGood(line) {
  return !line || line.length < 1 || !(line.match(/[A-Za-z]/));
}

function cleanLines(lines, done) {
  done(null, lines.map(cleanLine));
}

function cleanLine(line) {
  return line.replace('\\\'', '\'');
}

function joinLines(lines, done) {
  done(null, lines.join('\n'));
}

module.exports = shakesnippet;
