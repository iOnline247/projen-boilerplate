import { awscdk, javascript, release } from 'projen';

const cdkVersion = '2.60.0';

export interface PanlBoilerplateRepoProps extends awscdk.AwsCdkTypeScriptAppOptions {}

// export class PanlBoilerplateApp extends javascript.NodeProject {
export class PanlBoilerplateApp extends awscdk.AwsCdkTypeScriptApp {
  constructor(options: PanlBoilerplateRepoProps) {
    super({
      authorName: 'Matthew Bramer',
      authorEmail: 'mbramer@pansophiclearning.com',
      packageManager: javascript.NodePackageManager.NPM,
      readme: {
        filename: 'README.md',
        contents: '# did this change?',
      },
      ...options,
      // any options down here would be forced and not changeable
      cdkVersion,
      github: false,
      githubOptions: {
        mergify: false,
      },
      releaseTrigger: release.ReleaseTrigger.manual(),
      projenrcTs: true,
      releaseToNpm: false,
      eslint: true,
      eslintOptions: {
        dirs: ['./src', './infra'],
        prettier: true,
      },
      prettier: true,
      prettierOptions: {
        settings: {
          printWidth: 120,
          singleQuote: true,
          trailingComma: javascript.TrailingComma.ALL,
        },
      },
      tsconfig: {
        include: ['./src/**/*.js', './src/**/*.ts', './infra/**/*.ts'],
        compilerOptions: {
          allowJs: true,
          experimentalDecorators: false,
          inlineSourceMap: !!options?.tsconfig?.compilerOptions?.inlineSourceMap,
          inlineSources: !!options?.tsconfig?.compilerOptions?.inlineSources,
        },
      },
    });
    // deps are better added like this
    this.addDevDeps('projen@*');
    // this.addDevDeps(`aws-cdk-lib@${cdkVersion}`, 'constructs@10.1.94', 'projen@*');
    // this.addDeps();
  }
}
