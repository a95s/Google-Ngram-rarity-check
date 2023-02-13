# Rarity highlighter for words based on Google Ngram data
## For recruiters
You look at a parser of HTML responses from [Google Ngram][1], made on NodeJS.  
It's asynchronous, recursive, and with error handling.  
The site parsing is taken [from here][2].  

### Things that I learned from this project:
1. Hands-on experience with error handling and async environment.
2. JS has no proper in-built `sleep()` function.
3. Saving intermediate results is important.


## For users
### The task
If you have a list of English words to learn, but there are many rare ones, so you want to separate them from more frequent words.

Checking thousands of words in Google Ngram one-by-one is boring. The program here automates the process.

### Specification
Input: a file of words, one word per line.  
Output: a file of words, one word per line. Words which are rarer than 0.1e-6 are marked with ">".  
I also provided the examples of input and output - `eng-trimmed.txt` and `output.txt`.

### Usage
1. To use the program, you need to have NodeJS with the `node-fetch` package installed.
2. Change the name of an input file for the `data` variable in `parser.js`. The default one is `eng-trimmed.txt`.
3. You need to launch `parser.js` when you're ready. After that, the program will show the number of batches left and error logs in case of timeouts.
4. The output file `output.txt` will be placed in the same folder as `parser.js`.

[1]: https://books.google.com/ngrams
[2]: https://jameshfisher.com/2018/11/25/google-ngram-api/
