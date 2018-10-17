#!/usr/bin/env node
'use strict'

const mri = require('mri')

const pkg = require('./package.json')

const argv = mri(process.argv.slice(2), {
	boolean: [
		'help', 'h',
		'version', 'v',
		'json', 'j'
	]
})

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    location
    location --json
    location --comma

Options:
    --json   -j  Output data as JSON. Default: false
    --comma  -c  Output data in "lat, long" format. Default: false
\n`)
	process.exit()
}

if (argv.version || argv.v) {
	process.stdout.write(pkg.name + ' ' + pkg.version + '\n')
	process.exit(0)
}

const getLocation = require('@derhuerst/location')
const {inspect} = require('util')

getLocation((err, loc) => {
	if (err) {
		console.error(err)
		process.exitCode = 1
		return
	}

	if (argv.json || argv.j) {
		process.stdout.write(JSON.stringify(loc) + '\n')
		return
	}
	if (argv.comma || argv.c) {
		process.stdout.write([
			loc.latitude.toFixed(7),
			loc.longitude.toFixed(7)
		].join(', ') + '\n')
		return
	}

	let {latitude: lat, longitude: long, precision: prec} = loc
	lat = 'number' === typeof lat ? lat.toFixed(7) : util.inspect(lat)
	long = 'number' === typeof long ? long.toFixed(7) : util.inspect(long)
	prec = 'number' === typeof prec ? prec : util.inspect(prec)
	process.stdout.write([
		'latitude:  ' + lat,
		'longitude: ' + long,
		'precision: ' + prec
	].join('\n') + '\n')
})
