var test = require('tape');
var shakesnippet = require('../index');
var callNextTick = require('call-next-tick');

test('Basic test', function basicTest(t) {
  var expectedSnippet = 
    'EARL OF NORTHUMBERLAND, Henry Percy, Hotspur\'s father\n' +
    'EARL OF WORCESTER, Thomas Percy, Hotspur\'s uncle\n' +
    'EDMUND MORTIMER, earl of March\n' +
    'LADY MORTIMER (also called "the Welsh lady")\n' +
    'OWEN GLENDOWER, a Welsh lord, father of Lady Mortimer\n' +
    'DOUGLAS (Archibald, earl of Douglas)\n' +
    'ARCHBISHOP (Richard Scroop, archbishop of York)\n' +
    'SIR MICHAEL, a priest or knight associated with the archbishop\n' +
    'SIR RICHARD VERNON, an English knight\n' +
    'SIR JOHN FALSTAFF';

  var checkedLineCount = 0;
  var nextIndex = 20;

  function mockPickStartingLineIndex(totalLineCount, done) {
    var index = nextIndex;
    nextIndex += 1;
    callNextTick(done, null, index);
  }

  shakesnippet(
    {
      numberOfLines: 10,
      pickStartingLineIndex: mockPickStartingLineIndex
    },
    checkLines
  );

  function checkLines(error, snippet) {
    t.ok(!error, 'No error while getting snippet.');
    t.equal(snippet, expectedSnippet, 'Correct snippet is retrieved.');
    t.end();
  }
});
