## Jet: Version Control of the Future
Jet is a new version control system built on top of Git, with the aim of creating hyper-human-readable versioning.

### How it works
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
