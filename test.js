import test from 'tapava';
import getPackageJsonFromGithub from './lib';
import npa from 'npm-package-arg';

test('getPackageJsonFromGithub(), user/repo#ref', function * (t) {
  const packageJson = yield getPackageJsonFromGithub('kesla/node-snappy#v5.0.0');
  t.match(packageJson, {
    name: 'snappy',
    version: '5.0.0',
    _requested: {
      raw: 'kesla/node-snappy#v5.0.0',
      type: 'hosted'
    }
  });
});

test('getPackageJsonFromGithub(), user/repo#ref from npa object', function * (t) {
  const packageJson = yield getPackageJsonFromGithub(npa('kesla/node-snappy#v5.0.0'));
  t.match(packageJson, {
    name: 'snappy',
    version: '5.0.0',
    _requested: {
      raw: 'kesla/node-snappy#v5.0.0',
      type: 'hosted'
    }
  });
});

test('cached, user/repo#ref', function * (t) {
  const cached = getPackageJsonFromGithub.cached();
  const packageJson = yield cached('kesla/node-snappy#v5.0.0');
  t.match(packageJson, {
    name: 'snappy',
    version: '5.0.0',
    _requested: {
      raw: 'kesla/node-snappy#v5.0.0',
      type: 'hosted'
    }
  });
});
