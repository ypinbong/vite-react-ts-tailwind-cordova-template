# vite-react-ts-tailwind-cordova-template April 04, 2022
Basic config of vite + react + ts + tailwind + cordova with custom scripts to make the app in cordova.

*This is porting [this repo template](https://github.com/ypinbong/vite-react-ts-tailwind-template) inside cordova for mobile development.*

To recreate this repo locally you can:
-

1. Follow the instructions for creating a `vite` + `react` + `ts` + `tailwindcss` stack [here](https://github.com/ypinbong/vite-react-ts-tailwind-template) or clone the said repo and install dependencies (`npm ci`):
```sh
git clone https://github.com/ypinbong/vite-react-ts-tailwind-template.git
```
2. install cordova cli
```sh
npm install -g cordova
```
3. create a cordova app inside root using:`cordova create path [id [name]] [options]` e.g.:
```sh
cordova create cordova com.cordova.helloworld HelloWorld
```
4. go to cordova folder you just created `cd <cordova path>` and add a platform of your choosing 
```sh
cd cordova
cordova platform add android
```
5. go back to your root folder (`cd ..`) and add cordova script `<script src="cordova.js"></script>` to your main index.html you can also add the other `meta` tags from `cordova/www/index.html` if you choose to. Your index.html should look like this:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!--
    Customize this policy to fit your own app's needs. For more guidance, please refer to the docs:
        https://cordova.apache.org/docs/en/latest/
    Some notes:
        * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
        * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
        * Enable inline JS: add 'unsafe-inline' to default-src
    -->
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover">
    <meta name="color-scheme" content="light dark">
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script src="cordova.js"></script>
  </body>
</html>
 ```
6. open react's `main.tsx` content and replace the file with:
```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    )
}
```
7. add the following scripts to package.json's scripts
```json
"copy-to-cordova": "cp -r dist/* cordova/www && cp -r dist/assets/* cordova/www/assets && rm -rf dist",
"clear-cordova": "rm -rf cordova/www/*",
"cordova-run": "cd cordova && cordova run android",
"cordova": "npm run build && npm run clear-cordova && npm run copy-to-cordova && npm run cordova-run",
```
8. run the `cordova` script to automatically build vite and run your app inside cordova, make sure you have your emulator open or your device connected
```sh
npm run cordova
```
Troubleshooting
-
If you get an error about `command not found` (you may not encounter this when you're using linux), then you need to configure your npm script-shell to use git's bash, path may vary depending on where you install git
```sh
npm config set script-shell "C:\\Program Files\\Git\\bin\\bash.exe"
```
That's it!
Happy hacking!
