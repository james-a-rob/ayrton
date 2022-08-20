# Description
Automate any workflow in less time than it takes to write an email.

No need to write tones of code, just write simple instructions in plain english. 

I like to think of Ayrton as a no-code tool built for coders.

(example gif. Typing in fun automation and running in cli)


# The Problem
All developers have a huge todo list of tasks they want to automate but never find the time. Why?

The problem is that, even for experienced devs, writing automation takes a long time. Setting up a package, installing and using sdks, trying to remember cron syntax, error handling, deployment etc.

Ayrton is a better way. You just write automation as a set of simple english instuctions and this library takes care of the rest.

❌ For example, one common action in many automations is sending an SMS. In JavaScript you would have to write:
``` javascript
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const message = 'hey from ayrton';
const from = '+528273';
const to = '+928757';
try{
    const message = await client.messages
                .create({
                    body: message,
                    from: from,
                    to: to
                });
}catch(e){
    console.log('handle error')
}


```

✔️ With ayrton this becomes:

``` 
send sms from {+528273} to {+928757} with message {hey from ayrton} 
```

Use one of the many [built in automation steps](built-in-steps.md) (known in Ayrton simply as a "step") like the SMS example above or build your own in TypeScript or JavaScript.


## Features
- Write workflow automations in plain text
- Many built in utilities
- Easily extended with JavaScript

## Examples Automations

### Hacker News alerts
``` 
every {60} minutes
get top {20} HN stories 
if {$title} contains {automation}
send email with {new automation story on HN} and {$title} and {$url}
```

### Tweeting new products
```
When new item added to shopify store
if {$product} is "discounted" 
publish tweet {New product added to sale} {$description} {$price}
```

## Installation
```
npm install -g ayrton
```

## Usage
``` javascript
import ayrton from 'ayrton';

ayrton.start('workflow/directory', 'custom-steps/directory');
ayrton.on('error', (error)=>{
    console.log(error);
});
```

## CLI Usage (TODO)
```
ayrton --workflows ~/me/workflows
```

## CLI run with custom steps (TODO)
```
ayrton --workflows ~/me/workflows --custom-steps ~/me/custom-steps
```
