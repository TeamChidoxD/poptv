// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  servicio_programas:"http://localhost/apis/programas.php",

  firebase: {
    apiKey: "AIzaSyAvzYDRT8v8v2pJj5GmuQPnayT3mPiu_iQ",
    authDomain: "poptv-21a92.firebaseapp.com",
    databaseURL: "https://poptv-21a92.firebaseio.com",
    projectId: "poptv-21a92",
    storageBucket: "",
    messagingSenderId: "560507472876",
    appId: "1:560507472876:web:f656c824621ea4d2"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.3.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAvzYDRT8v8v2pJj5GmuQPnayT3mPiu_iQ",
    authDomain: "poptv-21a92.firebaseapp.com",
    databaseURL: "https://poptv-21a92.firebaseio.com",
    projectId: "poptv-21a92",
    storageBucket: "",
    messagingSenderId: "560507472876",
    appId: "1:560507472876:web:f656c824621ea4d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>*/
