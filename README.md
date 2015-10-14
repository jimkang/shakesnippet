shakesnippet
==================

Provides a randomly chosen Shakespeare excerpt.

Shakespeare text is from the [Folger Shakespeare Library](http://www.folgerdigitaltexts.org/). See [License](#license) for more details.

Installation
------------

    npm install shakesnippet

Usage
-----

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

Output:

    CORIOLANUS. I have deserv'd no better entertainment
    In being Coriolanus.

    Re-enter second SERVINGMAN

    SECOND SERVANT. Whence are you, sir? Has the porter his eyes in his
    head that he gives entrance to such companions? Pray get you out.
    CORIOLANUS. Away!
    SECOND SERVANT. Away? Get you away.
    CORIOLANUS. Now th' art troublesome.
    SECOND SERVANT. Are you so brave? I'll have you talk'd with anon.

    Enter a third SERVINGMAN. The first meets him

    THIRD SERVANT. What fellow's this?
    FIRST SERVANT. A strange one as ever I look'd on. I cannot get him
    out o' th' house. Prithee call my master to him.
    THIRD SERVANT. What have you to do here, fellow? Pray you avoid the
    house.
    CORIOLANUS. Let me but stand- I will not hurt your hearth.

If you pass no `numberOfLines` or `null` or `undefined` for the opts parameter, it will randomly pick between 1 and 4 lines.

You can also try running the module from within the project by running `make try`.

Tests
-----

Run tests with `make test`.

License
-------

The text of the complete works of Shakespeare is from Folger Digital Texts under a [Creative Commons Attribution-NonCommercial 3.0 Unported license](http://www.folgerdigitaltexts.org/?chapter=0&?target=terms).

Text is as downloaded from Folger Digital Texts, except that the files for individual plays and poems were concatenated into one file, and transcription credits consolidated at the top of that file.

The code is licensed under the MIT License.

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
