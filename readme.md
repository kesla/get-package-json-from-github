# get-package-json-from-github 

Get package.json from github

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install get-package-json-from-github --save
```

## Usage

```js
import getPackageJsonFromGithub from 'get-package-json-from-github';

getPackageJsonFromGithub('git+https://github.com/kesla/get-package-json-from-github.git')
  .then(packageJson => {
    console.log('packageJson', packageJson);
  });

```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [babel-tape-runner](https://github.com/wavded/babel-tape-runner): Babel + Tape for running your ES Next tests
- [gh-got](https://github.com/sindresorhus/gh-got): Convenience wrapper for `got` to interact with the GitHub API
- [npm-package-arg](https://github.com/npm/npm-package-arg): Parse the things that can be arguments to `npm install`
- [semistandard](https://github.com/Flet/semistandard): All the goodness of `feross/standard` with semicolons sprinkled on top.
- [snazzy](https://github.com/feross/snazzy): Format JavaScript Standard Style as Stylish (i.e. snazzy) output
- [tapava](https://github.com/kesla/tapava): the syntax of ava, run through tape

## Dev Dependencies

- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [babel-preset-es2015-node4](https://github.com/jbach/babel-preset-es2015-node4): Babel preset to make node@4 ES2015 compatible.
- [babel-tape-runner](https://github.com/wavded/babel-tape-runner): Babel + Tape for running your ES Next tests
- [package-json-to-readme](https://github.com/zeke/package-json-to-readme): Generate a README.md from package.json contents
- [semistandard](https://github.com/Flet/semistandard): All the goodness of `feross/standard` with semicolons sprinkled on top.
- [snazzy](https://github.com/feross/snazzy): Format JavaScript Standard Style as Stylish (i.e. snazzy) output
- [tapava](https://github.com/kesla/tapava): the syntax of ava, run through tape


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
