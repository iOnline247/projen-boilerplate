"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __infra, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanlBoilerplateApp = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
// import * as projen from 'projen';
const cdkVersion = '2.60.0';
class PanlBoilerplateApp extends projen_1.javascript.NodeProject {
    // export class PanlBoilerplateApp extends awscdk.AwsCdkTypeScriptApp {
    constructor(options) {
        super({
            authorName: 'Matthew Bramer',
            authorEmail: 'mbramer@pansophiclearning.com',
            packageManager: projen_1.javascript.NodePackageManager.NPM,
            readme: {
                filename: 'README.md',
                contents: '# did this change?',
            },
            ...options,
            // any options down here would be forced and not changeable
            github: false,
            githubOptions: {
                mergify: false,
            },
            releaseTrigger: projen_1.release.ReleaseTrigger.manual(),
            releaseToNpm: false,
            // eslint: true,
            // eslintOptions: {
            //   dirs: ['./src', './infra'],
            //   prettier: true,
            // },
            prettier: true,
            prettierOptions: {
                settings: {
                    printWidth: 120,
                    singleQuote: true,
                    trailingComma: projen_1.javascript.TrailingComma.ALL,
                },
            },
        });
        __infra.set(this, void 0);
        // deps are better added like this
        this.addDevDeps('projen@*');
        // this.addDevDeps(`aws-cdk-lib@${cdkVersion}`, 'constructs@10.1.94', 'projen@*');
        // this.addDeps();
        __classPrivateFieldSet(this, __infra, new projen_1.awscdk.AwsCdkTypeScriptApp({
            name: 'my-frontend-pipeline',
            parent: this,
            outdir: 'pipeline',
            defaultReleaseBranch: 'deploy',
            packageManager: projen_1.javascript.NodePackageManager.NPM,
            cdkVersion,
            deps: [`aws-cdk-lib@${cdkVersion}`, 'constructs@10.1.94', 'projen@*'],
        }));
        __classPrivateFieldGet(this, __infra).synth();
    }
}
exports.PanlBoilerplateApp = PanlBoilerplateApp;
__infra = new WeakMap(), _a = JSII_RTTI_SYMBOL_1;
PanlBoilerplateApp[_a] = { fqn: "boilerplate.PanlBoilerplateApp", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXFEO0FBQ3JELG9DQUFvQztBQUVwQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFJNUIsTUFBYSxrQkFBbUIsU0FBUSxtQkFBVSxDQUFDLFdBQVc7SUFFNUQsdUVBQXVFO0lBQ3ZFLFlBQVksT0FBaUM7UUFDM0MsS0FBSyxDQUFDO1lBQ0osVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLGNBQWMsRUFBRSxtQkFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUc7WUFDakQsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsb0JBQW9CO2FBQy9CO1lBQ0QsR0FBRyxPQUFPO1lBQ1YsMkRBQTJEO1lBQzNELE1BQU0sRUFBRSxLQUFLO1lBQ2IsYUFBYSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxjQUFjLEVBQUUsZ0JBQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQy9DLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsZ0NBQWdDO1lBQ2hDLG9CQUFvQjtZQUNwQixLQUFLO1lBQ0wsUUFBUSxFQUFFLElBQUk7WUFDZCxlQUFlLEVBQUU7Z0JBQ2YsUUFBUSxFQUFFO29CQUNSLFVBQVUsRUFBRSxHQUFHO29CQUNmLFdBQVcsRUFBRSxJQUFJO29CQUNqQixhQUFhLEVBQUUsbUJBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRztpQkFDNUM7YUFDRjtTQVVGLENBQUMsQ0FBQztRQXpDTCwwQkFBb0M7UUEwQ2xDLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLGtGQUFrRjtRQUNsRixrQkFBa0I7UUFFbEIsdUJBQUEsSUFBSSxXQUFXLElBQUksZUFBTSxDQUFDLG1CQUFtQixDQUFDO1lBQzVDLElBQUksRUFBRSxzQkFBc0I7WUFDNUIsTUFBTSxFQUFFLElBQUk7WUFDWixNQUFNLEVBQUUsVUFBVTtZQUNsQixvQkFBb0IsRUFBRSxRQUFRO1lBQzlCLGNBQWMsRUFBRSxtQkFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUc7WUFDakQsVUFBVTtZQUNWLElBQUksRUFBRSxDQUFDLGVBQWUsVUFBVSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxDQUFDO1NBQ3RFLENBQUMsRUFBQztRQUVILHNDQUFhLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O0FBM0RILGdEQTREQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF3c2NkaywgamF2YXNjcmlwdCwgcmVsZWFzZSB9IGZyb20gJ3Byb2plbic7XG4vLyBpbXBvcnQgKiBhcyBwcm9qZW4gZnJvbSAncHJvamVuJztcblxuY29uc3QgY2RrVmVyc2lvbiA9ICcyLjYwLjAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhbmxCb2lsZXJwbGF0ZVJlcG9Qcm9wcyBleHRlbmRzIGF3c2Nkay5Bd3NDZGtUeXBlU2NyaXB0QXBwT3B0aW9ucyB7fVxuXG5leHBvcnQgY2xhc3MgUGFubEJvaWxlcnBsYXRlQXBwIGV4dGVuZHMgamF2YXNjcmlwdC5Ob2RlUHJvamVjdCB7XG4gICNfaW5mcmE6IGF3c2Nkay5Bd3NDZGtUeXBlU2NyaXB0QXBwO1xuICAvLyBleHBvcnQgY2xhc3MgUGFubEJvaWxlcnBsYXRlQXBwIGV4dGVuZHMgYXdzY2RrLkF3c0Nka1R5cGVTY3JpcHRBcHAge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYW5sQm9pbGVycGxhdGVSZXBvUHJvcHMpIHtcbiAgICBzdXBlcih7XG4gICAgICBhdXRob3JOYW1lOiAnTWF0dGhldyBCcmFtZXInLFxuICAgICAgYXV0aG9yRW1haWw6ICdtYnJhbWVyQHBhbnNvcGhpY2xlYXJuaW5nLmNvbScsXG4gICAgICBwYWNrYWdlTWFuYWdlcjogamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgcmVhZG1lOiB7XG4gICAgICAgIGZpbGVuYW1lOiAnUkVBRE1FLm1kJyxcbiAgICAgICAgY29udGVudHM6ICcjIGRpZCB0aGlzIGNoYW5nZT8nLFxuICAgICAgfSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAvLyBhbnkgb3B0aW9ucyBkb3duIGhlcmUgd291bGQgYmUgZm9yY2VkIGFuZCBub3QgY2hhbmdlYWJsZVxuICAgICAgZ2l0aHViOiBmYWxzZSxcbiAgICAgIGdpdGh1Yk9wdGlvbnM6IHtcbiAgICAgICAgbWVyZ2lmeTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcmVsZWFzZVRyaWdnZXI6IHJlbGVhc2UuUmVsZWFzZVRyaWdnZXIubWFudWFsKCksXG4gICAgICByZWxlYXNlVG9OcG06IGZhbHNlLFxuICAgICAgLy8gZXNsaW50OiB0cnVlLFxuICAgICAgLy8gZXNsaW50T3B0aW9uczoge1xuICAgICAgLy8gICBkaXJzOiBbJy4vc3JjJywgJy4vaW5mcmEnXSxcbiAgICAgIC8vICAgcHJldHRpZXI6IHRydWUsXG4gICAgICAvLyB9LFxuICAgICAgcHJldHRpZXI6IHRydWUsXG4gICAgICBwcmV0dGllck9wdGlvbnM6IHtcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBwcmludFdpZHRoOiAxMjAsXG4gICAgICAgICAgc2luZ2xlUXVvdGU6IHRydWUsXG4gICAgICAgICAgdHJhaWxpbmdDb21tYTogamF2YXNjcmlwdC5UcmFpbGluZ0NvbW1hLkFMTCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyB0c2NvbmZpZzoge1xuICAgICAgLy8gICBpbmNsdWRlOiBbJy4vc3JjLyoqLyouanMnLCAnLi9zcmMvKiovKi50cycsICcuL2luZnJhLyoqLyoudHMnXSxcbiAgICAgIC8vICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAvLyAgICAgYWxsb3dKczogdHJ1ZSxcbiAgICAgIC8vICAgICBleHBlcmltZW50YWxEZWNvcmF0b3JzOiBmYWxzZSxcbiAgICAgIC8vICAgICBpbmxpbmVTb3VyY2VNYXA6ICEhb3B0aW9ucz8udHNjb25maWc/LmNvbXBpbGVyT3B0aW9ucz8uaW5saW5lU291cmNlTWFwLFxuICAgICAgLy8gICAgIGlubGluZVNvdXJjZXM6ICEhb3B0aW9ucz8udHNjb25maWc/LmNvbXBpbGVyT3B0aW9ucz8uaW5saW5lU291cmNlcyxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vIH0sXG4gICAgfSk7XG4gICAgLy8gZGVwcyBhcmUgYmV0dGVyIGFkZGVkIGxpa2UgdGhpc1xuICAgIHRoaXMuYWRkRGV2RGVwcygncHJvamVuQConKTtcbiAgICAvLyB0aGlzLmFkZERldkRlcHMoYGF3cy1jZGstbGliQCR7Y2RrVmVyc2lvbn1gLCAnY29uc3RydWN0c0AxMC4xLjk0JywgJ3Byb2plbkAqJyk7XG4gICAgLy8gdGhpcy5hZGREZXBzKCk7XG5cbiAgICB0aGlzLiNfaW5mcmEgPSBuZXcgYXdzY2RrLkF3c0Nka1R5cGVTY3JpcHRBcHAoe1xuICAgICAgbmFtZTogJ215LWZyb250ZW5kLXBpcGVsaW5lJyxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG91dGRpcjogJ3BpcGVsaW5lJyxcbiAgICAgIGRlZmF1bHRSZWxlYXNlQnJhbmNoOiAnZGVwbG95JyxcbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBqYXZhc2NyaXB0Lk5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICBjZGtWZXJzaW9uLFxuICAgICAgZGVwczogW2Bhd3MtY2RrLWxpYkAke2Nka1ZlcnNpb259YCwgJ2NvbnN0cnVjdHNAMTAuMS45NCcsICdwcm9qZW5AKiddLFxuICAgIH0pO1xuXG4gICAgdGhpcy4jX2luZnJhLnN5bnRoKCk7XG4gIH1cbn1cbiJdfQ==