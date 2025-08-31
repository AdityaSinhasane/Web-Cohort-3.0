// import chalk from 'chalk';  //moden import syntax

// console.log(chalk.blue('Hello, world!'));
// console.log(chalk.red.bold('This is an error message.'));
// console.log(chalk.green.underline('This is a success message.'));


// const path = require('path');  

//console.log(__dirname);  // Current directory
// console.log(__dirname + "/../../index.js"+ "/projects" + '/index.js');  // Join current directory with 'index.js'.It will work like concatenation but not recommended.

// console.log(path.join("c:/Users/adity/Desktop/Web-Cohort-3/Week-4", "../../index.js", "/projects", 'index.js'));  // Join current directory with 'index.js'



const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('File related CLI')
  .description('CLI to do file based tasks')
  .version('0.8.0');

// count_words command
const countWords = program.command('count_words')
  .description('Count the number of words in a file');

countWords
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let words = data.trim().split(/\s+/).length;
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

// count_sentences command
const countSentences = program.command('count_sentences')
  .description('Count the number of sentences in a file');

countSentences
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let sentences = data.split('\n').filter(line => line.trim().length > 0).length;
        console.log(`There are ${sentences} sentences in ${file}`);
      }
    });
  });

program.parse();
