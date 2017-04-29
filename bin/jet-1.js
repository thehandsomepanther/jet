#!/usr/bin/env node
let fs = require('fs-extra')
let args = process.argv.slice(2)
let spawn = require('child_process').spawn

if (args[0] == 'commit') {
    diff(args)
} else {
    var everythingElse = spawn('git', args)
    everythingElse.stdout.on('data', (data) => {
      console.log(`${data}`)
    })

    everythingElse.stderr.on('data', (data) => {
      console.log(`${data}`)
    })
}

function diff(args) {
    let status = spawn('git', ['status', '-s'])
    status.stdout.on('data', (data) => {
        versionControl0(data)
        let add = spawn('git', ['add', '.'])

        add.stdout.on('close', (data) => {
            var commit = spawn('git', args)
            console.log(args);
            commit.stdout.on('data', (data) => {
              console.log(`${data}`)
            })

            commit.stderr.on('data', (data) => {
              console.log(`${data}`)
            })
        })
    })

    status.stderr.on('data', (data) => {
      console.log(`${data}`)
    })
}

function versionControl0(data) {
    let files = `${data}`.trim().split('\n')
    for (file of files) {
        let splitter = file.split(' ')
        if (splitter[0] != 'D') {
            versionControl1(splitter[splitter.length - 1])
        }
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
