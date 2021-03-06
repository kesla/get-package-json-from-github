import getPackageJsonFromGithub from 'get-package-json-from-github';

getPackageJsonFromGithub('git+https://github.com/kesla/get-package-json-from-github.git')
  .then(packageJson => {
    console.log('packageJson', packageJson);
  });

// can also load a caching version

const cached = getPackageJsonFromGithub.cached();

cached('git+https://github.com/kesla/get-package-json-from-github.git')
  .then(packageJson => {
    console.log('packageJson', packageJson);
  });
