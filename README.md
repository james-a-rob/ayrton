## Description
Steptacular is a gradual automation tool built with TypeScript.

## The Problem
All jobs have manual processes that are hard to automate. Usually for one or both of these reasons:

1. Some steps may require human input.
2. The cost of automating some part of the process might be so high it does not make sense.

Usually when automation seems hard we settle for documenting the steps in some sort of doc system (Confluence, Google Docs, Notion, Slack 😉 etc) and running them manually each time.

Some issues with this approach:

- It’s easy to skip over steps accidentally in a document.
- Documents are static. Swapping out the relevant info each time requires error prone copy and pasting.
- If you automate some steps then you have to context switch between a document and a collection of automation scripts.
- Documents can be too easily changed. Important steps can be accidentally lost forever.

## The Solution
[Gradual automation](https://blog.danslimmon.com/2019/07/15/do-nothing-scripting-the-key-to-gradual-automation/) works by defining a process as a series of steps in code. Each step includes helpful information to get the job done. Steps can be stepped through in order via helpful interactive prompts in the command line.

Over time the steps where automation makes sense can be automated. Hard to automate steps can remain manual. The code can live in source control just like your other projects.

gif

## Installation
```
npm install steptacular
```

## Features
- Pretty display in terminal
- Dry run mode
- Library of helpful utilities

## Basic Usage
Simplifed example for onboarding a new developer into the team. 

``` javascript
import { run } from 'steptacular';

run([
    {
        name: 'Give access to Github',
        run: ({utils: { prompt }, data, next}) => {
            const email = prompt('Enter new employee email address then hit enter: ');
            console.log(`Go to Github and add new user ${email}`);
            data.setData({email})
            prompt('Press enter to continue: ');
            next();
        }
    },
    {
        name: 'Give access to Slack',
        run: ({data, next}) => {
            console.log(`Go to Slack and add new user ${data.value.email}`);
            prompt('Press enter to continue: ');
            next();
        }
    },
    {
        name: 'Setup kickoff meetings',
        run: ({data, next}) => {
            console.log('Set up manager 1-1 meeting');
            console.log('Set up meeting with tech lead. This is to go through codebase.');
            console.log('Setup meeting with office manage');
            prompt('Press enter to finish: ');
            next();
        }
    }
]);
```

## Samples
See more advanced uses of Steptacular in the samples directory.

 - Basic sample that uses both manual and automated steps
 - How I publish this library using Steptacular
 - Using Bash commands 
  
  
## API Reference


