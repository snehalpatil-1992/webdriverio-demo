---
# WebDriverIO and JavaScript Automation Framework Setup Guide
---

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Studio Code/Sublime/Brackets

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.

### How to write Test
* Add new spec under `test` folder
* Name the file as <testname>.e2e.js (e.g. login.e2e.js)
* Create page object under pages/ folder as <page-name>.page.js (e.g. login.page.js)

### How to Run Test
* Go to Project root directory and run command: `npm run gameui`
* If you want to run api tests then run command: `npm run user:api`
