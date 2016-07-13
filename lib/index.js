import npa from 'npm-package-arg';
import ghGot from 'gh-got';
import Cache from 'async-cache-promise';
import {set} from 'immutable-object-methods';

const getDirect = directUrl => ghGot(directUrl, {json: true}).then(({body}) => body);
const setup = get => arg => {
  const _requested = npa(arg);
  if (!_requested || _requested.type !== 'hosted' || _requested.hosted.type !== 'github') {
    throw new Error('arg is not a valid github reference');
  }

  return getDirect(_requested.hosted.directUrl)
    .then(pkg => set(pkg, '_requested', _requested));
};

module.exports = setup(getDirect);
module.exports.cached = () => {
  const cache = new Cache({
    load: getDirect
  });

  return setup(directUrl => cache.get(directUrl));
};
