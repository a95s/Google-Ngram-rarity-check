# Google Ngram words rarity highlighter
## For recruiters
A NodeJS-based parser of HTML responses from [Google Ngram][1].  
Asynchronous, recursive, with error handling.  
The code is not polished as it was developed only up until the point where it could do the stated task.  
The site parsing part is taken [from here][2].  
It took me 220 minutes to finish the stated task, namely to get the highlighted list of 3000 words.  

### Things that I learned from this project:
1. Hands-on experience with error handling and async environment.
2. JS has no proper in-built `sleep()` function.
3. Saving intermediate results is important. I could've gotten words without error handling and recursion but in much less time.


## For users
### The task
I have many English words to learn, but some of them are left from GRE times, and GRE words are almost never used, so I want to separate them from more frequent words.

After realizing that I'll have to manually check 3000 words in Google Ngram, I started to search for an automated solution.  
As I understood, there's no API for Google Ngram, the first thing I've found was [this][2] article with HTML parsing.  
Easy enough, but aside from limited batch size (12 words), it turned out that the Ngram site has a pretty low limit of around 30 requests per minute. 

### Specification
Input: a file with words, one word per line.  
Output: a file with words, one word per line. Words which are rarer than 0.1e-6 are marked with ">".

### Usage
1. To use the program, you need to have NodeJS with `node-fetch` package installed.
2. Change the name of an input file for the `data` variable in `parser.js`. The default one is `eng-trimmed.txt`.
3. You need to launch `parser.js` when you're ready. After that, the program will show the number of batches left and error logs in case of timeouts.
4. The output file `output.txt` will be placed in the same folder as `parser.js`.

This is the actual version that I used to get the final list of words. It has some parts that can be improved (mentioned in the Issues).

[1]: https://books.google.com/ngrams
[2]: https://jameshfisher.com/2018/11/25/google-ngram-api/
