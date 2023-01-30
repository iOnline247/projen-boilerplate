import { awscdk, typescript } from 'projen';
export interface PanlBoilerplateRepoProps extends awscdk.AwsCdkTypeScriptAppOptions {
}
export declare class PanlBoilerplateApp extends typescript.TypeScriptAppProject {
    constructor(options: PanlBoilerplateRepoProps);
}
