### ⚠️ big warn: this is a joke project ⚠️
if you're reading this because youve stumbled onto my github or whatever this is your warning that the following project is not real. i mean it works, like it does what this readme says but it's a joke and you're not meant to use it seriously. [kevin wilde](https://github.com/kevinwilde) and [brandon fujii](https://github.com/brandonfujii) and i made it for [badhacks](http://badhacks.party). it won "worst bad hack," whatever that means. idk. p.s. you might not think this project as a joke is funny. that's fine. you're probably right.

# Jet: Version Control of the Future
Jet is a new version control system built on top of Git, with the aim of creating hyper-human-readable versioning.

## How to install
Jet is available on npm. Install it globally to be able to use it from anywhere.
```
npm install -g jet-vcs
```

## How it works
Use `jet` wherever you would use the `git` commit. For example, to start a new project you can do:

```
jet init
touch README.md
jet add .
jet commit -m "initial commit"
```

The difference between Jet and Git comes when you commit your changes. Every time you make a change to a file, Jet automatically makes a backup of your files with a version number appended to the end.

```
- README.md
- README-0.md
```

After a few more commits, your file structure might look like this:

```
- README.md
- README-0.md
- README-1.md
- package.json
- package-0.json
- src/
    - index.js
    - index-0.js
    - index-1.js
    - index-2.js
```
