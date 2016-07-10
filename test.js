import test from 'tapava';
import getPackageJsonFromGithub from './lib';

test('getPackageJsonFromGithub(), user/repo#ref', function * (t) {
  const packageJson = yield getPackageJsonFromGithub('kesla/node-snappy#v5.0.0');
  t.match(packageJson, {
    name: 'snappy',
    version: '5.0.0'
  });
});

test('cached, user/repo#ref', function * (t) {
  const cached = getPackageJsonFromGithub.cached();
  const packageJson = yield cached('kesla/node-snappy#v5.0.0');
  t.match(packageJson, {
    name: 'snappy',
    version: '5.0.0'
  });
});
