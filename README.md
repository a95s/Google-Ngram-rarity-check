# Rarity highlighter for Google Ngrams
You have a list of many English words, but you want to learn only the more frequent ones?  
This parser solves that problem for you. It parses HTML responses from [Google Ngram][1]. It's asynchronous, recursive, and with error handling. The site-parsing is taken [from here][2].

### Specification
Input: a txt file of words, one word per line.  
Output: a txt file of words, one word per line. Words which are rarer than 0.1e-6 are marked with ">".  
You can find the examples of input and output in `eng-trimmed.txt` and `output.txt`.

### Usage
1. You need to have NodeJS with the `node-fetch` package installed.
2. Change the name of an input file for the `data` variable in `parser.js`. The default one is `eng-trimmed.txt`.
3. Launch `parser.js` to start. The program will show the number of batches left and error logs in case of timeouts.
4. The output file `output.txt` is placed in the same folder as `parser.js`.

[1]: https://books.google.com/ngrams
[2]: https://jameshfisher.com/2018/11/25/google-ngram-api/
