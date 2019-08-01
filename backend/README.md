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
replace the "PASSWORD" in 
```
const mongodb_pass = "PASSWORD"
```
with the password shared privately for GIFTCODE_ADMIN

run the below command only once to untrack src/config.js
```
git update-index --assume-unchanged src/config.js
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
