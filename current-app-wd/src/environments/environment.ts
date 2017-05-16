// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD5HTo1nFWGuf3pkyfl9ROrlAr5tVgOr9k",
    authDomain: "grocerybuddytest.firebaseapp.com",
    databaseURL: "https://grocerybuddytest.firebaseio.com",
    projectId: "grocerybuddytest",
    storageBucket: "grocerybuddytest.appspot.com",
    messagingSenderId: "167251965866"
  }
};
