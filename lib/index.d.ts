import { awscdk } from 'projen';
export interface PanlBoilerplateRepoProps extends awscdk.AwsCdkTypeScriptAppOptions {
}
export declare class PanlBoilerplateApp extends awscdk.AwsCdkTypeScriptApp {
    constructor(options: PanlBoilerplateRepoProps);
}
