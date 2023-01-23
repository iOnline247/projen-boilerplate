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
            readme: {
                filename: 'README.md',
                contents: '# replace this',
            },
            ...options,
            // any options down here would be forced and not changeable
            cdkVersion,
        });
        // deps are better added like this
        this.addDeps(`aws-cdk-lib@${cdkVersion}`, 'constructs@10.1.94');
    }
}
exports.PanlBoilerplateApp = PanlBoilerplateApp;
_a = JSII_RTTI_SYMBOL_1;
PanlBoilerplateApp[_a] = { fqn: "boilerplate.PanlBoilerplateApp", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNEM7QUFFNUMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBSTVCLE1BQWEsa0JBQW1CLFNBQVEsZUFBTSxDQUFDLG1CQUFtQjtJQUNoRSxZQUFZLE9BQWlDO1FBQzNDLEtBQUssQ0FBQztZQUNKLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxjQUFjLEVBQUUsbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2pELE1BQU0sRUFBRTtnQkFDTixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjtZQUNELEdBQUcsT0FBTztZQUNWLDJEQUEyRDtZQUMzRCxVQUFVO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxVQUFVLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O0FBaEJILGdEQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF3c2NkaywgamF2YXNjcmlwdCB9IGZyb20gJ3Byb2plbic7XG5cbmNvbnN0IGNka1ZlcnNpb24gPSAnMi42MC4wJztcblxuZXhwb3J0IGludGVyZmFjZSBQYW5sQm9pbGVycGxhdGVSZXBvUHJvcHMgZXh0ZW5kcyBhd3NjZGsuQXdzQ2RrVHlwZVNjcmlwdEFwcE9wdGlvbnMge31cblxuZXhwb3J0IGNsYXNzIFBhbmxCb2lsZXJwbGF0ZUFwcCBleHRlbmRzIGF3c2Nkay5Bd3NDZGtUeXBlU2NyaXB0QXBwIHtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogUGFubEJvaWxlcnBsYXRlUmVwb1Byb3BzKSB7XG4gICAgc3VwZXIoe1xuICAgICAgYXV0aG9yTmFtZTogJ01hdHRoZXcgQnJhbWVyJyxcbiAgICAgIGF1dGhvckVtYWlsOiAnbWJyYW1lckBwYW5zb3BoaWNsZWFybmluZy5jb20nLFxuICAgICAgcGFja2FnZU1hbmFnZXI6IGphdmFzY3JpcHQuTm9kZVBhY2thZ2VNYW5hZ2VyLk5QTSxcbiAgICAgIHJlYWRtZToge1xuICAgICAgICBmaWxlbmFtZTogJ1JFQURNRS5tZCcsXG4gICAgICAgIGNvbnRlbnRzOiAnIyByZXBsYWNlIHRoaXMnLFxuICAgICAgfSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAvLyBhbnkgb3B0aW9ucyBkb3duIGhlcmUgd291bGQgYmUgZm9yY2VkIGFuZCBub3QgY2hhbmdlYWJsZVxuICAgICAgY2RrVmVyc2lvbixcbiAgICB9KTtcbiAgICAvLyBkZXBzIGFyZSBiZXR0ZXIgYWRkZWQgbGlrZSB0aGlzXG4gICAgdGhpcy5hZGREZXBzKGBhd3MtY2RrLWxpYkAke2Nka1ZlcnNpb259YCwgJ2NvbnN0cnVjdHNAMTAuMS45NCcpO1xuICB9XG59XG4iXX0=