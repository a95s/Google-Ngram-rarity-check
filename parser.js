/*
    Could be sub-arrays instead of .shift() but it would take more programming time than it will save.
*/

const ngram = require('./ngram.js');
const fs = require('fs');
const batchSize = 12;

data = fs.readFileSync('./eng-trimmed.txt', 'utf8');
array = data.split('\n')
var i;
var batch = [];
var markedData = [];
var batchCounter = 1;
var batchesOverall = array.length / batchSize;

async function main() 
{
    while (array.length > 11)
    {
        console.log("Batch %s out of %s", batchCounter, Math.floor(batchesOverall));
        batchCounter++;
        batch = [];
        
        for (i = 0; i < batchSize; i++) 
        {
            batch.push(array.shift());
        }
        
        batch = batch.join(',');
        
        await ngram.fetchNgram([batch]).then
        (
            results => 
            {
                
                results.forEach(item => 
                {
                    if (item.timeseries[0] > 1e-6) 
                    { 
                        markedData.push(item.ngram)
                    }
                    else
                    {
                        markedData.push(">" + item.ngram)
                    }
                })
            }    
        )
    }
    
    await ngram.fetchNgram([array.join(',')]).then
        (
            results => 
            {
                results.forEach(item => 
                {
                    if (item.timeseries[0] > 1e-6) 
                    { 
                        markedData.push(item.ngram)
                    }
                    else
                    {
                        markedData.push(">" + item.ngram)
                    }
                })
            }    
        )
    
    fs.writeFile('output.txt',markedData.join('\n'),(err) => {})
}

main();