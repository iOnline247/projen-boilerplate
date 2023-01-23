import { awscdk, javascript } from 'projen';

export interface PanlBoilerplateRepoProps extends awscdk.AwsCdkTypeScriptAppOptions {}

class PanlBoilerplateApp extends awscdk.AwsCdkTypeScriptApp {
  constructor(options: PanlBoilerplateRepoProps) {
    super(options);
  }
}

const cdkVersion = '2.60.0';
const project = new PanlBoilerplateApp({
  authorName: 'Matthew Bramer',
  authorEmail: 'mbramer@pansophiclearning.com',
  name: 'boilerplate',
  packageManager: javascript.NodePackageManager.NPM,
  defaultReleaseBranch: 'deploy',
  cdkVersion,
  readme: {
    filename: 'README.md',
    contents: '# replace this',
  },
  deps: [`aws-cdk-lib@${cdkVersion}`, 'constructs@10.1.94'],
  devDeps: ['@mrgrain/projen-from-git@mrgrain/projen-from-git', 'typescript', 'projen@latest'],

  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();
