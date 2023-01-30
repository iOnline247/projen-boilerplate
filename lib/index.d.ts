import { awscdk, javascript } from 'projen';
export interface PanlBoilerplateRepoProps extends awscdk.AwsCdkTypeScriptAppOptions {
}
export declare class PanlBoilerplateApp extends javascript.NodeProject {
    #private;
    constructor(options: PanlBoilerplateRepoProps);
}
