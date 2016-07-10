import getPackageJsonFromGithub from 'get-package-json-from-github';

getPackageJsonFromGithub('git+https://github.com/kesla/get-package-json-from-github.git')
  .then(packageJson => {
    console.log('packageJson', packageJson);
  });
