// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Taufigram Prod',
  apiHost: 'http://a00900b78d9d24f9eb3c82f0263cc278-253774683.us-east-2.elb.amazonaws.com:8080/api/v0'
  //KD 200803 http:// ENORM WICHTIG, sonst CORS-Fehler
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
