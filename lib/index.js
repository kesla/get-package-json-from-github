import npa from 'npm-package-arg';
import ghGot from 'gh-got';
import Cache from 'async-cache-promise';

const getDirect = directUrl => ghGot(directUrl, {json: true}).then(({body}) => body);
const setup = get => arg => {
  const parsed = npa(arg);
  if (!parsed || parsed.type !== 'hosted' || parsed.hosted.type !== 'github') {
    throw new Error('arg is not a valid github reference');
  }

  return getDirect(parsed.hosted.directUrl);
};

module.exports = setup(getDirect);
module.exports.cached = () => {
  const cache = new Cache({
    load: getDirect
  });

  return setup(directUrl => cache.get(directUrl));
};
