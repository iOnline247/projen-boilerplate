"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanlBoilerplateApp = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const cdkVersion = '2.60.0';
class PanlBoilerplateApp extends projen_1.awscdk.AwsCdkTypeScriptApp {
    constructor(options) {
        super({
            authorName: 'Matthew Bramer',
            authorEmail: 'mbramer@pansophiclearning.com',
            packageManager: projen_1.javascript.NodePackageManager.NPM,
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
            releaseTrigger: projen_1.release.ReleaseTrigger.manual(),
            projenrcTs: true,
            releaseToNpm: false,
            licensed: false,
            prettier: true,
            prettierOptions: {
                settings: {
                    printWidth: 120,
                    singleQuote: true,
                    trailingComma: projen_1.javascript.TrailingComma.ALL,
                },
            },
        });
        // deps are better added like this
        this.addDeps(`aws-cdk-lib@${cdkVersion}`, 'constructs@10.1.94');
    }
}
exports.PanlBoilerplateApp = PanlBoilerplateApp;
_a = JSII_RTTI_SYMBOL_1;
PanlBoilerplateApp[_a] = { fqn: "boilerplate.PanlBoilerplateApp", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBcUQ7QUFFckQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBSTVCLE1BQWEsa0JBQW1CLFNBQVEsZUFBTSxDQUFDLG1CQUFtQjtJQUNoRSxZQUFZLE9BQWlDO1FBQzNDLEtBQUssQ0FBQztZQUNKLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxjQUFjLEVBQUUsbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2pELE1BQU0sRUFBRSxLQUFLO1lBQ2IsYUFBYSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7WUFDRCxHQUFHLE9BQU87WUFDViwyREFBMkQ7WUFDM0QsVUFBVTtZQUNWLGNBQWMsRUFBRSxnQkFBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDL0MsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsSUFBSTtZQUNkLGVBQWUsRUFBRTtnQkFDZixRQUFRLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLGFBQWEsRUFBRSxtQkFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHO2lCQUM1QzthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxVQUFVLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O0FBaENILGdEQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF3c2NkaywgamF2YXNjcmlwdCwgcmVsZWFzZSB9IGZyb20gJ3Byb2plbic7XG5cbmNvbnN0IGNka1ZlcnNpb24gPSAnMi42MC4wJztcblxuZXhwb3J0IGludGVyZmFjZSBQYW5sQm9pbGVycGxhdGVSZXBvUHJvcHMgZXh0ZW5kcyBhd3NjZGsuQXdzQ2RrVHlwZVNjcmlwdEFwcE9wdGlvbnMge31cblxuZXhwb3J0IGNsYXNzIFBhbmxCb2lsZXJwbGF0ZUFwcCBleHRlbmRzIGF3c2Nkay5Bd3NDZGtUeXBlU2NyaXB0QXBwIHtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogUGFubEJvaWxlcnBsYXRlUmVwb1Byb3BzKSB7XG4gICAgc3VwZXIoe1xuICAgICAgYXV0aG9yTmFtZTogJ01hdHRoZXcgQnJhbWVyJyxcbiAgICAgIGF1dGhvckVtYWlsOiAnbWJyYW1lckBwYW5zb3BoaWNsZWFybmluZy5jb20nLFxuICAgICAgcGFja2FnZU1hbmFnZXI6IGphdmFzY3JpcHQuTm9kZVBhY2thZ2VNYW5hZ2VyLk5QTSxcbiAgICAgIGdpdGh1YjogZmFsc2UsXG4gICAgICBnaXRodWJPcHRpb25zOiB7XG4gICAgICAgIG1lcmdpZnk6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJlYWRtZToge1xuICAgICAgICBmaWxlbmFtZTogJ1JFQURNRS5tZCcsXG4gICAgICAgIGNvbnRlbnRzOiAnIyByZXBsYWNlIHRoaXMnLFxuICAgICAgfSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAvLyBhbnkgb3B0aW9ucyBkb3duIGhlcmUgd291bGQgYmUgZm9yY2VkIGFuZCBub3QgY2hhbmdlYWJsZVxuICAgICAgY2RrVmVyc2lvbixcbiAgICAgIHJlbGVhc2VUcmlnZ2VyOiByZWxlYXNlLlJlbGVhc2VUcmlnZ2VyLm1hbnVhbCgpLFxuICAgICAgcHJvamVucmNUczogdHJ1ZSxcbiAgICAgIHJlbGVhc2VUb05wbTogZmFsc2UsXG4gICAgICBsaWNlbnNlZDogZmFsc2UsXG4gICAgICBwcmV0dGllcjogdHJ1ZSxcbiAgICAgIHByZXR0aWVyT3B0aW9uczoge1xuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHByaW50V2lkdGg6IDEyMCxcbiAgICAgICAgICBzaW5nbGVRdW90ZTogdHJ1ZSxcbiAgICAgICAgICB0cmFpbGluZ0NvbW1hOiBqYXZhc2NyaXB0LlRyYWlsaW5nQ29tbWEuQUxMLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyBkZXBzIGFyZSBiZXR0ZXIgYWRkZWQgbGlrZSB0aGlzXG4gICAgdGhpcy5hZGREZXBzKGBhd3MtY2RrLWxpYkAke2Nka1ZlcnNpb259YCwgJ2NvbnN0cnVjdHNAMTAuMS45NCcpO1xuICB9XG59XG4iXX0=