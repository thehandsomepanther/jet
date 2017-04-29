#!/usr/bin/env node
let fs = require('fs-extra')
let args = process.argv.slice(2)
let spawn = require('child_process').spawn

if (args[0] == 'commit') {
    diff(args)
}

function diff(args) {
    let diff = spawn('git', ['status', '-s'])
    diff.stdout.on('data', versionControl0)

    diff.stderr.on('data', (data) => {
      console.log(`${data}`)
    })
}

function versionControl0(data) {
    let files = `${data}`.trim().split('\n')
    for (file of files) {
        versionControl1(file)
    }
}

function versionControl1(f) {
    let largestVersion = 0
    let re = /(.*)(\..*)$/
    let matches = f.match(re)
    while (fs.pathExistsSync(`${matches[1]}-${largestVersion}${matches[2]}`)) {
        largestVersion++
    }

    fs.copySync(f, `${matches[1]}-${largestVersion}${matches[2]}`)
}

var commit = spawn('git', args)
commit.stdout.on('data', (data) => {
  console.log(`${data}`)
})

commit.stderr.on('data', (data) => {
  console.log(`${data}`)
})
