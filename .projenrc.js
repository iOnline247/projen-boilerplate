const { awscdk, javascript, release } = require('projen');

class PanlBoilerplateRepo extends awscdk.AwsCdkTypeScriptApp {
  constructor(options) {
    super(options);
  }
}

const project = new PanlBoilerplateRepo({
  authorEmail: 'mbramer@pansophiclearning.com',
  authorName: 'Matthew Bramer',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'boilerplate',
  github: false,
  releaseTrigger: release.ReleaseTrigger.manual(),
  repository: 'https://git-codecommit.us-east-1.amazonaws.com/v1/repos/boilerplate',
  packageManager: javascript.NodePackageManager.NPM,
  deps: ['projen'], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();
