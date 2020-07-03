// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // 取得したFirebaseの情報を設定してください
  firebase: {
    apiKey: "AIzaSyBzhUeyR2yywWB8n_IhZhzvpeFycaYXHqc",
    authDomain: "angular-chat-63aa8.firebaseapp.com",
    databaseURL: "https://angular-chat-63aa8.firebaseio.com/",
    projectId: "angular-chat-63aa8",
    storageBucket: "angular-chat-63aa8.appspot.com",
    messagingSenderId: "440440617948",
    appID: "1:440440617948:web:ea4b8b5775793432c6ed19"
  }
};
