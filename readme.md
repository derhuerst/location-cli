# location-cli

**Command line utility to get the current location.**

[![npm version](https://img.shields.io/npm/v/location-cli.svg)](https://www.npmjs.com/package/location-cli)
[![build status](https://img.shields.io/travis/derhuerst/location-cli.svg)](https://travis-ci.org/derhuerst/location-cli)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/location-cli.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install -g location-cli
```


## Usage

```shell
location
# latitude:  52.12345
# longitude: 13.12345
# precision: 65

location --json
# {"latitude": 52.12345, "longitude": 13.12345, "precision": 65, "native": true}

location --comma
# 52.12345, 13.12345
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/location-cli/issues).
