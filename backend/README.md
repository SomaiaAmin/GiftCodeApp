# GiftCode
Project for SEBA course 2019
## Prerequisites

Both for the back end and front end application check

* nodejs [official website](https://nodejs.org/en/) - nodejs includes [npm](https://www.npmjs.com/) (node package manager)


## Setup (before first run)

Go to your project root folder via command line
```
cd path/to/workspace/GiftCode
```

**Install node dependencies**

```
npm install
```

**Set up your database**

##YOU ONLY NEED TO THIS ONCE!! NEVER PUSH config.js after changing the password!!**

in config.js file
replace the "USERNAME" and "PASSWORD" in 
```
const mongodb_username = "USERNAME"
const mongodb_pass = "PASSWORD"
```
with the username and password shared privately

run the below command only once to untrack config.js
```
git update-index --assume-unchanged config.js
```

## Start the project

**Development environment**
```bash
npm run devstart
```

**Production environment**
```bash
npm start
```
