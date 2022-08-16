# Description
Automation any workflow in less time than it takes to write an email.

No need to write tones of code just write a few plain english instructions.

(example gif. Typing in fun automation and running in cli)


# The Problem
All developers have a huge todo list of tasks they want to automate but never find the time. Why?

The problem is that, even for experianced devs, writing automation takes a long time. Setting up a package, installing and using sdks, trying to remember cron syntax, deployment etc.

Ayrton is a better way. You just write automation as a set of simple english instuctions and Ayrton takes care of the rest.

For example to send an SMS in JavaScript you would have to write:
``` javascript
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const message = await client.messages
            .create({
                body: message,
                from: from,
                to: to
            });

```

With ayrton this becomes simply:
`` send sms from "+528273" to "+928757" with message "hey from ayrton" ``


## Features
- Write workflow automations in plain text
- Many built in utilities
- Easily extended with JavaScript

## Examples Automations

### Hacker News alerts
every "60" minutes
get top "20" HN stories 
if {title} contains "automation"
send email with {title} and {url}

### Tweeting new products
When new item added to shopify store
if {product} is "discounted" 
publish tweet "New product added to sale. {description} {price}"

## Installation
``npm install -g ayrton``

## Usage
``ayrton --workflows ~/me/workflows``

## Extending
``ayrton --workflows ~/me/workflows --custom-steps ~/me/custom-steps``
