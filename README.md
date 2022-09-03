## Description
Steptacular is a gradual automation tool built with TypeScript.


## The Problem
All jobs have manual processes that are hard to automate. Usually for one or both of these reasons.

1. Some steps may require human intervention.
2. The cost of automating some part of the process might be so high it does not make sense.

Usually when automation seems hard we settle for documenting the steps in some sort of doc system (Confluence, Google Docs, Notion, Slack 😉 etc) and running them manually each time.

Some issues with this approach:

- If you automate some steps then you have to context switch between a document and a collection of automation scripts.
- Documents are static. Swapping out the relevant info each time requires error prone copy and pasting.
- It’s easy to skip over steps accidentally in a document.
- Documents can be changed permanently and important steps accidentally lost forever.

## The Solution
[Gradual automation](https://blog.danslimmon.com/2019/07/15/do-nothing-scripting-the-key-to-gradual-automation/) works by defining a process as a series of steps in code. Each step includes helpful information to get the job done. Steps can be stepped through in order via helpful interactive prompts in the command line.

Over time the steps where automation makes sense can be automated. Hard to automate steps can remain manual. The code can live in source control just like your other projects.


## Installation
```
npm install steptacular
```

## Basic Usage
Onboarding a new developer into the team
``` javascript
import { run } from 'steptacular';

run([
    {
        name: 'Give access to Github',
        run: ({utils: { prompt }, data, next}) => {
            const email = prompt('Enter new employee email address then hit enter: ');

            prompt(`Go to Github and add new user ${email}`);
            next({email});
        }
    },
    {
        name: 'Give access to Slack',
        run: ({data, next}) => {
            prompt(`Go to Slack and add new user ${data.email}`);

        }
    },
    {
        name: 'Setup kickoff meeting',
        run: ({data, next}) => {
            // agenda with username
        }
    }
])
```

