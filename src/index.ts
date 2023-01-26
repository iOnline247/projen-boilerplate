import { awscdk, javascript, release } from 'projen';

const cdkVersion = '2.60.0';

export interface PanlBoilerplateRepoProps extends awscdk.AwsCdkTypeScriptAppOptions {}

export class PanlBoilerplateApp extends awscdk.AwsCdkTypeScriptApp {
  constructor(options: PanlBoilerplateRepoProps) {
    super({
      authorName: 'Matthew Bramer',
      authorEmail: 'mbramer@pansophiclearning.com',
      packageManager: javascript.NodePackageManager.NPM,
      github: false,
      githubOptions: {
        mergify: false,
      },
      readme: {
        filename: 'README.md',
        contents: '# replace this',
      },
      ...options,
      // any options down here would be forced and not changeable
      cdkVersion,
      releaseTrigger: release.ReleaseTrigger.manual(),
      projenrcTs: true,
      releaseToNpm: false,
      licensed: false,
      prettier: true,
      prettierOptions: {
        settings: {
          printWidth: 120,
          singleQuote: true,
          trailingComma: javascript.TrailingComma.ALL,
        },
      },
    });
    // deps are better added like this
    this.addDeps(`aws-cdk-lib@${cdkVersion}`, 'constructs@10.1.94');
  }
}
