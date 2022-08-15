# Description
Build automation in less time than it takes to write an email.

If you know English you can start automating.

## Features

- Write automation in plain text
- Many built in utilities
- Easily extended with JavaScript

## Examples Automations

### Hacker News alerts
every "60" minutes
get top "20" HN stories 
if {title} contains "automation"
send sms to "07884234571" with {title} and {url}

### Hacker News alerts
When new product added to shopify store
if {product} discounted 
publish tweet "New product add to sale. {description} {price}"

## Installation
``npm install -g ayrton``

## Usage
``ayrton --workflows ~/me/cool-workflows``

## Extending
``ayrton --workflows ~/me/cool-workflows --extentions ~/me/cool-extentions``
