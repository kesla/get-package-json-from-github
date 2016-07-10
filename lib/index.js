import npa from 'npm-package-arg';
import ghGot from 'gh-got';

module.exports = arg => {
  const parsed = npa(arg);
  if (!parsed || parsed.type !== 'hosted' || parsed.hosted.type !== 'github') {
    throw new Error('arg is not a valid github reference');
  }

  return ghGot(parsed.hosted.directUrl, {json: true}).then(({body}) => body);
};
