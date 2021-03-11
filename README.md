These are a series of JavaScript Quizs. They start simple and easy but get more complex.

There will eventually be a suggested order of completion, but at this time since we are still in the process of creating more quizs the order is subject to change and has not yet been specified. However, there are a few quizs that make a good "starting point". Feel free to at least start with these:

1. Hello World
2. Repeat String
3. Reverse String

## How To Use These Tests

Before you start you should have a few things installed on your machine:
1. NPM. To check if you have NPM installed, type `npm --version` in your terminal. If you get back `Command 'npm' not found, but can be installed with:`, do NOT follow the instructions in the terminal to install with `apt-get`. (This causes permission issues.) Instead, install Node with NVM by following the instructions [here](https://github.com/TheOdinProject/curriculum/blob/master/foundations/installations/installing_node.md).
2. Jasmine. Jasmine is a testing framework for JavaScript. Type `jasmine -v` to check for it. If you need to install it, type `npm install -g jasmine` to do so.
3. A copy of this repository. Copies of repositories on your machine are called clones. If you need help cloning, you can learn how [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

Each quiz includes 3 files: a markdown file with a description of the task, an empty (or mostly empty) JavaScript file, and a set of tests. To complete an quiz, you'll need to go to the quiz directory with `cd quizName` in the terminal and run `jasmine quizName.spec.js`. This should run the test file and show you the output. When you first run a quiz, it will fail. This is by design! You must open the quiz file and write the code needed to get the test to pass. Some of the quizs have test conditions defined in their spec file that are defined as 'xit' compared to 'it'. This is purposeful. After you pass your first 'it', you will change the next 'xit' to an 'it' and test your code again. You'll do this until all conditions are satisfied.

The first quiz, `helloWorld`, will walk you through the process in-depth.
