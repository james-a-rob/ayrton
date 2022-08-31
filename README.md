## Description
Steptacular is a gradual automation tool built with TypeScript.


## The Problem
Most developers have a huge list of boring manual tasks they want to automate but never find the time. Why? 

The problem is that most automation is harder than it first appears and usually will involve a manual step along the way.

A classic example of an automation task that remains on the todo list is onboarding a new developer into the team. This usually requires:

 - Access to Github
 - Access to Slack
 - Access to internal tool X
 - Access to internal tool Y
 - Sending the new employee a set of helpful links
 - Setting up a few kickoff meetings

Some of these steps are easy to automate, some are hard and some might be imposible. As developers we think about automating this but then usually fallback to a runbook style document in one of the companies many documentation tools. 

Steptacular uses the idea of [gradual automation](https://blog.danslimmon.com/2019/07/15/do-nothing-scripting-the-key-to-gradual-automation/). All automation starts as a set steps that just prompt the user with an instruction. This basic automation is easy to write and is already an improvment from a runbook style document becasue it ...

## Installation
```
npm install -g steptacular
```

## Usage
``` javascript
import steptacular from 'steptacular';

steptacular([
    {
        name: 'Give access to Github',
        run: ({utils, data, next}) => {
            const prompt = { utils };
            const email = prompt('Enter new employee email address then hit enter: ');

            prompt(`Visit gtihub.com/company/users and add new user ${email}`);
            next({email});
        }
    },
    {
        name: 'Give access to Slack',
        run: ({data, next}) => {
        }
    }
])
```

