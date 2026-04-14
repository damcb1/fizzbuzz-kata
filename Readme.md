# CS - Package Manager - Javascript init

## Installation

Init package.json

```
npm init
```

Part 1 - Sass
Sass dependencies

```
npm install -D sass
```

Set Sass scripts in package.json

```
"sass": "sass ./src/sass/styles.scss ./src/css/styles.css",
"sass-w": "sass --watch ./src/sass/styles.scss ./src/css/styles.css"
```

Make some CSS change
Run sass

```
npm run sass
or
npm run sass-w
```

Part 2 - Vitest

Install vitest dependencies

```
npm install -D vitest
```

Set Vitest scripts in package.json
```
"test": "vitest run",
"test-w": "vitest",
"test-cover": "vitest run --coverage"
```

Create example test and run test

```
npm run test
npm run test-w
npm run test-cover
```

Install Vitest extension
-[Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

## Ex 01

Given a string of arbitrary length with any ascii characters. Write a function to determine whether
the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not
correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.