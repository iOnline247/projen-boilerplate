import { ProjenProjectFromGit } from '@mrgrain/projen-from-git';
import { javascript, release } from 'projen';

const project = new ProjenProjectFromGit({
  author: 'Matthew Bramer',
  authorAddress: 'mbramer@github.com',
  name: 'boilerplate',
  repositoryUrl: 'https://github.com/iOnline247/projen-boilerplate',
  defaultReleaseBranch: 'deploy',
  projenrcTs: true,
  github: false,
  githubOptions: {
    mergify: false,
  },
  docgen: false,
  packageManager: javascript.NodePackageManager.NPM,
  releaseTrigger: release.ReleaseTrigger.manual(),
  releaseToNpm: false,
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      singleQuote: true,
      trailingComma: javascript.TrailingComma.ALL,
    },
  },
  // deps: ['aws-cdk-lib@2.40.0', 'constructs@10.1.94'],
  devDeps: ['@mrgrain/projen-from-git@mrgrain/projen-from-git', 'typescript', 'projen@*'],

  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();
