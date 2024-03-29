# V (Version) Package Manager for Node.js

[![Latest version](https://img.shields.io/npm/v/vpman)
 ![Dependency status](https://img.shields.io/librariesio/release/npm/vpman)
](https://www.npmjs.com/package/vpman)

Helps with development, installation and maintenance of VPM packages. Installs [vpman] and [newchanges] in [Node.js] environments.

## Installation

This package is usually installed globally, so that you can use the `vpman` executable from any directory. You can install it during the first usage with `npx` too:

```sh
$ npm i -g vpman
$ npx vpman ...
```

Make sure, that you use [Node.js] version 18 or newer.

## Usage

    vpman [options] <command> [parameters]

    Commands:
      init          generate a config file with defaults
      ls|list       list module dependencies from ./modules or ~/.vmodules
      link          link the current module to the global ~./vmodules directory
      unlink        remove the current module link from the global ~./vmodules
      version       prepare the current module for publishing a new version
                    (update changelog, bump version, commit and tag the change)
      publish       publish a new version prepared earlier by `vp version`
                    (push the change and tag, create a github release)
      release       perform both `vp version` and `vp publish`

    Options and parameters for list:
      -g|--global   inspect contents of ~./vmodules (default is ./[src/]modules)
      [<pkg names>] names of the package to print its version

    Parameters for link and unlink:
      [<pkg name>]  name of the package if guessing is not reliable

    Options for link and unlink:
      -f|--force    proceed even if the guessed package name was not reliable

    Parameters for version and publish:
      [<version>]   version if the changelog update is disabled
                    (also major, minor or patch for bumping the existing version)

    Options for version, publish and release:
      --no-changes        do not update the changelog
      --no-bump           do not bump the version in the package manifest
      --no-vlang          do not version and publish using v and v.mod
      --no-node           do not version and publish using npm and package.json
      --no-rust           do not version and publish using rust and Cargo.toml
      --no-commit         do not commit the changes during publishing
      --no-commit-skip-ci do not add [skip ci] to the commit with the changes
      --no-tag            do not tag the commit during publishing
      --no-tag-skip-ci    do not add [skip ci] to the commit with the tag
      --no-push           do not push the commit and tag during publishing
      --no-release        do not create a new github release
      --no-archives       do not upload platform archives automatically as assets
      --no-failure        do not fail in case of no version change or release
      --nc-args <args>    extra arguments for newchanges, enclosed in quotes
      -a|--assets <file>  files to upload as extra assets to the github release
      -b|--bump-files <file> extra files in which to bump the version
      -y|--yes            answer the push and reelase confirmations with "yes"
      -d|--dry-run        only print what would be done without doing it
      -v|--verbose        print the new changes on the console too

    Common options:
      -c|--config <name>  file name of path of the config file
      -V|--version        print the version of the executable and exits
      -h|--help           print the usage information and exits

    Examples:
      $ vpman link prantlf.cargs -f
      $ vpman unlink
      $ vpman publish -v'

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.  Add unit tests for any new or changed functionality. Lint and test your code using Grunt.

## License

Copyright (c) 2024 Ferdinand Prantl

Licensed under the MIT license.

[Conventional Commits]: https://www.conventionalcommits.org/
[vpman]: https://github.com/prantlf/vp
[newchanges]: https://github.com/prantlf/v-newchanges
[Node.js]: http://nodejs.org/
