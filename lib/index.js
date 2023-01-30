"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanlBoilerplateApp = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const cdkVersion = '2.60.0';
// export class PanlBoilerplateApp extends javascript.NodeProject {
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
        // this.addDeps(`aws-cdk-lib@${cdkVersion}`, 'constructs@10.1.94');
    }
}
exports.PanlBoilerplateApp = PanlBoilerplateApp;
_a = JSII_RTTI_SYMBOL_1;
PanlBoilerplateApp[_a] = { fqn: "boilerplate.PanlBoilerplateApp", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBcUQ7QUFFckQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBSTVCLG1FQUFtRTtBQUNuRSxNQUFhLGtCQUFtQixTQUFRLGVBQU0sQ0FBQyxtQkFBbUI7SUFDaEUsWUFBWSxPQUFpQztRQUMzQyxLQUFLLENBQUM7WUFDSixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsY0FBYyxFQUFFLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUNqRCxNQUFNLEVBQUUsS0FBSztZQUNiLGFBQWEsRUFBRTtnQkFDYixPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCO1lBQ0QsR0FBRyxPQUFPO1lBQ1YsMkRBQTJEO1lBQzNELFVBQVU7WUFDVixjQUFjLEVBQUUsZ0JBQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQy9DLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxlQUFlLEVBQUU7Z0JBQ2YsUUFBUSxFQUFFO29CQUNSLFVBQVUsRUFBRSxHQUFHO29CQUNmLFdBQVcsRUFBRSxJQUFJO29CQUNqQixhQUFhLEVBQUUsbUJBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRztpQkFDNUM7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILGtDQUFrQztRQUNsQyxtRUFBbUU7SUFDckUsQ0FBQzs7QUFoQ0gsZ0RBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXdzY2RrLCBqYXZhc2NyaXB0LCByZWxlYXNlIH0gZnJvbSAncHJvamVuJztcblxuY29uc3QgY2RrVmVyc2lvbiA9ICcyLjYwLjAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhbmxCb2lsZXJwbGF0ZVJlcG9Qcm9wcyBleHRlbmRzIGF3c2Nkay5Bd3NDZGtUeXBlU2NyaXB0QXBwT3B0aW9ucyB7fVxuXG4vLyBleHBvcnQgY2xhc3MgUGFubEJvaWxlcnBsYXRlQXBwIGV4dGVuZHMgamF2YXNjcmlwdC5Ob2RlUHJvamVjdCB7XG5leHBvcnQgY2xhc3MgUGFubEJvaWxlcnBsYXRlQXBwIGV4dGVuZHMgYXdzY2RrLkF3c0Nka1R5cGVTY3JpcHRBcHAge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYW5sQm9pbGVycGxhdGVSZXBvUHJvcHMpIHtcbiAgICBzdXBlcih7XG4gICAgICBhdXRob3JOYW1lOiAnTWF0dGhldyBCcmFtZXInLFxuICAgICAgYXV0aG9yRW1haWw6ICdtYnJhbWVyQHBhbnNvcGhpY2xlYXJuaW5nLmNvbScsXG4gICAgICBwYWNrYWdlTWFuYWdlcjogamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgZ2l0aHViOiBmYWxzZSxcbiAgICAgIGdpdGh1Yk9wdGlvbnM6IHtcbiAgICAgICAgbWVyZ2lmeTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcmVhZG1lOiB7XG4gICAgICAgIGZpbGVuYW1lOiAnUkVBRE1FLm1kJyxcbiAgICAgICAgY29udGVudHM6ICcjIHJlcGxhY2UgdGhpcycsXG4gICAgICB9LFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIC8vIGFueSBvcHRpb25zIGRvd24gaGVyZSB3b3VsZCBiZSBmb3JjZWQgYW5kIG5vdCBjaGFuZ2VhYmxlXG4gICAgICBjZGtWZXJzaW9uLFxuICAgICAgcmVsZWFzZVRyaWdnZXI6IHJlbGVhc2UuUmVsZWFzZVRyaWdnZXIubWFudWFsKCksXG4gICAgICBwcm9qZW5yY1RzOiB0cnVlLFxuICAgICAgcmVsZWFzZVRvTnBtOiBmYWxzZSxcbiAgICAgIGxpY2Vuc2VkOiBmYWxzZSxcbiAgICAgIHByZXR0aWVyOiB0cnVlLFxuICAgICAgcHJldHRpZXJPcHRpb25zOiB7XG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgcHJpbnRXaWR0aDogMTIwLFxuICAgICAgICAgIHNpbmdsZVF1b3RlOiB0cnVlLFxuICAgICAgICAgIHRyYWlsaW5nQ29tbWE6IGphdmFzY3JpcHQuVHJhaWxpbmdDb21tYS5BTEwsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIGRlcHMgYXJlIGJldHRlciBhZGRlZCBsaWtlIHRoaXNcbiAgICAvLyB0aGlzLmFkZERlcHMoYGF3cy1jZGstbGliQCR7Y2RrVmVyc2lvbn1gLCAnY29uc3RydWN0c0AxMC4xLjk0Jyk7XG4gIH1cbn1cbiJdfQ==