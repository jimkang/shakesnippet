var shakesnippet = require('../index');

shakesnippet(
  {
    numberOfLines: 20
  },
  logSnippet
);

function logSnippet(error, snippet) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(snippet);
  }
}
