import { ProjenProjectFromGit } from '@mrgrain/projen-from-git';

const project = new ProjenProjectFromGit({
  author: 'Matthew Bramer',
  authorAddress: 'mbramer@pansophiclearning.com',
  defaultReleaseBranch: 'main',
  devDeps: ['@mrgrain/projen-from-git@mrgrain/projen-from-git'],
  name: 'boilerplate',
  repositoryUrl: 'https://git-codecommit.us-east-1.amazonaws.com/v1/repos/boilerplate',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();